import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Share Your creations, Discover New Launches",
  description: "A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">    
      <body>
         <Header/>
        {children}
         <Footer/>
      </body>   
    </html>
    </ClerkProvider>
  );
}
