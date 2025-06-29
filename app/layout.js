"use client";
import { Figtree, Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css"
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/Components/Navbar/navbar";
import { useState, useEffect } from "react";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Vaibhav's portfolio V3",
//   description: "Coded in Next.JS V15.3.4",
// };

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.variable}`}>
        <ThemeProvider
          storageKey="theme"
          defaultTheme="system"
          enableSystem={true}
          enableColorScheme={true}
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
