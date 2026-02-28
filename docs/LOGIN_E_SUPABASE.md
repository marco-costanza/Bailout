# Login e area riservata — cosa fare

## Dove provare il login

- **In alto a destra** (menu): clicca **«Accedi»** → vai alla pagina di login.
- **Footer**, colonna Ecosistema: **«Area Riservata Studenti (Accedi)»** → stessa pagina.

Da lì puoi:
- **Magic Link:** inserisci l’email → «Invia link di accesso» → controlla la email e clicca il link.
- **Password:** clicca «Hai già una password? Accedi con email e password» → inserisci email e password → «Accedi».

Dopo il login arrivi in **Area Riservata** (`/dashboard`).

---

## Configurazione Supabase (una volta sola)

Per far funzionare il Magic Link (link via email) devi dire a Supabase dove reindirizzare l’utente dopo il click.

1. Apri **Supabase**: [supabase.com](https://supabase.com) → il tuo progetto (Bailout).
2. Menu a sinistra: **Authentication** → **URL Configuration**.
3. Compila così (copia-incolla):

   **Site URL**
   ```
   https://bailout.website
   ```

   **Redirect URLs** (aggiungi queste tre righe, una per linea):
   ```
   https://bailout.website/auth/callback
   https://bailout-git-editing-marco-costanzas-projects.vercel.app/auth/callback
   http://localhost:3001/auth/callback
   ```

4. Clicca **Save**.

Dopo aver salvato, il link che arriva via email porterà alla tua app e completerà il login (sia da bailout.website sia dalla preview Vercel).

---

## Riepilogo

| Cosa | Dove |
|------|------|
| Provare il login | Navbar: **Accedi** oppure Footer: **Area Riservata Studenti (Accedi)** |
| Configurare Magic Link | Supabase → Authentication → URL Configuration → Site URL + Redirect URLs |
