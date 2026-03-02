"use client";

import Script from "next/script";
import { useCallback, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendContactForm, type ContactFormState } from "@/app/contact/action";

const RECAPTCHA_ACTION = "contact_form";
const RECAPTCHA_INPUT_NAME = "recaptcha_token";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

function SubmitButton({
  recaptchaReady,
  siteKey,
}: {
  recaptchaReady: boolean;
  siteKey: string;
}) {
  const { pending } = useFormStatus();
  const waitingRecaptcha: boolean = !!siteKey && !recaptchaReady;
  const disabled: boolean = pending || waitingRecaptcha;
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full rounded-full bg-accent px-6 py-3.5 font-heading text-sm font-semibold text-dark transition-colors hover:bg-accent-hover disabled:opacity-60"
    >
      {pending
        ? "Envoi en cours..."
        : waitingRecaptcha
          ? "Chargement..."
          : "Envoyer la demande"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState<ContactFormState, FormData>(
    sendContactForm,
    null
  );
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
  const submitWithTokenRef = useRef(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      const form = e.currentTarget;

      if (submitWithTokenRef.current) {
        submitWithTokenRef.current = false;
        return;
      }

      if (siteKey && recaptchaReady && window.grecaptcha) {
        e.preventDefault();
        try {
          const token = await window.grecaptcha.execute(siteKey, {
            action: RECAPTCHA_ACTION,
          });
          let input = form.querySelector<HTMLInputElement>(
            `input[name="${RECAPTCHA_INPUT_NAME}"]`
          );
          if (!input) {
            input = document.createElement("input");
            input.type = "hidden";
            input.name = RECAPTCHA_INPUT_NAME;
            form.appendChild(input);
          }
          input.value = token;
          submitWithTokenRef.current = true;
          form.requestSubmit();
        } catch {
          formAction(new FormData(form));
        }
        return;
      }
    },
    [formAction, siteKey, recaptchaReady]
  );
  const handleRecaptchaLoad = useCallback(() => {
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => setRecaptchaReady(true));
    } else {
      setRecaptchaReady(true);
    }
  }, []);

  const safeState =
    state &&
    typeof state === "object" &&
    "success" in state &&
    "message" in state
      ? state
      : null;

  if (safeState?.success) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-accent" aria-hidden="true">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="mt-4 font-heading text-xl font-bold text-noir">
          Message envoyé !
        </h3>
        <p className="mt-2 text-sm text-warm-text">{String(safeState.message)}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-warm-border bg-white p-8 shadow-sm sm:p-10">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-dark">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
        </div>
        <div>
          <h2 className="font-heading text-xl font-bold text-noir">
            Demande de devis gratuit
          </h2>
          <p className="text-sm text-warm-muted">
            Remplissez le formulaire, nous vous recontactons sous 24h.
          </p>
        </div>
      </div>

      {safeState?.success === false && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {String(safeState.message)}
        </div>
      )}

      {siteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
          strategy="lazyOnload"
          onLoad={handleRecaptchaLoad}
        />
      )}
      <form action={formAction} onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-noir">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 block w-full rounded-xl border border-warm-border bg-light px-4 py-3 text-base text-noir placeholder:text-warm-muted focus:border-accent focus:ring-0 focus:outline-none sm:text-sm"
              placeholder="Jean Dupont"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-noir">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-2 block w-full rounded-xl border border-warm-border bg-light px-4 py-3 text-base text-noir placeholder:text-warm-muted focus:border-accent focus:ring-0 focus:outline-none sm:text-sm"
              placeholder="06 12 34 56 78"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-noir">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 block w-full rounded-xl border border-warm-border bg-light px-4 py-3 text-base text-noir placeholder:text-warm-muted focus:border-accent focus:ring-0 focus:outline-none sm:text-sm"
            placeholder="jean@exemple.fr"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-noir">
            Type de projet
          </label>
          <select
            id="service"
            name="service"
            className="mt-2 block w-full rounded-xl border border-warm-border bg-light px-4 py-3 text-base text-noir focus:border-accent focus:ring-0 focus:outline-none sm:text-sm"
            defaultValue=""
          >
            <option value="" disabled>Sélectionnez un service</option>
            <option>Carrelage intérieur</option>
            <option>Carrelage extérieur &amp; terrasse</option>
            <option>Rénovation salle de bain</option>
            <option>Étanchéité &amp; balcon</option>
            <option>Revêtement sols &amp; murs</option>
            <option>Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-noir">
            Décrivez votre projet
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 block w-full resize-none rounded-xl border border-warm-border bg-light px-4 py-3 text-base text-noir placeholder:text-warm-muted focus:border-accent focus:ring-0 focus:outline-none sm:text-sm"
            placeholder="Décrivez votre projet : pièce concernée, surface, type de carrelage souhaité..."
          />
        </div>
        <SubmitButton
          recaptchaReady={!siteKey || recaptchaReady}
          siteKey={siteKey}
        />
        <p className="text-center text-xs text-warm-muted">
          Devis 100% gratuit — Sans engagement
        </p>
      </form>
    </div>
  );
}
