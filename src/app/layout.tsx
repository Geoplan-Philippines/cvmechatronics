import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Providers from "./core/providers";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CV Mechatronics — Smart Automation for Modern Properties",
  description:
    "Gate automation, smart glass tint, security systems, and centralized app control. Expert mechatronic installations for residential and commercial properties in the Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}