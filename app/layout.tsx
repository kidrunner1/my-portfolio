import "./globals.css";
import { Prompt, Noto_Sans } from "next/font/google";
import type { Metadata } from "next";
import type { JSX, ReactNode } from "react";
import NavbarClient from "./components/layout/NavbarClient";

export const metadata: Metadata = {
  title: "KRITDAOWASET",
  description: "คำอธิบายเว็บไซต์",
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto",
});

const prompt = Prompt({
  subsets: ["thai"], // ✅ FIXED
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-prompt",
});

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps): JSX.Element {
  return (
    <html
      lang="th"
      className={`${prompt.variable} ${notoSans.variable}`}
    >
      <body className="font-prompt">
        <NavbarClient />
        <main>{children}</main>
      </body>
    </html>
  );
}