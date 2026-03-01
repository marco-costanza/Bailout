"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AggiornaProfiloPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-bitcoin opacity-20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-bitcoin opacity-20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-bitcoin opacity-20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      ></div>

      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero / Intro */}
        <header className="text-center mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
            <span className="text-sm text-white/90">Iscrizione completata</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4 leading-tight">
            Vuoi dirci qualcosa in più su di&nbsp;te?
          </h1>
          <p className="text-base sm:text-lg text-white/80">
            È tutto <strong>opzionale</strong>. Puoi compilare il form per
            personalizzare le nostre comunicazioni, oppure saltare e iniziare
            subito a ricevere i contenuti.
          </p>
        </header>

        {/* Form Brevo incorporato */}
        <section className="w-full max-w-2xl mb-10" id="form" aria-labelledby="form-heading">
          <h2 id="form-heading" className="sr-only">
            Form aggiornamento dati personali
          </h2>
          <div
            id="form-aggiorna-profilo"
            className="form-wrapper rounded-2xl p-6 sm:p-8 border border-white/10 bg-white/5 backdrop-blur-sm mx-auto"
          >
            <div className="sib-form">
              <div
                id="sib-form-container"
                className="sib-form-container"
                dangerouslySetInnerHTML={{
                  __html: `
                    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0.75rem; border-color:#ff4949;max-width:540px;">
                      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
                        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
                          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248S504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                        </svg>
                        <span class="sib-form-message-panel__inner-text">Non è stato possibile aggiornare i tuoi dati. Si prega di riprovare.</span>
                      </div>
                    </div>
                    <div></div>
                    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:0.75rem; border-color:#13ce66;max-width:540px;">
                      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
                        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
                          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                        </svg>
                        <span class="sib-form-message-panel__inner-text">Dati aggiornati con successo.</span>
                      </div>
                    </div>
                    <div></div>
                    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; direction:ltr; border-radius: 1.25rem; border: 1px solid rgba(255, 255, 255, 0.15); background: rgba(255, 255, 255, 0.98); box-shadow: 0 4px 24px rgba(33, 33, 33, 0.12); overflow: hidden; max-width: 540px; margin-left: auto; margin-right: auto;">
                      <form id="sib-form" method="POST" action="https://8f6ec9c3.sibforms.com/serve/MUIFAPWwdIH7BeL6dOWBXhKR3s62-yue-dFIkKVQ9wIx8_0mNzCCqSWmtGbzOjsbtYd1bps30lqM1H_dwhvzIdKTLAEhrNjEspyJnm8VeZj3re9p36mfdxaQ4DGYKAg2wrUo_jQ-o6pTaB3xTP4Qy94D-jIx2wwheL-anrLL1fpqmXTaGEBiF2japIkErQjScfEB_caKKoEpaNpqzg==" data-type="subscription">
                        <div style="padding: 8px 0;">
                          <div class="sib-form-block" style="font-size:32px; text-align:left; font-weight:700; font-family:Lexend, Helvetica, sans-serif; color:#3C4858; background-color:transparent;">
                            <p><strong>Aggiorna i tuoi dati</strong></p>
                          </div>
                        </div>
                        <div style="padding: 8px 0;">
                          <div class="sib-form-block" style="font-size:16px; text-align:left; font-family:Lexend, Helvetica, sans-serif; color:#3C4858; background-color:transparent;">
                            <div class="sib-text-form-block">
                              <p>Questi dati NON sono obbligatori. Puoi scegliere di inserirli per ricevere comunicazioni più precise e sconti dedicati.</p>
                            </div>
                          </div>
                        </div>
                        <div style="padding: 8px 0;">
                          <div class="sib-input sib-form-block">
                            <div class="form__entry entry_block">
                              <div class="form__label-row ">
                                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; font-family:Lexend, Helvetica, sans-serif; color:#3c4858;" for="EMAIL" data-required="*">Email utilizzata durante l&#039;iscrizione</label>
                                <div class="entry__field">
                                  <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required style="color: #212121; background-color: #fff; border-radius: 0.75rem;" />
                                </div>
                              </div>
                              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0.75rem; border-color:#ff4949;"></label>
                            </div>
                          </div>
                        </div>
                        <div style="padding: 8px 0;">
                          <div class="sib-input sib-form-block">
                            <div class="form__entry entry_block">
                              <div class="form__label-row ">
                                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; font-family:Lexend, Helvetica, sans-serif; color:#3c4858;" for="NOME">Come vuoi essere chiamato nelle nostre comunicazioni</label>
                                <div class="entry__field">
                                  <input class="input" maxlength="200" type="text" id="NOME" name="NOME" autocomplete="off" placeholder="NOME" style="color: #212121; background-color: #fff; border-radius: 0.75rem;" />
                                </div>
                              </div>
                              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0.75rem; border-color:#ff4949;"></label>
                            </div>
                          </div>
                        </div>
                        <div style="padding: 8px 0;">
                          <div class="sib-input sib-form-block">
                            <div class="form__entry entry_block">
                              <div class="form__label-row ">
                                <div class="entry__field">
                                  <input class="input" maxlength="200" type="text" id="COGNOME" name="COGNOME" autocomplete="off" placeholder="COGNOME" style="color: #212121; background-color: #fff; border-radius: 0.75rem;" />
                                </div>
                              </div>
                              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0.75rem; border-color:#ff4949;"></label>
                            </div>
                          </div>
                        </div>
                        <div style="padding: 8px 0;">
                          <div class="sib-checkbox-group sib-form-block">
                            <div class="form__entry entry_mcq">
                              <div class="form__label-row ">
                                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; font-family:Lexend, Helvetica, sans-serif; color:#3c4858;">Vuoi rivedere le tue preferenze? Ri-seleziona tutte le mail vuoi ricevere:</label>
                                <div>
                                  <div class="entry__choice">
                                    <label class="checkbox__label">
                                      <input type="checkbox" class="input_replaced" name="TIPOLOGIA_DI_NEWS[]" data-value="🎓 Guide e approfondimenti" value="🎓 Guide e approfondimenti" />
                                      <span class="checkbox checkbox_tick_positive"></span>
                                      <span style="font-size:16px; text-align:left; font-family:Lexend, Helvetica, sans-serif; color:#3C4858;">🎓 Guide e approfondimenti</span>
                                    </label>
                                  </div>
                                  <div class="entry__choice">
                                    <label class="checkbox__label">
                                      <input type="checkbox" class="input_replaced" name="TIPOLOGIA_DI_NEWS[]" data-value="🎁 Offerte, sconti e bonus" value="🎁 Offerte, sconti e bonus" />
                                      <span class="checkbox checkbox_tick_positive"></span>
                                      <span style="font-size:16px; text-align:left; font-family:Lexend, Helvetica, sans-serif; color:#3C4858;">🎁 Offerte, sconti e bonus</span>
                                    </label>
                                  </div>
                                  <div class="entry__choice">
                                    <label class="checkbox__label">
                                      <input type="checkbox" class="input_replaced" name="TIPOLOGIA_DI_NEWS[]" data-value="📰 News e consigli di attualità" value="📰 News e consigli di attualità" />
                                      <span class="checkbox checkbox_tick_positive"></span>
                                      <span style="font-size:16px; text-align:left; font-family:Lexend, Helvetica, sans-serif; color:#3C4858;">📰 News e consigli di attualità</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0.75rem; border-color:#ff4949;"></label>
                            </div>
                          </div>
                        </div>
                        <div style="padding: 8px 0;">
                          <div class="g-recaptcha" data-sitekey="6LeGQVwsAAAAAJfpAc4_DywDxMdzyRxlR8M5hMVr" data-callback="invisibleCaptchaCallback" data-size="invisible" onclick="executeCaptcha"></div>
                        </div>
                        <div style="padding: 8px 0;">
                          <div class="sib-form-block" style="text-align: left">
                            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; font-weight:700; font-family:Lexend, Helvetica, sans-serif; color:#FFFFFF; border-width:0px; border-radius: 0.75rem; background-color: #FF6102;" form="sib-form" type="submit">
                              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                              </svg>
                              Invia Dati Aggiornati
                            </button>
                          </div>
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
        </section>

        {/* Skip link */}
        <footer className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            Preferisci saltare?
            <span className="underline">Torna alla home</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </footer>
      </main>
      <style jsx>{`
        #form-aggiorna-profilo .sib-form {
          background: transparent;
          padding: 0;
          text-align: center;
        }
        #form-aggiorna-profilo #sib-container .input,
        #form-aggiorna-profilo #sib-container select.input {
          border-radius: 0.75rem;
          font-family: Lexend, Helvetica, sans-serif;
        }
        #form-aggiorna-profilo .sib-form-block__button:hover {
          background-color: #ff7a33 !important;
        }
        #form-aggiorna-profilo .sib-form-message-panel {
          border-radius: 0.75rem;
          max-width: 540px;
          margin-left: auto;
          margin-right: auto;
        }
        #form-aggiorna-profilo .sib-form-block p,
        #form-aggiorna-profilo .entry__label,
        #form-aggiorna-profilo .entry__specification {
          font-family: Lexend, Helvetica, sans-serif;
        }
        #form-aggiorna-profilo #sib-container input,
        #form-aggiorna-profilo #sib-container select,
        #form-aggiorna-profilo #sib-container textarea {
          color: #212121 !important;
          background-color: #ffffff !important;
        }
        #form-aggiorna-profilo #sib-container input::placeholder {
          text-align: left;
          font-family: Lexend, Helvetica, sans-serif;
          color: #8390a4;
        }
        #form-aggiorna-profilo #sib-container a {
          text-decoration: underline;
          color: #ff6102;
        }
      `}</style>
    </div>
  );
}
