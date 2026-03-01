"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2, AlertCircle, UserPlus } from "lucide-react";
import { signInWithMagicLink, signInWithPassword, signUp } from "./actions";

export default function LoginPage() {
  const [mode, setMode] = useState<"magic" | "password" | "signup">("magic");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  async function handleMagicLink(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("redirect_origin", window.location.origin);
    const result = await signInWithMagicLink(formData);
    setIsLoading(false);
    if (result.error) {
      setMessage({ type: "error", text: result.error });
      return;
    }
    if (result.success) {
      setMessage({
        type: "success",
        text: "Controlla la tua email: ti abbiamo inviato un link per accedere. Tornerai su questa stessa pagina.",
      });
    }
  }

  async function handlePassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await signInWithPassword(formData);
    setIsLoading(false);
    if (result.error) {
      setMessage({ type: "error", text: result.error });
      return;
    }
    if (result.success) {
      window.location.href = "/dashboard";
    }
  }

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await signUp(formData);
    setIsLoading(false);
    if (result.error) {
      setMessage({ type: "error", text: result.error });
      return;
    }
    if (result.success) {
      setMessage({
        type: "success",
        text: result.message ?? "Account creato. Puoi accedere con email e password.",
      });
    }
  }

  return (
    <div className="min-h-screen bg-nero21 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-grigioCypherpunk border border-white/10 rounded-2xl p-8 sm:p-10">
          <h1 className="text-2xl font-semibold text-biancoWhitepaper mb-2">
            Area Riservata Academy
          </h1>
          <p className="text-text-secondary text-sm mb-8">
            Accedi con l’email usata per l’iscrizione o con la password se l’hai impostata.
          </p>

          {message && (
            <div
              className={`mb-6 flex gap-3 p-4 rounded-lg border text-sm ${
                message.type === "error"
                  ? "bg-red-500/10 border-red-500/30 text-red-200"
                  : "bg-green-500/10 border-green-500/30 text-green-200"
              }`}
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>{message.text}</p>
            </div>
          )}

          {mode === "magic" && (
            <form onSubmit={handleMagicLink} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tu@email.com"
                    className="w-full bg-nero21 border border-white/10 rounded-md pl-10 pr-4 py-3 text-biancoWhitepaper placeholder:text-text-secondary focus:outline-none focus:border-arancione6102 transition-colors"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex justify-center items-center gap-2 bg-arancione6102 hover:bg-primary-hover text-white font-semibold py-3 px-4 rounded-md transition-colors disabled:opacity-70"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
                ) : (
                  "Invia link di accesso"
                )}
              </button>
            </form>
          )}

          {mode === "password" && (
            <form onSubmit={handlePassword} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tu@email.com"
                    className="w-full bg-nero21 border border-white/10 rounded-md pl-10 pr-4 py-3 text-biancoWhitepaper placeholder:text-text-secondary focus:outline-none focus:border-arancione6102 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="w-full bg-nero21 border border-white/10 rounded-md pl-10 pr-4 py-3 text-biancoWhitepaper placeholder:text-text-secondary focus:outline-none focus:border-arancione6102 transition-colors"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex justify-center items-center gap-2 bg-arancione6102 hover:bg-primary-hover text-white font-semibold py-3 px-4 rounded-md transition-colors disabled:opacity-70"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
                ) : (
                  "Accedi"
                )}
              </button>
            </form>
          )}

          {mode === "signup" && (
            <form onSubmit={handleSignUp} className="space-y-6">
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                  <input
                    id="signup-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tu@email.com"
                    className="w-full bg-nero21 border border-white/10 rounded-md pl-10 pr-4 py-3 text-biancoWhitepaper placeholder:text-text-secondary focus:outline-none focus:border-arancione6102 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="signup-password"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Password (min. 6 caratteri)
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                  <input
                    id="signup-password"
                    name="password"
                    type="password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="w-full bg-nero21 border border-white/10 rounded-md pl-10 pr-4 py-3 text-biancoWhitepaper placeholder:text-text-secondary focus:outline-none focus:border-arancione6102 transition-colors"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex justify-center items-center gap-2 bg-arancione6102 hover:bg-primary-hover text-white font-semibold py-3 px-4 rounded-md transition-colors disabled:opacity-70"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    Registrati
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
            {mode === "magic" && (
              <>
                <button
                  type="button"
                  onClick={() => { setMode("password"); setMessage(null); }}
                  className="block w-full text-left text-sm text-text-secondary hover:text-arancione6102 transition-colors"
                >
                  Hai già una password? Accedi con email e password
                </button>
                <button
                  type="button"
                  onClick={() => { setMode("signup"); setMessage(null); }}
                  className="block w-full text-left text-sm text-text-secondary hover:text-arancione6102 transition-colors"
                >
                  Non hai un account? Registrati
                </button>
              </>
            )}
            {mode === "password" && (
              <>
                <button
                  type="button"
                  onClick={() => { setMode("magic"); setMessage(null); }}
                  className="block w-full text-left text-sm text-text-secondary hover:text-arancione6102 transition-colors"
                >
                  Preferisci il link via email? Usa Magic Link
                </button>
                <button
                  type="button"
                  onClick={() => { setMode("signup"); setMessage(null); }}
                  className="block w-full text-left text-sm text-text-secondary hover:text-arancione6102 transition-colors"
                >
                  Non hai un account? Registrati
                </button>
              </>
            )}
            {mode === "signup" && (
              <button
                type="button"
                onClick={() => { setMode("magic"); setMessage(null); }}
                className="block w-full text-left text-sm text-text-secondary hover:text-arancione6102 transition-colors"
              >
                Hai già un account? Accedi con Magic Link o password
              </button>
            )}
          </div>
        </div>

        <p className="text-center text-text-secondary text-sm mt-6">
          <Link href="/" className="hover:text-arancione6102 transition-colors">
            Torna alla home
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
