import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — T-Renova 57",
  description:
    "Contactez T-Renova 57 pour un devis gratuit en carrelage et rénovation en Moselle.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
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
                Parlons de votre projet
              </span>
            </div>
            <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Contactez-nous
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
              Un projet de carrelage ou de rénovation ? Décrivez-nous votre
              besoin et recevez un devis gratuit sous 24h. Nous intervenons dans
              toute la Moselle.
            </p>
          </div>

          {/* Stats strip */}
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-white/10">
            {[
              { value: "24h", label: "Délai de réponse" },
              { value: "100%", label: "Devis gratuit" },
              { value: "57", label: "Moselle & alentours" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 text-center">
                <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact info cards + Form */}
      <section className="bg-light py-16 sm:py-24">
        <Container>
          {/* Quick contact cards */}
          <div className="mb-14 grid gap-4 sm:grid-cols-3">
            <a
              href="tel:0783523884"
              className="group flex items-center gap-4 rounded-2xl border border-warm-border bg-white p-6 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-warm-muted">Téléphone</p>
                <p className="mt-0.5 font-heading text-base font-bold text-noir">
                  07 83 52 38 84
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-warm-border bg-white p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-warm-muted">Adresse</p>
                <address className="mt-0.5 text-sm font-semibold not-italic text-noir">
                  Rue de Marly, 57950 Montigny-lès-Metz
                </address>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-warm-border bg-white p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-warm-muted">Horaires</p>
                <p className="mt-0.5 text-sm font-semibold text-noir">
                  Lun — Sam : 8h – 18h
                </p>
              </div>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right column — Map + trust */}
            <div className="space-y-6 lg:col-span-5">
              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-warm-border">
                <iframe
                  src="https://maps.google.com/maps?q=Montigny-l%C3%A8s-Metz,+57950,+France&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation T-Renova 57"
                  className="w-full"
                />
              </div>

              {/* Trust signals */}
              <div className="rounded-2xl border border-warm-border bg-white p-6">
                <h3 className="font-heading text-sm font-bold text-noir">
                  Pourquoi nous faire confiance
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Devis détaillé et transparent",
                    "Artisan qualifié avec 10+ ans d'expérience",
                    "Matériaux haut de gamme",
                    "Respect des délais et du budget",
                    "Chantier propre et soigné",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-warm-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Zone */}
              <div className="rounded-2xl border border-warm-border bg-white p-6">
                <h3 className="font-heading text-sm font-bold text-noir">
                  Zone d&apos;intervention
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[
                    "Montigny-lès-Metz",
                    "Metz",
                    "Marly",
                    "Woippy",
                    "Thionville",
                    "Hagondange",
                    "Amnéville",
                    "Talange",
                  ].map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-warm-border px-2.5 py-1 text-[11px] text-warm-text"
                    >
                      {city}
                    </span>
                  ))}
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
                    + 60km alentours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
