import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { SERVICES } from "@/data/services";
import ServiceIcon from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Nos Prestations — T-Renova 57",
  description:
    "Découvrez nos prestations en carrelage et rénovation : carrelage intérieur et extérieur, rénovation salle de bain, étanchéité, revêtements sols et murs en Moselle.",
};

export default function Prestations() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-dark pb-16 pt-28 sm:pb-24 sm:pt-36">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent blur-[120px]" />
          <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-accent blur-[100px]" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent-light">
                Ce que nous faisons
              </span>
            </div>
            <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Nos prestations
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
              Du carrelage intérieur à la rénovation complète de salle de bain,
              nous proposons des solutions sur mesure pour chaque projet.
            </p>
          </div>

          {/* Stats strip */}
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-white/10">
            {[
              { value: "6", label: "Expertises" },
              { value: "10+", label: "Ans d'expérience" },
              { value: "100%", label: "Sur mesure" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 text-center">
                <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── SERVICES — Alternating full-width sections ─── */}
      {SERVICES.map((service, i) => {
        const isEven = i % 2 === 0;
        const isDark = i % 2 !== 0;
        const num = String(i + 1).padStart(2, "0");

        return (
          <section
            key={service.title}
            className={`relative overflow-hidden py-16 sm:py-24 ${
              isDark ? "bg-dark" : "bg-light"
            }`}

          >
            {isDark && (
              <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-accent blur-[100px]" />
              </div>
            )}

            <Container className="relative">
              <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                !isEven ? "lg:[&>*:first-child]:order-2" : ""
              }`}>
                {/* Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  {/* Floating number */}
                  <div className={`absolute -top-4 ${isEven ? "-right-3 sm:-right-5" : "-left-3 sm:-left-5"} z-10 rounded-xl bg-accent px-4 py-2.5 shadow-lg`}>
                    <span className="font-heading text-xl font-bold text-dark">{num}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <ServiceIcon icon={service.icon} />
                    </div>
                  </div>

                  <h2 className={`mt-5 font-heading text-2xl font-bold sm:text-3xl ${
                    isDark ? "text-white" : "text-noir"
                  }`}>
                    {service.title}
                  </h2>

                  <p className={`mt-4 text-sm leading-relaxed sm:text-base ${
                    isDark ? "text-white/60" : "text-warm-text"
                  }`}>
                    {service.description}
                  </p>

                  {/* Details grid */}
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {service.details.map((detail) => (
                      <div
                        key={detail}
                        className={`flex items-start gap-2.5 rounded-lg p-3 ${
                          isDark
                            ? "bg-white/5 border border-white/5"
                            : "bg-light-alt border border-warm-border"
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className={`text-sm ${isDark ? "text-white/70" : "text-noir"}`}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-dark transition-colors hover:bg-accent-hover"
                  >
                    Demander un devis
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* ─── PROCESS ─── */}
      <section className="relative overflow-hidden bg-dark py-16 sm:py-24">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent blur-[100px]" />
          <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-accent blur-[100px]" />
        </div>
        <Container className="relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent-light">Comment ça marche</span>
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold text-white sm:text-4xl">
              Notre processus en 4 étapes
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/50">
              De la première prise de contact à la livraison finale,
              chaque étape est pensée pour votre tranquillité.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-4xl">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent lg:block" aria-hidden="true" />

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-y-16">
              {[
                { step: "01", title: "Prise de contact", text: "Appelez-nous ou remplissez le formulaire en ligne. Nous échangeons sur votre projet et vos besoins.", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                )},
                { step: "02", title: "Visite & diagnostic", text: "Nous nous déplaçons gratuitement pour évaluer les lieux, prendre les mesures et vous conseiller.", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                )},
                { step: "03", title: "Devis détaillé", text: "Vous recevez un devis clair, précis et sans surprise. Chaque poste est détaillé pour une transparence totale.", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                )},
                { step: "04", title: "Réalisation", text: "Les travaux démarrent selon le planning convenu. Suivi régulier et livraison dans les délais.", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 9.75 21.7c-.2.73.65 1.35 1.28.95L17.69 18a.75.75 0 0 0 .326-.647V4.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v12.896c0 .267.14.514.326.647l.008.005Z" />
                  </svg>
                )},
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className={`relative rounded-2xl border border-white/8 bg-dark-light p-7 ${
                    idx % 2 !== 0 ? "lg:mt-8" : ""
                  }`}
                >
                  {/* Dot on connecting line */}
                  <div className={`absolute top-8 hidden h-3 w-3 rounded-full bg-accent shadow-[0_0_10px_rgba(201,150,58,0.5)] lg:block ${
                    idx % 2 === 0 ? "-right-[1.875rem]" : "-left-[1.875rem]"
                  }`} aria-hidden="true" />

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-dark">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-accent">Étape {item.step}</span>
                      <h3 className="font-heading text-base font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-light py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-warm-border bg-white p-10 text-center sm:p-14">
            <h2 className="font-heading text-2xl font-bold text-noir sm:text-3xl">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-warm-text">
              Contactez-nous pour un devis gratuit et sans engagement.
              Nous intervenons dans toute la Moselle.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-accent px-7 py-3 font-heading text-sm font-semibold text-dark transition-colors hover:bg-accent-hover"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:0783523884"
                className="inline-flex items-center gap-2 rounded-full border border-warm-border px-7 py-3 font-heading text-sm font-semibold text-noir transition-colors hover:border-accent hover:text-accent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                07 83 52 38 84
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
