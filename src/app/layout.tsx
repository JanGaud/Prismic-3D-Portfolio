import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";

import { Providers } from "./providers";
import ThemeToggle from "./components/ThemeToggle";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My portfolio",
  description: "Portfolio of my work as a web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-raisin-white text-raisin-black dark:bg-raisin-black dark:text-raisin-white ${lexend.className}`}
      >
        <Providers>
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
