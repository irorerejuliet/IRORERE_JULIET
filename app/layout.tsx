import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Providers from './providers';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juliet | Frontend Engineer",
  description:
    "Frontend engineer building scalable, high-performance web applications with React, Next.js, and TypeScript.",
  keywords: [
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "UI Developer",
    "Web Developer Portfolio",
    "Juliet Developer",
  ],
  authors: [{ name: "Juliet" }],
  creator: "Juliet",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Juliet | Frontend Engineer",
    description:
      "Frontend Developer building scalable, high-performance web applications with React, Next.js, and TypeScript.",
    url: "https://your-domain.com",
    siteName: "Juliet Portfolio",
    type: "website",
    images: [
      {
        url: "/images/potriat.jpg",
        width: 1200,
        height: 630,
        alt: "Juliet Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juliet | Frontend Engineer",
    description:
      "Frontend Developer building scalable, high-performance web applications with React, Next.js, and TypeScript.",
    images: ["/images/potriat.jpg"],
  },
  robots:{
index: true,
follow: false,
nocache: false,
googleBot: {
  index: true,
  follow: true,
  "max-snippet": -1,
  "max-image-preview": "large",
  "max-video-preview": -1
}
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/potriat.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
