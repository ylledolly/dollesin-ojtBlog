import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarGate from "@/components/layout/navbar-gate";
import SplashCursorGate from "@/components/layout/splash-cursor-gate";
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
  title: "Ylle.dev",
  description: "A 486-hour internship journey in modern web development.",
  icons: {
    icon: "/icon.svg",
  },
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
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        {/*<LenisScroll />*/}
        <SplashCursorGate />
        <NavbarGate />
        {children}
      </body>
    </html>
  );
}
