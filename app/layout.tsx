import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// Metadata
const title = "Video embedding with next-video";
const description =
  "Next-video solves the hard problems with embedding, storing, streaming, and customizing video in your Next.js app.";

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL(`http://localhost:${process.env.PORT || 3000}`),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title,
    description,
    site: "@muxhq",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${dmSans.variable} ${jetBrainsMono.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
