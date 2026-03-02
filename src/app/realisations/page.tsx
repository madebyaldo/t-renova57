import type { Metadata } from "next";
import Container from "@/components/Container";
import RealisationsGrid from "@/components/RealisationsGrid";

export const metadata: Metadata = {
  title: "Réalisations — T-Renova 57",
  description:
    "Découvrez nos réalisations en carrelage et rénovation en Moselle.",
};

export default function Realisations() {
  return (
    <>
      {/* Hero header */}
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
                Portfolio
              </span>
            </div>
            <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Nos réalisations
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
              Découvrez nos chantiers récents en carrelage et rénovation
              à travers la Moselle. Chaque projet reflète notre exigence de qualité.
            </p>
          </div>

          {/* Stats strip */}
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-white/10">
            {[
              { value: "200+", label: "Chantiers réalisés" },
              { value: "10+", label: "Ans d'expérience" },
              { value: "100%", label: "Clients satisfaits" },
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

      {/* Projects grid with filters */}
      <RealisationsGrid />
    </>
  );
}
