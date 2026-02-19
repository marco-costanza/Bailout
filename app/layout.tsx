import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bailout – La Tua Ancora di Salvezza nel Mondo Bitcoin",
  description:
    "Bailout: formazione seria, masterclass pratiche e consulenza tecnica per chi vuole diventare sovrano del proprio stack Bitcoin. Niente fuffa, solo proof of work.",
  keywords: [
    "bitcoin",
    "formazione bitcoin",
    "masterclass bitcoin",
    "consulenza bitcoin",
    "sovranità digitale",
    "self-custody",
    "lightning network",
    "proof of work",
  ],
  authors: [{ name: "Bailout" }],
  openGraph: {
    title: "Bailout – Formazione e Consulenza Bitcoin",
    description:
      "Formazione seria, masterclass pratiche e consulenza tecnica Bitcoin",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${lexend.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />
        <script src="https://www.google.com/recaptcha/api.js?hl=it" async defer></script>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.REQUIRED_CODE_ERROR_MESSAGE = 'Seleziona un prefisso internazionale';
              window.LOCALE = 'it';
              window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Le informazioni fornite non sono valide. Si prega di rivedere il formato del campo e riprovare.";
              window.REQUIRED_ERROR_MESSAGE = "Questo campo non può essere lasciato vuoto.";
              window.GENERIC_INVALID_MESSAGE = "Le informazioni fornite non sono valide. Si prega di rivedere il formato del campo e riprovare.";
              window.translation = { common: { selectedList: '{quantity} lista selezionata', selectedLists: '{quantity} liste selezionate', selectedOption: '{quantity} selezionato', selectedOptions: '{quantity} selezionati' } };
              var AUTOHIDE = Boolean(1);
            `,
          }}
        />
        <script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
      </body>
    </html>
  );
}
