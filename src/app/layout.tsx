import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

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
          <nav className="fixed w-full z-50 transition-all duration-300 nav-blur">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <a href="/" className="text-lg font-normal text-primary hover:text-secondary transition-colors duration-200">
                  DL
                </a>
                <div className="hidden md:flex items-center space-x-8">
                  <a href="#experience" className="text-sm text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-wider">
                    Experience
                  </a>
                  <a href="#contact" className="text-sm text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-wider">
                    Contact
                  </a>
                  <ThemeToggle />
                </div>
                <div className="md:hidden flex items-center space-x-4">
                  <ThemeToggle />
                  <button className="text-secondary hover:text-primary transition-colors duration-200">
                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <main className="container mx-auto px-4 pt-16">
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
