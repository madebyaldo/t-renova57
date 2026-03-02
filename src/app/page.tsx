import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";
import ServiceIcon from "@/components/ServiceIcon";

const REVIEWS = [
  {
    name: "Laurent M.",
    role: "Client particulier",
    text: "Travail d'orfèvre. Notre salle de bain est méconnaissable. Chaque détail a été soigné avec une précision remarquable.",
  },
  {
    name: "Sophie D.",
    role: "Propriétaire",
    text: "Professionnel et soigneux. Le carrelage de notre terrasse est parfait, posé dans les règles de l'art. Très à l'écoute.",
  },
  {
    name: "Marc B.",
    role: "Client particulier",
    text: "Très satisfait du résultat. La rénovation complète de notre cuisine a été réalisée rapidement et proprement.",
  },
  {
    name: "Nathalie R.",
    role: "Propriétaire",
    text: "Respect des délais et du budget annoncé. Le travail est impeccable, les finitions parfaites. Une entreprise sérieuse.",
  },
] as const;

const HOME_PROJECTS = PROJECTS.slice(0, 6);

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Accueil() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-dark">
        {/* Decorative glows */}
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent blur-[120px]" />
          <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-accent blur-[100px]" />
        </div>

        <Container className="relative">
          <div className="grid min-h-screen items-center gap-10 py-16 pt-24 lg:grid-cols-12 lg:gap-8 lg:py-0">
            {/* Left — Text */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-accent-light">
                  Carrelage &amp; Rénovation — Moselle
                </span>
              </div>
              <h1 className="mt-7 font-heading text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
                L&apos;élégance et la qualité
                <br />
                <span className="text-accent">au service</span> de vos espaces.
              </h1>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/50">
                T-Renova 57, spécialisée dans la fourniture et la pose de
                carrelage. Travaux intérieurs et extérieurs. Intervention à
                Metz, Luxembourg et Nancy.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-accent px-7 py-3 font-heading text-sm font-semibold text-dark transition-colors hover:bg-accent-hover"
                >
                  Demander un devis
                </Link>
                <a
                  href="tel:0783523884"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 font-heading text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  07 83 52 38 84
                </a>
              </div>

              {/* Trust row */}
              <div className="mt-10 flex items-center gap-6 border-t border-white/10 pt-7">
                <div>
                  <p className="font-heading text-2xl font-bold text-white">
                    10<span className="text-accent">+</span>
                  </p>
                  <p className="text-[11px] text-white/60">
                    Ans d&apos;expérience
                  </p>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <p className="font-heading text-2xl font-bold text-white">
                    200<span className="text-accent">+</span>
                  </p>
                  <p className="text-[11px] text-white/60">Projets réalisés</p>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <p className="font-heading text-2xl font-bold text-white">
                    5<span className="text-accent">/5</span>
                  </p>
                  <p className="text-[11px] text-white/60">Note Google</p>
                </div>
              </div>
            </div>

            {/* Right — Image collage */}
            <div className="relative lg:col-span-7 xl:col-span-7">
              {/* Accent glow behind images */}
              <div
                className="absolute inset-4 rounded-3xl bg-accent/5 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative grid min-h-[280px] grid-cols-6 grid-rows-6 gap-3 lg:min-h-[520px]">
                {/* Main image — kitchen */}
                <div className="relative col-span-4 row-span-6 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/images/Hero/carrelage-sol-grand-format-cuisine-metz-moselle.webp"
                    alt="Cuisine carrelée haut de gamme"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 66vw, 40vw"
                  />
                </div>

                {/* Top right — marble bathroom */}
                <div className="relative col-span-2 row-span-3 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/images/Realisations/carreleur-metz-salle-de-bain-carrelage-marbre.webp"
                    alt="Salle de bain en marbre"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 20vw"
                  />
                </div>

                {/* Bottom right — modern bathroom */}
                <div className="relative col-span-2 row-span-3 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/images/Hero/renovation-salle-de-bain-moderne-metz-moselle.webp"
                    alt="Salle de bain moderne"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 20vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="bg-light-alt py-20 sm:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left — Image composition */}
            <div className="relative order-2 lg:order-none lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/About/renovation-salle-de-bain-carrelage-marbre-metz.webp"
                    alt="Artisan carreleur au travail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 z-10 w-40 overflow-hidden rounded-xl border-4 border-light-alt shadow-xl sm:-right-6 sm:w-48">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/About/pose-carrelage-salle-de-bain-metz-chantier.webp"
                      alt="Détail de pose de carrelage"
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                </div>
                <div className="absolute -left-3 top-6 z-10 rounded-xl bg-accent px-5 py-4 shadow-lg sm:-left-5">
                  <span className="block font-heading text-2xl font-bold text-dark">
                    10+
                  </span>
                  <span className="block text-xs text-dark/70">
                    ans d&apos;expérience
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Content */}
            <div className="order-1 lg:order-none lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-accent">
                  Qui sommes-nous
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold leading-tight text-noir sm:text-4xl">
                Le carrelage redéfini par la précision et le savoir-faire.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-warm-text">
                T-Renova 57 est une entreprise artisanale implantée à
                Montigny-lès-Metz, spécialisée dans la pose de carrelage et la
                rénovation intérieure et extérieure. Nous sélectionnons des
                matériaux haut de gamme et appliquons des techniques de pose
                éprouvées pour chaque projet.
              </p>

              {/* Pillars */}
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                        />
                      </svg>
                    ),
                    title: "Précision",
                    text: "Chaque coupe, chaque joint est réalisé avec une attention millimétrique.",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                        />
                      </svg>
                    ),
                    title: "Qualité",
                    text: "Matériaux haut de gamme, exécution irréprochable pour des résultats durables et esthétiques.",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    ),
                    title: "Fiabilité",
                    text: "Respect des délais et du budget annoncé, du premier jour à la livraison.",
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-warm-border bg-light p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest/10 text-forest">
                      {pillar.icon}
                    </div>
                    <h3 className="mt-3 font-heading text-sm font-bold text-noir">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-warm-text">
                      {pillar.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  {
                    value: "200",
                    suffix: "+",
                    label: "Chantiers réalisés",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    ),
                  },
                  {
                    value: "100",
                    suffix: "%",
                    label: "Clients satisfaits",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    ),
                  },
                  {
                    value: "57",
                    suffix: "",
                    label: "Moselle & alentours",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    ),
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-warm-border bg-light p-4 text-center transition-colors hover:border-accent/30"
                  >
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      {stat.icon}
                    </div>
                    <p className="mt-3 font-heading text-2xl font-bold text-noir sm:text-3xl">
                      {stat.value}
                      <span className="text-accent">{stat.suffix}</span>
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-warm-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── RÉALISATIONS ─── */}
      <section
        className="relative overflow-hidden bg-dark py-20 sm:py-28"
      >
        {/* Decorative glows */}
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-accent blur-[120px]" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-accent blur-[100px]" />
        </div>

        <Container className="relative">
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent-light">
                Portfolio
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Nos réalisations
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/50">
              Chaque projet reflète notre exigence de qualité. De la salle de
              bain à la terrasse, découvrez nos interventions récentes en
              carrelage et rénovation à travers la Moselle.
            </p>
            <Link
              href="/realisations"
              className="mt-6 hidden items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/60 transition-colors hover:border-accent hover:text-accent sm:inline-flex"
            >
              Tout voir
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Bento grid */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {HOME_PROJECTS.map((project, i) => (
              <div
                key={`${project.year}-${project.title}`}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                } ${i >= 3 ? "hidden sm:block" : ""}`}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    i === 0
                      ? "h-72 sm:h-full sm:min-h-[480px]"
                      : "h-60 sm:h-full sm:min-h-[232px]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={i === 0 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-accent/90 px-2.5 py-0.5 text-[11px] font-semibold text-dark">
                      {project.tag}
                    </span>
                    <span className="text-xs text-white/50">
                      {project.location}
                    </span>
                  </div>
                  <h3
                    className={`mt-2 font-heading font-bold text-white ${i === 0 ? "text-xl sm:text-2xl" : "text-base"}`}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/60"
            >
              Tout voir
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="bg-light-alt py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent">
                Nos prestations
              </span>
            </div>
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold leading-tight text-noir sm:text-4xl">
              Des solutions complètes en carrelage et rénovation
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-warm-text">
              Du sol au plafond, de l&apos;intérieur à l&apos;extérieur — nous
              couvrons tous vos besoins en carrelage et rénovation.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-warm-border bg-light p-7 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors duration-300 group-hover:bg-accent/15 group-hover:text-accent">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-noir">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-text">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/prestations"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-heading text-sm font-semibold text-dark transition-colors hover:bg-accent-hover"
            >
              Voir toutes nos prestations
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="bg-dark py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent-light">
                Témoignages
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Ce que disent nos clients
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">
              La satisfaction de nos clients est notre meilleure carte de
              visite.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {REVIEWS.map((review) => (
              <article
                key={review.name}
                className="rounded-2xl border border-white/8 bg-dark-light p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <span className="text-xs text-white/50">Google</span>
                </div>
                <blockquote className="mt-5 text-[15px] leading-relaxed text-white/70">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 font-heading text-sm font-bold text-accent">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {review.name}
                    </p>
                    <p className="text-xs text-white/60">{review.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA + CONFIANCE ─── */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent">Nos engagements</span>
            </div>
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight text-noir sm:text-4xl lg:text-5xl">
              Créons ensemble votre prochain projet.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-warm-text">
              Votre satisfaction est notre priorité. Nous vous accompagnons
              de la première idée jusqu&apos;à la dernière finition.
            </p>
          </div>

          {/* Trust points */}
          <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              "Conseils personnalisés",
              "Matériaux de qualité",
              "Pose professionnelle",
              "Respect des délais",
              "Devis gratuit",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-accent" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-noir">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-8 py-3.5 font-heading text-sm font-semibold text-dark transition-colors hover:bg-accent-hover"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:0783523884"
              className="rounded-full border border-warm-border px-8 py-3.5 font-heading text-sm font-semibold text-noir transition-colors hover:border-accent hover:text-accent"
            >
              07 83 52 38 84
            </a>
          </div>
        </Container>
      </section>

      {/* ─── ZONE D'INTERVENTION ─── */}
      <section className="bg-white pb-20 sm:pb-28">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-accent">
                  Localisation
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-noir sm:text-4xl">
                Zone d&apos;intervention
              </h2>
              <p className="mt-4 text-base leading-relaxed text-warm-text">
                Basée à Montigny-lès-Metz, T-Renova 57 intervient dans toute la
                Moselle (57) pour vos projets de carrelage et de rénovation.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-warm-text">
                Que vous soyez à Metz, Marly, Woippy, Hagondange ou Amnéville,
                nous nous déplaçons chez vous pour réaliser un devis gratuit et
                démarrer les travaux dans les meilleurs délais. Notre
                connaissance du terrain local nous permet d&apos;intervenir
                rapidement et efficacement sur chaque chantier.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Montigny-lès-Metz",
                  "Metz",
                  "Marly",
                  "Woippy",
                  "Moulins-lès-Metz",
                  "Longeville-lès-Metz",
                  "Ars-sur-Moselle",
                  "Augny",
                  "Jouy-aux-Arches",
                  "Talange",
                  "Maizières-lès-Metz",
                  "Hagondange",
                  "Rombas",
                  "Amnéville",
                  "+60km alentour",
                ].map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-warm-border px-3 py-1 text-xs text-warm-text"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-warm-border">
              <iframe
                src="https://maps.google.com/maps?q=Montigny-l%C3%A8s-Metz,+57950,+France&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zone d'intervention T-Renova 57 — Montigny-lès-Metz, Moselle"
                className="h-full w-full"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
