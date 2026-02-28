"use client";

import { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface RedirectPopupProps {
  isOpen: boolean;
  onClose: () => void;
  targetUrl?: string; // Default: marcocostanza.it
}

export function RedirectPopup({ isOpen, onClose, targetUrl = "https://marcocostanza.it/il-mio-account/" }: RedirectPopupProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal / Popup */}
      <div className="relative w-full max-w-lg bg-background-card border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header with decorative top border */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
        
        <div className="px-6 pt-6 pb-2 flex justify-between items-start">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 mb-4">
            <ExternalLink className="w-6 h-6 text-primary" />
          </div>
          <button 
            onClick={onClose}
            className="text-text-muted hover:text-white transition-colors p-1 rounded-md hover:bg-white/5"
            aria-label="Chiudi finestra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            Trasferimento in corso...
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            In attesa che la migrazione alla nostra piattaforma proprietaria sia completa, verrai reindirizzato al sito 
            <strong className="text-white font-medium"> marcocostanza.it </strong> 
            per completare l&apos;accesso o la registrazione alla tua area riservata.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto flex-1 font-medium bg-transparent border-white/10 hover:bg-white/5 text-white" 
              onClick={onClose}
            >
              Annulla
            </Button>
            <Button 
              className="w-full sm:w-auto flex-1 font-semibold bg-primary hover:bg-primary-hover text-white gap-2" 
              asChild
            >
              <a href={targetUrl} target="_blank" rel="noopener noreferrer" onClick={onClose}>
                Procedi <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
