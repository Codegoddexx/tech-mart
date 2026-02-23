<div align="center">

<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-NeonDB-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />

<br/>
<br/>

# 🛒 Tech Mart

### A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects.

**Authentic launches. Real builders. Genuine feedback.**

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_App-6366f1?style=for-the-badge)](YOUR_VERCEL_LINK_HERE)
&nbsp;
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br/>

![Tech Mart Banner](https://placehold.co/1200x600/6366f1/ffffff?text=Tech+Mart&font=montserrat)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database Setup](#-database-setup)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Tech Mart** is a full-stack community platform built from scratch where creators can submit and showcase their products — from AI tools and SaaS apps to open-source projects and creative experiments. The community can discover, upvote, and engage with the latest launches in a clean, modern interface.

Think Product Hunt, but built with the latest cutting-edge web technologies and a focus on authentic community engagement.

---

## 💫 Features

| Feature | Description |
|---|---|
| 📝 **Product Submission** | Submit products with full validation, moderation queue, and status tracking |
| 🎨 **Interactive UI** | Beautiful product cards, featured sections, and recently launched layouts |
| 🔒 **Secure File Handling** | Protected routes, secure API endpoints, and safe file processing |
| 👨‍💼 **Admin Panel** | Full product management, moderation tools, and approval workflows |
| 📊 **Featured Products** | Curated featured and recently launched product sections |
| 📱 **Responsive Design** | Fully optimized for mobile and desktop experiences |
| 🔄 **Real-time Updates** | Path revalidation for instant content refreshes |
| 🔔 **Toast Notifications** | Real-time feedback for submissions, updates, and errors |
| 🗳️ **Voting System** | Community upvoting and downvoting for product rankings |
| 🏷️ **Tag Categorization** | Browse and filter products by tags and categories |
| 🔍 **SEO Optimization** | SEO-friendly product pages with metadata and Open Graph support |
| 📈 **Performance** | Optimized with Next.js Server Components and static generation |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | App Router, Server Components, SSR, API Routes |
| [React 19](https://react.dev/) | UI components with latest concurrent features |
| [TailwindCSS 4](https://tailwindcss.com/) | Utility-first responsive styling |
| [ShadcN UI](https://ui.shadcn.com/) | Accessible, customizable component library |

### Backend & Database
| Technology | Purpose |
|---|---|
| [NeonDB](https://neon.tech/) | Serverless PostgreSQL database |
| [Drizzle ORM](https://orm.drizzle.team/) | Type-safe database queries and migrations |
| [Zod](https://zod.dev/) | Schema validation and form data parsing |

### Authentication & Infrastructure
| Technology | Purpose |
|---|---|
| [Clerk](https://clerk.com/) | Auth with Passkeys, GitHub, and Google Sign-in |
| [TypeScript](https://www.typescriptlang.org/) | Static typing across the entire codebase |
| [Vercel](https://vercel.com/) | Deployment and edge hosting |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- A [NeonDB](https://neon.tech/) account
- A [Clerk](https://clerk.com/) account

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/tech-mart.git
cd tech-mart
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

```bash
cp .env.example .env.local
```

Fill in your environment variables (see [Environment Variables](#-environment-variables) below).

**4. Set up the database**

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

**5. Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
# Database (NeonDB)
DATABASE_URL=your_neon_database_url

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

> ⚠️ Never commit your `.env.local` file. It is already included in `.gitignore`.

---

## 🗄️ Database Setup

This project uses **Drizzle ORM** with **NeonDB (PostgreSQL)**.

**Generate migrations from your schema:**
```bash
npx drizzle-kit generate
```

**Apply migrations to the database:**
```bash
npx drizzle-kit migrate
```

**Open Drizzle Studio (database GUI):**
```bash
npx drizzle-kit studio
```

---

## 📁 Project Structure

```
tech-mart/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # Authentication routes
│   ├── admin/                  # Admin panel
│   ├── products/               # Product pages
│   ├── submit/                 # Product submission page
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── common/                 # Shared components (Header, Footer)
│   ├── forms/                  # Form components
│   ├── products/               # Product-specific components
│   └── ui/                     # ShadcN UI components
├── db/
│   ├── index.ts                # Database connection
│   └── schema.ts               # Drizzle schema definitions
├── drizzle/                    # Generated migrations
├── lib/
│   ├── products/               # Product actions and validations
│   └── utils.ts                # Utility functions
├── types/                      # TypeScript type definitions
├── drizzle.config.ts           # Drizzle ORM config
└── next.config.ts              # Next.js config
```

---

## 🌍 Deployment

This app is deployed on **Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/tech-mart)

**To deploy your own instance:**

1. Push your code to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add all environment variables in the Vercel dashboard
4. Deploy 🚀

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Built with ❤️ by [@Codegoddexx](https://github.com/Codegoddexx)

⭐ Star this repo if you found it helpful!

</div>
