"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
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
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/protocols"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              Protocols
            </Link>
            <Link
              href="/consensus"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              Consensus
            </Link>
            <Link
              href="/consulenza"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              Consulenza
            </Link>
            <a
              href="https://marcocostanza.it/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              Area Riservata
            </a>
            <Link
              href="/richiedi-supporto"
              className="bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              Richiedi Supporto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-text-secondary hover:text-primary transition-colors focus:outline-none"
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
          <div className="md:hidden border-t border-white/10 bg-background px-2 pb-4 pt-2">
            <div className="flex flex-col space-y-2">
              <Link
                href="/protocols"
                className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary hover:text-primary hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Protocols
              </Link>
              <Link
                href="/consensus"
                className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary hover:text-primary hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Consensus
              </Link>
              <Link
                href="/consulenza"
                className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary hover:text-primary hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Consulenza
              </Link>
              <a
                href="https://marcocostanza.it/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary hover:text-primary hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Area Riservata
              </a>
              <div className="pt-2">
                <Link
                  href="/richiedi-supporto"
                  className="block w-full text-center bg-primary hover:bg-primary-hover text-white text-base font-semibold px-4 py-3 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Richiedi Supporto
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
