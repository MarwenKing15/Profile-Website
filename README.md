# Manel Profile Website V2

A modern, responsive, and feature-rich personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases Manel's professional profile, experience, services, testimonials, and provides a contact form for visitors.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [Deployment](#deployment)
- [Credits](#credits)
- [License](#license)

---

## Features
- **Modern UI/UX**: Clean, animated, and responsive design using Tailwind CSS.
- **About Section**: Introduction and background information.
- **Experience Timeline**: Professional experience and achievements.
- **Services**: List of services offered.
- **Testimonials**: Carousel of client or peer testimonials.
- **Contact Form**: Secure contact form with API route for submissions.
- **Theme Support**: Light and dark mode toggle.
- **Reusable Components**: Modular UI components for easy maintenance and scalability.
- **Accessibility**: Follows best practices for accessibility.

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **State Management**: React Context API
- **Forms & Validation**: Custom form components
- **Animations**: Framer Motion (if used), CSS animations
- **Package Manager**: pnpm

## Project Structure
```
├── app/                # Next.js app directory (pages, layouts, API routes)
│   ├── api/contact/    # Contact form API route
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable React components
│   ├── ui/             # UI primitives (buttons, cards, dialogs, etc.)
│   └── ...             # Feature components (about, hero, footer, etc.)
├── contexts/           # React context providers (e.g., language)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (images, logos)
├── styles/             # Additional CSS files
├── tailwind.config.ts  # Tailwind CSS configuration
├── postcss.config.mjs  # PostCSS configuration
├── next.config.mjs     # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn if preferred)

### Installation
1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd manel-profile-website-V2
   ```
2. **Install dependencies:**
   ```sh
   pnpm install
   ```
3. **Run the development server:**
   ```sh
   pnpm dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts
- `pnpm dev` — Start the development server
- `pnpm build` — Build the app for production
- `pnpm start` — Start the production server
- `pnpm lint` — Run linter

## Customization
- **Content**: Update the content in the `components/` and `app/` directories to reflect your own profile, experience, and services.
- **Images**: Replace images in the `public/assets/` directory with your own.
- **Theme**: Adjust Tailwind config and CSS for custom branding.
- **UI Components**: Use or extend the UI primitives in `components/ui/` for new features.

## Deployment
This project can be deployed to any platform that supports Node.js. Popular options include:
- [Vercel](https://vercel.com/) (recommended for Next.js)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

### Deploying to Vercel
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project into Vercel and follow the setup instructions.
3. Set any required environment variables in the Vercel dashboard.

## Credits
- Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/).
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/) and other open-source projects.

## License
This project is open source and available under the [MIT License](LICENSE).
