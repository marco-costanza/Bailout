import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Bailout_logo.png"
              alt="Bailout"
              width={40}
              height={28}
              className="h-8 w-auto object-contain"
            />
            <p className="text-text-muted text-sm">© Bailout — Proof of Work, non promesse.</p>
          </div>
          <div className="flex gap-6">
            <Link
              href="/#proof-of-work"
              className="text-text-muted hover:text-bitcoin text-sm transition-colors"
            >
              Servizi
            </Link>
            <Link
              href="/#nodi"
              className="text-text-muted hover:text-bitcoin text-sm transition-colors"
            >
              Team
            </Link>
            <Link
              href="/#newsletter"
              className="text-text-muted hover:text-bitcoin text-sm transition-colors"
            >
              Newsletter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
