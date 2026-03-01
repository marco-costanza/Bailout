import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { signOut } from "@/app/login/actions";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect=/dashboard");
  }

  return (
    <div className="min-h-screen bg-nero21">
      <header className="border-b border-white/10 bg-grigioCypherpunk px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-lg font-semibold text-biancoWhitepaper">Area Riservata Academy</h1>
          <form action={signOut}>
            <button
              type="submit"
              className="text-sm text-text-secondary hover:text-arancione6102 transition-colors"
            >
              Esci
            </button>
          </form>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <p className="text-text-secondary mb-6">
          Benvenuto, <span className="text-biancoWhitepaper font-medium">{user.email}</span>.
        </p>
        <p className="text-text-secondary text-sm">
          Qui troverai i contenuti riservati agli iscritti all’Academy. (Placeholder MVP.)
        </p>
        <Link
          href="/"
          className="inline-block mt-8 text-sm text-arancione6102 hover:underline"
        >
          Torna alla home
        </Link>
      </main>
    </div>
  );
}
