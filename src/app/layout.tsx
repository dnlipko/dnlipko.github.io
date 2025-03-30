import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Dmitrii Lipko",
  description: "Welcome to my portfolio website showcasing my work and skills in web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <ThemeProvider>
        <body className={`${inter.className} min-h-screen bg-background`}>
          <Navigation />
          <main className="container mx-auto px-4 pt-16">
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
