import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-dark py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Colonna 1: Brand & Payoff */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Bailout_logo.png"
                alt="Bailout"
                width={140}
                height={46}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mt-2 max-w-xs">
              Bailout: La Tua Ancora di Salvezza nel Mondo Bitcoin. Il polo educativo ed ingegneristico per diventare l'unico proprietario dei tuoi fondi.
            </p>
          </div>

          {/* Colonna 2: Link Rapidi Operativi */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Ecosistema</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/protocols" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Bailout Protocols (Academy)
                </Link>
              </li>
              <li>
                <Link href="/consensus" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Bailout Consensus (Live)
                </Link>
              </li>
              <li>
                <Link href="/consulenza" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Consulenza P2P & TimeChain
                </Link>
              </li>
              <li>
                <a href="https://marcocostanza.it/login" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary text-sm transition-colors flex items-center gap-1">
                  Area Riservata Studenti
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna 3: Compliance & Demarcazione */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Legale & Compliance</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/privacy-policy" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Privacy Policy & Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/termini-e-condizioni" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Termini e Condizioni
                </Link>
              </li>
            </ul>
            <div className="bg-background-card p-4 rounded-lg border border-white/5">
              <p className="text-xs text-text-secondary leading-relaxed">
                <strong className="text-white">Nota di Demarcazione:</strong> Le consulenze su gestione del capitale, rendimenti e asset allocation sono gestite esclusivamente dalla nostra boutique finanziaria <a href="https://whalestreet.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhaleStreet</a>.
              </p>
            </div>
          </div>

          {/* Colonna 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Resta Aggiornato</h3>
            <p className="text-text-secondary text-sm mb-4">
              Ricevi analisi tematiche, inviti alle masterclass e guide ingegneristiche mensili.
            </p>
            <div className="flex flex-col space-y-2">
              <Link href="/#newsletter" className="inline-flex justify-center items-center w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors">
                Iscriviti alla Newsletter
              </Link>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Bailout. Rigorosamente Bitcoin Only.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            <a href="https://www.youtube.com/c/MarcoCostanza94" className="text-text-muted hover:text-primary transition-colors">
              <span className="sr-only">YouTube</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://instagram.com/marcocostanza_" className="text-text-muted hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
