import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Ramya | Software Engineering Evaluator Portfolio",
  description: "Digital profile portfolio for Ramya, an expert QA Automation Engineer and Software Evaluator specializing in data integrity and big data systems.",
  keywords: ["Software Evaluator", "QA Automation", "Hadoop Testing", "IntelliForge AI", "Data QA"],
  authors: [{ name: "Ramya" }, { name: "IntelliForge AI", url: "https://www.intelliforge.tech/" }],
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
