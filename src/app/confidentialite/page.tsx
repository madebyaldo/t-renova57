import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Politique de confidentialité — T-Renova 57",
  description: "Politique de confidentialité du site T-Renova 57.",
};

const SECTIONS = [
  {
    title: "Données collectées",
    content:
      "Lorsque vous utilisez notre formulaire de contact, nous collectons les informations suivantes :",
    items: [
      "Nom et prénom",
      "Numéro de téléphone",
      "Adresse email (si renseignée)",
      "Description de votre projet",
    ],
  },
  {
    title: "Utilisation des données",
    content:
      "Les données collectées via le formulaire de contact sont utilisées exclusivement pour :",
    items: [
      "Répondre à votre demande de devis ou d'information",
      "Vous recontacter dans le cadre de votre projet",
    ],
    extra:
      "Vos données ne sont jamais vendues, cédées ou transmises à des tiers à des fins commerciales.",
  },
  {
    title: "Conservation des données",
    content:
      "Vos données personnelles sont conservées uniquement le temps nécessaire au traitement de votre demande et au suivi de votre projet, dans la limite de 3 ans à compter du dernier contact.",
  },
  {
    title: "Vos droits (RGPD)",
    content:
      "Conformément au Règlement Général sur la Protection des Données, vous disposez des droits suivants :",
    items: [
      "Droit d'accès à vos données personnelles",
      "Droit de rectification ou de suppression",
      "Droit d'opposition au traitement",
      "Droit à la portabilité de vos données",
    ],
    extra:
      "Pour exercer ces droits, contactez-nous par téléphone au 07 83 52 38 84 ou via notre formulaire de contact.",
  },
  {
    title: "Cookies",
    content:
      "Ce site n'utilise pas de cookies de suivi, de cookies publicitaires ni d'outils d'analyse tiers. Aucune donnée de navigation n'est collectée à des fins commerciales.",
  },
];

export default function Confidentialite() {
  return (
    <>
      <section className="relative overflow-hidden bg-dark pb-16 pt-28 sm:pb-24 sm:pt-36">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent blur-[120px]" />
          <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-accent blur-[100px]" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent-light">Protection des données</span>
            </div>
            <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">
              Politique de confidentialité
            </h1>
          </div>
        </Container>
      </section>

      <section className="bg-light py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            {SECTIONS.map((section, i) => (
              <div
                key={section.title}
                className="rounded-2xl border border-warm-border bg-white p-7 sm:p-9"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 font-heading text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-lg font-bold text-noir">{section.title}</h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-warm-text">
                  {section.content}
                </p>
                {section.items && (
                  <ul className="mt-4 space-y-2.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-noir">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.extra && (
                  <p className="mt-4 rounded-xl bg-light-alt p-4 text-sm leading-relaxed text-warm-text">
                    {section.extra}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
