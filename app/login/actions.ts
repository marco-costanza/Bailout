"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export type LoginResult = { error?: string; success?: boolean; message?: string };

function isAllowedRedirectOrigin(origin: string): boolean {
  try {
    const o = new URL(origin);
    if (o.origin !== origin) return false;
    if (o.protocol === "http:" && o.hostname === "localhost") return true;
    if (o.protocol !== "https:") return false;
    const h = o.hostname.toLowerCase();
    return (
      h === "bailout.website" ||
      h.endsWith(".bailout.website") ||
      h === "marcocostanza.it" ||
      h === "www.marcocostanza.it" ||
      h === "whalestreet.it" ||
      h === "www.whalestreet.it" ||
      h.endsWith(".vercel.app")
    );
  } catch {
    return false;
  }
}

export async function signInWithMagicLink(formData: FormData): Promise<LoginResult> {
  const email = formData.get("email") as string | null;
  const redirectOrigin = (formData.get("redirect_origin") as string)?.trim();
  if (!email?.trim()) {
    return { error: "Inserisci l'email." };
  }
  const base =
    redirectOrigin && isAllowedRedirectOrigin(redirectOrigin)
      ? redirectOrigin
      : process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const emailRedirectTo = base ? `${base}/auth/callback` : undefined;

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email: email.trim(),
    options: { emailRedirectTo },
  });

  if (error) {
    return { error: error.message };
  }
  return { success: true };
}

export async function signInWithPassword(formData: FormData): Promise<LoginResult> {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  if (!email?.trim() || !password) {
    return { error: "Email e password richiesti." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });

  if (error) {
    return { error: error.message };
  }
  return { success: true };
}

export async function signUp(formData: FormData): Promise<LoginResult> {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  if (!email?.trim() || !password || password.length < 6) {
    return { error: "Email e password richiesti (minimo 6 caratteri)." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email: email.trim(),
    password,
    options: {
      emailRedirectTo: undefined, // user will confirm via email if required by Supabase
    },
  });

  if (error) {
    return { error: error.message };
  }
  return {
    success: true,
    message:
      "Account creato. Controlla l'email per confermare (se richiesto). Puoi già accedere con email e password.",
  };
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
