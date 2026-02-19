"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/95 backdrop-blur supports-[backdrop-filter]:bg-background-dark/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/Bailout_logo.png"
              alt="Bailout Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/#proof-of-work"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-bitcoin"
            >
              Servizi
            </Link>
            <Link
              href="/#nodi"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-bitcoin"
            >
              Team
            </Link>
            <Link
              href="/#newsletter"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-bitcoin"
            >
              Newsletter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-text-secondary hover:text-bitcoin transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-white/10 px-2 pb-3 pt-2">
              <Link
                href="/#proof-of-work"
                className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary hover:text-bitcoin transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Servizi
              </Link>
              <Link
                href="/#nodi"
                className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary hover:text-bitcoin transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/#newsletter"
                className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary hover:text-bitcoin transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Newsletter
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
