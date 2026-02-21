"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  Layers,
  Wrench,
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  Globe,
  Link as LinkIcon,
  UserPlus,
  Users,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bitcoin/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-bitcoin/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-bitcoin/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 sm:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/Bailout_logo.png"
              alt="Bailout — La Tua Ancora di Salvezza nel Mondo Bitcoin"
              width={160}
              height={112}
              className="mx-auto h-20 sm:h-24 md:h-28 w-auto object-contain mb-8"
              priority
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
              Bailout: La Tua Ancora di Salvezza nel Mondo Bitcoin
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Formazione seria, masterclass pratiche e consulenza tecnica per chi vuole diventare sovrano del proprio stack Bitcoin. Niente fuffa, solo proof of work.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="inline-flex items-center gap-2"
              >
                <Link href="#proof-of-work">
                  <ShieldCheck className="w-5 h-5" />
                  Diventa un sovrano digitale
                </Link>
              </Button>
            </div>
            <p className="mt-6">
              <Link
                href="#newsletter"
                className="text-text-secondary hover:text-bitcoin transition-colors underline underline-offset-2"
              >
                Iscriviti alla newsletter
              </Link>
            </p>
          </motion.div>
        </div>
      </header>

      {/* Proof of Work Section */}
      <section
        id="proof-of-work"
        className="relative py-20 sm:py-28 border-t border-white/10"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-bitcoin/20 to-transparent opacity-60"></div>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-4">
            Proof of Work
          </h2>
          <p className="text-text-muted text-center max-w-xl mx-auto mb-12">
            Offriamo: formazione, approfondimento e supporto tecnico
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Bitcoin Academy */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-xl card-border bg-background-card/60 overflow-hidden card-hover transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/Academy.jpg"
                  alt="Bitcoin Academy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-bitcoin-light flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-bitcoin" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Bitcoin Academy
                </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Percorso strutturato per capire Bitcoin dalla base: economia, tecnologia e sovranità. Per chi parte da zero o vuole sistematizzare.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 mt-4 text-bitcoin text-sm font-medium hover:underline"
              >
                Scopri di più <ArrowRight className="w-4 h-4" />
              </Link>
              </div>
            </motion.article>

            {/* Card 2: Masterclass */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group rounded-xl card-border bg-background-card/60 overflow-hidden card-hover transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/Masterclass-BTC.jpg"
                  alt="Masterclass Bitcoin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-bitcoin-light flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-bitcoin" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Masterclass
                </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Sessioni intensive su temi avanzati: Lightning, self-custody, privacy. Per chi vuole andare oltre le basi con hands-on.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 mt-4 text-bitcoin text-sm font-medium hover:underline"
              >
                Scopri di più <ArrowRight className="w-4 h-4" />
              </Link>
              </div>
            </motion.article>

            {/* Card 3: Consulenza Tecnica */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group rounded-xl card-border bg-background-card/60 overflow-hidden card-hover transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/Foto-di-gruppo.jpg"
                  alt="Il team Bailout"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-bitcoin-light flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-bitcoin" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Consulenza Tecnica
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Supporto one-to-one per nodi, wallet, setup e best practice. Consulenza su misura per aziende e privati.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 mt-4 text-bitcoin text-sm font-medium hover:underline"
                >
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Nodi (Team) Section */}
      <section id="nodi" className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-4">
            Nodi
          </h2>
          <p className="text-text-muted text-center max-w-xl mx-auto mb-12">
            Il team dietro Bailout: chi fa proof of work ogni giorno.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pierluigi Turla */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl card-border bg-background-card/60 p-6 flex flex-col items-center text-center card-hover transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full bg-gray-600 overflow-hidden mb-4 ring-2 ring-white/10 relative">
                <Image
                  src="/images/Gigi-Turla-Circle.png"
                  alt="Pierluigi Turla"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Pierluigi Turla
              </h3>
              <p className="text-text-muted text-sm mt-1 mb-4">
                Nodo & formazione
              </p>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                Bitcoin educator e operatore di nodo. Focus su self-custody e privacy.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-bitcoin-light text-text-secondary hover:text-bitcoin transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-bitcoin-light text-text-secondary hover:text-bitcoin transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.article>

            {/* Turtlecute */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl card-border bg-background-card/60 p-6 flex flex-col items-center text-center card-hover transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full bg-gray-600 overflow-hidden mb-4 ring-2 ring-white/10 relative">
                <Image
                  src="/images/turtlecute-Circle.png"
                  alt="Turtlecute"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">Turtlecute</h3>
              <p className="text-text-muted text-sm mt-1 mb-4">
                Tech & content
              </p>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                Developer e creator. Bitcoin, privacy e tooling per la sovranità.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-bitcoin-light text-text-secondary hover:text-bitcoin transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-bitcoin-light text-text-secondary hover:text-bitcoin transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.article>

            {/* Riccardo Aran */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl card-border bg-background-card/60 p-6 flex flex-col items-center text-center card-hover transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full bg-gray-600 overflow-hidden mb-4 ring-2 ring-white/10 relative">
                <Image
                  src="/images/Riccardo-Circle.png"
                  alt="Riccardo Aran"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Riccardo Aran
              </h3>
              <p className="text-text-muted text-sm mt-1 mb-4">
                Consulenza & nodi
              </p>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                Esperto di infrastruttura e self-custody. Nodi e best practice.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-bitcoin-light text-text-secondary hover:text-bitcoin transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-bitcoin-light text-text-secondary hover:text-bitcoin transition-colors"
                  aria-label="Link"
                >
                  <LinkIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.article>

            {/* Marco Costanza */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl card-border bg-background-card/60 p-6 flex flex-col items-center text-center card-hover transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full bg-gray-600 overflow-hidden mb-4 ring-2 ring-white/10 relative">
                <Image
                  src="/images/Marco-Costanza-Circle.png"
                  alt="Marco Costanza"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Marco Costanza
              </h3>
              <p className="text-text-muted text-sm mt-1 mb-4">
                Founder & formazione
              </p>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                Ideatore di Bailout. Formazione Bitcoin e sovranità digitale.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-bitcoin-light text-text-secondary hover:text-bitcoin transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-bitcoin-light text-text-secondary hover:text-bitcoin transition-colors"
                  aria-label="Sito"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Mempool Section */}
      <section id="mempool" className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-4">
            Mempool
          </h2>
          <p className="text-text-muted text-center max-w-xl mx-auto mb-12">
            Collaboratori e amici che contribuiscono al progetto.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl card-border bg-background-card/60 p-6 flex flex-col items-center text-center card-hover transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-gray-600 overflow-hidden mb-4 ring-2 ring-white/10 relative">
                <Image
                  src="/images/Gabirle-Vernetti.png"
                  alt="Gabriele Vernetti"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Gabriele Vernetti
              </h3>
              <p className="text-text-muted text-sm mt-1 mb-3">Collaboratore</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Contributi su contenuti e community. Amico del mempool.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-bitcoin-light text-text-secondary hover:text-bitcoin transition-colors"
                  aria-label="Social"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.article>

            {/* Placeholder per altri collaboratori */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl card-border bg-background-card/40 p-6 flex flex-col items-center justify-center text-center border-dashed opacity-80"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                <UserPlus className="w-6 h-6 text-text-muted" />
              </div>
              <p className="text-text-muted text-sm">
                Altri collaboratori in arrivo
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl card-border bg-background-card/40 p-6 flex flex-col items-center justify-center text-center border-dashed opacity-80 sm:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-text-muted" />
              </div>
              <p className="text-text-muted text-sm">
                Vuoi entrare nel mempool?
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        id="newsletter"
        className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10"
        aria-label="Newsletter"
      >
        <div className="max-w-xl mx-auto">
          <div className="sib-form" style={{ textAlign: "center" }}>
            <div
              id="sib-form-container"
              className="sib-form-container"
              dangerouslySetInnerHTML={{
                __html: `
                  <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
                    <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
                      <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
                        <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248S504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                      </svg>
                      <span class="sib-form-message-panel__inner-text">Non è stato possibile registrare la tua iscrizione. Si prega di riprovare.</span>
                    </div>
                  </div>
                  <div></div>
                  <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
                    <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
                      <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
                        <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                      </svg>
                      <span class="sib-form-message-panel__inner-text">La tua iscrizione è andata a buon fine.</span>
                    </div>
                  </div>
                  <div></div>
                  <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; max-width:540px; margin:0 auto; direction:ltr; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.96); box-shadow: 0 4px 24px rgba(0,0,0,0.15);">
                    <form id="sib-form" method="POST" action="https://8f6ec9c3.sibforms.com/serve/MUIFAAuMtHDMKmFXnGh7RoQ7XCWLJBxSEPl8d8po7YkI1TFWGnYT5QnsjpjuovPLHHzeKHU0l-1nAzNJDPoziN7p-O-82imITZKnHuk8gsnUDt1ynaORy1IhGX--aJAn8__PBG4vui-as1r2eYRMeqlnz25kUpuM93IDRmq1PV5oFW8VRBERze6GcZTkrbVzk8AmUJZOAVVvMunW3w==" data-type="subscription">
                      <div style="padding: 8px 0;">
                        <div class="sib-form-block" style="font-size:32px; text-align:left; font-weight:700; font-family:Helvetica, sans-serif; color:#3C4858; background-color:transparent;">
                          <p>Resta aggiornato</p>
                        </div>
                      </div>
                      <div style="padding: 8px 0;">
                        <div class="sib-form-block" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#3C4858; background-color:transparent;">
                          <div class="sib-text-form-block">
                            <p>Ricevi analisi, guide operative e approfondimenti.</p>
                          </div>
                        </div>
                      </div>
                      <div style="padding: 8px 0;">
                        <div class="sib-input sib-form-block">
                          <div class="form__entry entry_block">
                            <div class="form__label-row">
                              <div class="entry__field">
                                <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required style="color: #212121; background-color: #fff; border-radius: 0.5rem;" />
                              </div>
                            </div>
                            <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
                          </div>
                        </div>
                      </div>
                      <div style="padding: 8px 0;">
                        <div class="sib-checkbox-group sib-form-block" data-required="true">
                          <div class="form__entry entry_mcq">
                            <div class="form__label-row">
                              <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; font-family:Helvetica, sans-serif; color:#3c4858;" data-required="*">Seleziona le e-mail che ti piacerebbe ricevere</label>
                              <div>
                                <div class="entry__choice">
                                  <label class="checkbox__label">
                                    <input type="checkbox" class="input_replaced" name="TIPOLOGIA_DI_NEWS[]" data-value="🎓 Guide e approfondimenti" value="🎓 Guide e approfondimenti" data-required="true" />
                                    <span class="checkbox checkbox_tick_positive"></span>
                                    <span style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#3C4858;">🎓 Guide e approfondimenti</span>
                                  </label>
                                </div>
                                <div class="entry__choice">
                                  <label class="checkbox__label">
                                    <input type="checkbox" class="input_replaced" name="TIPOLOGIA_DI_NEWS[]" data-value="🎁 Offerte, sconti e bonus" value="🎁 Offerte, sconti e bonus" data-required="true" />
                                    <span class="checkbox checkbox_tick_positive"></span>
                                    <span style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#3C4858;">🎁 Offerte, sconti e bonus</span>
                                  </label>
                                </div>
                                <div class="entry__choice">
                                  <label class="checkbox__label">
                                    <input type="checkbox" class="input_replaced" name="TIPOLOGIA_DI_NEWS[]" data-value="📰 News e consigli di attualità" value="📰 News e consigli di attualità" data-required="true" />
                                    <span class="checkbox checkbox_tick_positive"></span>
                                    <span style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#3C4858;">📰 News e consigli di attualità</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
                          </div>
                        </div>
                      </div>
                      <div style="padding: 8px 0;">
                        <div class="sib-form-block sib-divider-form-block">
                          <div style="border: 0; border-bottom: 1px solid #E5EDF6"></div>
                        </div>
                      </div>
                      <div style="padding: 8px 0;">
                        <div class="sib-optin sib-form-block" data-required="true">
                          <div class="form__entry entry_mcq">
                            <div class="form__label-row">
                              <div class="entry__choice">
                                <label>
                                  <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required />
                                  <span class="checkbox checkbox_tick_positive"></span>
                                  <span style="font-size:14px; text-align:left; font-family:Helvetica, sans-serif; color:#3C4858;"><p>Accetto l'informativa sulla privacy dei dati.</p><span data-required="*" style="display: inline;" class="entry__label entry__label_optin"></span></span>
                                </label>
                              </div>
                            </div>
                            <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
                            <label class="entry__specification" style="font-size:12px; text-align:left; font-family:Helvetica, sans-serif; color:#8390A4;">Puoi annullare l'iscrizione in qualsiasi momento utilizzando il link nella newsletter.</label>
                          </div>
                        </div>
                      </div>
                      <div style="padding: 8px 0;">
                        <div class="sib-form-block" style="text-align: left">
                          <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; font-weight:700; font-family:Helvetica, sans-serif; color:#FFFFFF; border-width:0px; border-radius: 0.5rem; background-color: #FF6102;" form="sib-form" type="submit">
                            <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                              <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                            </svg>
                            ISCRIVITI
                          </button>
                        </div>
                      </div>
                      <div style="padding: 8px 0;">
                        <div class="sib-form-block sib-divider-form-block">
                          <div style="border: 0; border-bottom: 1px solid #E5EDF6"></div>
                        </div>
                      </div>
                      <div style="padding: 8px 0;">
                        <div class="sib-form__declaration" style="direction:ltr">
                          <div style="font-size:14px; text-align:left; font-family:Helvetica, sans-serif; color:#687484; background-color:transparent;">
                            <p>We use Brevo as our marketing platform. By submitting this form you agree that the personal data you provided will be transferred to Brevo for processing in accordance with <a href="https://www.brevo.com/en/legal/privacypolicy/" target="_blank" rel="noopener noreferrer">Brevo's Privacy Policy.</a></p>
                          </div>
                        </div>
                      </div>
                      <div style="padding: 8px 0;">
                        <div class="g-recaptcha" data-sitekey="6LeGQVwsAAAAAJfpAc4_DywDxMdzyRxlR8M5hMVr" data-callback="invisibleCaptchaCallback" data-size="invisible" onclick="executeCaptcha"></div>
                      </div>
                      <input type="text" name="email_address_check" value="" class="input--hidden">
                      <input type="hidden" name="locale" value="it">
                    </form>
                  </div>
                `,
              }}
            />
          </div>
        </div>
        <style jsx>{`
          #newsletter #sib-container input,
          #newsletter #sib-container textarea {
            color: #212121;
            background-color: #fff;
          }
          #newsletter #sib-container input::placeholder {
            color: #6b7280;
          }
          #newsletter .sib-form-block__button:hover {
            background-color: #e85802 !important;
          }
          #newsletter .sib-form {
            background: transparent !important;
          }
        `}</style>
      </section>
    </div>
  );
}
