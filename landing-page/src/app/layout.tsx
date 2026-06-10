import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://llmpay.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LLM Pay — Your entire financial operations team, powered by AI",
    template: "%s | LLM Pay",
  },
  description:
    "Automate expenses, approvals, compliance, accounting, treasury, and reporting with intelligent AI agents working 24/7. Trusted by 70,000+ companies.",
  keywords: [
    "AI finance automation",
    "expense management",
    "accounts payable automation",
    "AI compliance monitoring",
    "corporate cards",
    "treasury management",
    "financial reporting software",
  ],
  authors: [{ name: "LLM Pay" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "LLM Pay — Your entire financial operations team, powered by AI",
    description:
      "Automate expenses, approvals, compliance, accounting, treasury, and reporting with intelligent AI agents working 24/7.",
    siteName: "LLM Pay",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLM Pay — Your entire financial operations team, powered by AI",
    description:
      "Automate expenses, approvals, compliance, accounting, treasury, and reporting with intelligent AI agents working 24/7.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F1A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
