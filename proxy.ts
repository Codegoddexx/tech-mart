import { clerkClient, clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default clerkMiddleware(async (auth, request: NextRequest) => {
  const { userId, orgId } = await auth();

  // Fix for Codespaces origin mismatch with Server Actions
  const forwardedHost = request.headers.get("x-forwarded-host");
  const origin = request.headers.get("origin");
  if (forwardedHost && origin && !origin.includes(forwardedHost)) {
    const newHeaders = new Headers(request.headers);
    newHeaders.set("origin", `https://${forwardedHost}`);
    const response = NextResponse.next({
      request: { headers: newHeaders },
    });
    if (userId && !orgId) {
      // fall through to org creation below
    } else {
      return response;
    }
  }

  if (userId && !orgId) {
    try {
      const client = await clerkClient();
      const { data: organizations } =
        await client.users.getOrganizationMembershipList({ userId });

      if (organizations && organizations.length > 0) {
        return NextResponse.next();
      }

      const user = await client.users.getUser(userId);
      const orgName =
        user.fullName ? `${user.fullName}'s Organization`
        : user.firstName ? `${user.firstName}'s Organization`
        : user.username ? `${user.username}'s Organization`
        : user.primaryEmailAddress?.emailAddress
          ? `${user.primaryEmailAddress.emailAddress}'s Organization`
          : "My Organization";

      await client.organizations.createOrganization({
        name: orgName,
        createdBy: userId,
      });
      console.log("Auto-created organization:", orgName);
    } catch (error) {
      console.error("Error auto-creating organization:", error);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};