// "use client";
import { Figtree, Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css"
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/Components/Navbar/navbar";
// import { useState, useEffect } from "react";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "thevaibhav's home",
//   icon
// }


export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>thevaibhav's home</title>
        <meta property="og:title" content="thevaibhav's home" />
        {/* <meta property="og:description" content="Hello, I’m Vaibhav. I’m a designer living in Bengaluru, India. Over the last 3 years, I have been experimenting around various domains of design be it interaction design, motion design and most recently visual design. You can check out my experiments here. I am driven by curiosity and chase high level of craftsmanship and excellence in my work. Currently, I'm working as a designer at Newton School and do experiments in my free time." />
        <meta property="og:url" content="https://www.thevaibhav.me/" />
        <meta property="og:image" content="https://www.thevaibhav.me/preview.jpg" />
        <meta property="og:image:width" content="2000" />
        <meta property="og:image:height" content="2000" />
        <meta property="og:image:alt" content="thevaibhav's home" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.thevaibhav.me/preview.jpg" />
        <meta name="twitter:image:width" content="2000" />
        <meta name="twitter:image:height" content="2000" />
        <meta property="twitter:image:alt" content="thevaibhav's home" /> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
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
