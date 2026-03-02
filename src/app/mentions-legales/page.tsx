import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Mentions légales — T-Renova 57",
  description: "Mentions légales du site T-Renova 57.",
};

const SECTIONS = [
  {
    title: "Propriété intellectuelle",
    content:
      "L'ensemble du contenu de ce site (textes, images, photos, logos, icônes) est la propriété exclusive de T-Renova 57, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de T-Renova 57.",
  },
  {
    title: "Responsabilité",
    content:
      "T-Renova 57 s'efforce de fournir des informations aussi précises que possible sur ce site. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour, qu'elles soient de son fait ou du fait de tiers partenaires qui lui fournissent ces informations.",
  },
  {
    title: "Cookies",
    content:
      "Ce site n'utilise pas de cookies de suivi ni de cookies publicitaires. Seuls des cookies strictement nécessaires au fonctionnement du site peuvent être utilisés.",
  },
  {
    title: "Droit applicable",
    content:
      "Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux compétents seront ceux du ressort du tribunal de Metz.",
  },
];

export default function MentionsLegales() {
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
              <span className="text-xs font-semibold text-accent-light">Informations légales</span>
            </div>
            <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">
              Mentions légales
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
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
