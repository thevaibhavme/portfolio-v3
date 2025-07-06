import { Figtree } from "next/font/google";
import "../styles/globals.css"
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/Components/Navbar/navbar";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
});

export const metadata = {
  title: "thevaibhav’s home",
};


export default function RootLayout({ children }) {

  console.log("Keep Building Things");

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
