"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BioModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function BioModal({ open, onClose, title, children }: BioModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) handleClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleClose}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 w-full max-w-lg max-h-[85vh] m-auto p-0 rounded-xl card-border bg-background-card border border-white/10 shadow-xl backdrop:bg-black/60 backdrop:backdrop-blur-sm open:flex open:flex-col"
      aria-modal="true"
      aria-labelledby="bio-modal-title"
    >
      <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/10 shrink-0">
        <h2
          id="bio-modal-title"
          className="text-lg font-semibold text-white truncate"
        >
          {title}
        </h2>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleClose}
          aria-label="Chiudi"
          className="shrink-0"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>
      <div className="overflow-y-auto px-6 py-4 text-text-secondary text-sm leading-relaxed">
        {children}
      </div>
    </dialog>
  );
}
