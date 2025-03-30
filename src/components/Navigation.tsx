'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 nav-blur">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg font-normal text-primary hover:text-secondary transition-colors duration-200">
            DL
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#experience" className="text-sm text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-wider">
              Experience
            </Link>
            <Link href="#contact" className="text-sm text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-wider">
              Contact
            </Link>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary hover:text-primary transition-colors duration-200"
            >
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden py-2">
            <Link href="#experience" className="block py-2 text-sm text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-wider">
              Experience
            </Link>
            <Link href="#contact" className="block py-2 text-sm text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-wider">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
} 