import { ReactNode } from "react";
import type { Metadata } from "next";
import "./index.css";
import SvgSprite from "@ui/components/SvgSprite";
import ThemeProvider from "@ui/theme/ThemeProvider";
import Header from "@layout/Header";

export const metadata: Metadata = {
  title: "Sukki Space",
  description: "Personal space for Sukki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SvgSprite />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
