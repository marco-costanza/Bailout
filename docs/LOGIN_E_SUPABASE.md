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

   **Site URL** (Supabase ne permette uno solo; qui usiamo marcocostanza.it come principale. Gli altri siti funzionano grazie ai Redirect URLs.)

   ```
   https://marcocostanza.it
   ```

   **Redirect URLs** (aggiungi tutte le righe che ti servono; una per linea):

   ```
   https://bailout.website/auth/callback
   https://bailout-git-editing-marco-costanzas-projects.vercel.app/auth/callback
   https://marcocostanza.it/auth/callback
   https://www.marcocostanza.it/auth/callback
   https://whalestreet.it/auth/callback
   O
   http://localhost:3001/auth/callback
   ```

   Se usi preview Vercel anche per marcocostanza o WhaleStreet, aggiungi anche quelle (es. `https://marcocostanza-git-xxx.vercel.app/auth/callback`).

4. Clicca **Save**.

Dopo aver salvato, il Magic Link funzionerà da tutti i domini che hai messo in Redirect URLs (Bailout, marcocostanza, WhaleStreet, preview, locale).

---

## Riepilogo

| Cosa                   | Dove                                                                     |
| ---------------------- | ------------------------------------------------------------------------ |
| Provare il login       | Navbar: **Accedi** oppure Footer: **Area Riservata Studenti (Accedi)**   |
| Configurare Magic Link | Supabase → Authentication → URL Configuration → Site URL + Redirect URLs |

## Stesso Supabase per più siti

Se usi lo stesso progetto Supabase (e le stesse credenziali) per **Bailout**, **marcocostanza.it** e **WhaleStreet**, basta aggiungere in Redirect URLs gli `/auth/callback` di tutti i domini. L’elenco sopra include già Bailout, marcocostanza e WhaleStreet (con e senza www).
