import "./globals.css";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import type { JSX, ReactNode } from "react";
import AosProvider from "./components/AosProvider";
import NavbarClient from "./components/layout/NavbarClient";

export const metadata: Metadata = {
  title: "KRITDAOWASET",
  description: "Portfolio website for Krit Daowaset, Front-End Developer.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps): JSX.Element {
  return (
    <html lang="th">
      <body className="font-prompt">
        <AosProvider />
        <NavbarClient />
        <main>{children}</main>
      </body>
    </html>
  );
}
