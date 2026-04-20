"use client";

import Link from "next/link";
import Button from "./ui/Button";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/programs" },
  { name: "Trainers", href: "/trainers" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
          <div className="w-8 h-8 bg-brand rounded-md flex items-center justify-center transform group-hover:scale-105 transition-transform">
             <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 10.5H18V8h-2v2.5H8V8H6v2.5H3.5v3H6V16H3.5v3H6v2.5h2V19h8v2.5h2V19h2.5v-3H18v-2.5h2.5v-3zm-6.5 5.5h-4v-5h4v5z" />
             </svg>
          </div>
          <span className="font-heading text-xl font-bold tracking-wider text-white mt-1">FITWELL</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-brand transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button href="/contact">Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             {isMobileMenuOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#111111] border-b border-white/5 shadow-xl">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-gray-300 hover:text-brand transition-colors uppercase tracking-wider block py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 pb-2" onClick={closeMenu}>
               <Button href="/contact" className="w-full flex justify-center">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
