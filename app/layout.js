import { Figtree } from "next/font/google";
import "../styles/globals.css"
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/Components/Navbar/navbar";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata = {
  title: "thevaibhav’s home",
};


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
