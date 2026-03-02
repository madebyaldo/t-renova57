"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import Container from "@/components/Container";

const TAGS = ["Tout", ...Array.from(new Set(PROJECTS.map((p) => p.tag)))];

export default function RealisationsGrid() {
  const [activeTag, setActiveTag] = useState("Tout");

  const filtered = activeTag === "Tout"
    ? PROJECTS
    : PROJECTS.filter((p) => p.tag === activeTag);

  return (
    <>
      <section className="bg-light py-16 sm:py-24">
        <Container>
          {/* Filters */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  activeTag === tag
                    ? "bg-accent text-dark shadow-sm"
                    : "border border-warm-border text-warm-text hover:border-accent/40 hover:text-noir"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <div
                key={`${project.year}-${project.title}`}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[4/3] bg-light-alt">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm leading-relaxed text-white/80">{project.description}</p>
                  </div>
                </div>

                <div className="border border-t-0 border-warm-border bg-white p-5 transition-colors group-hover:bg-light-alt">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                      {project.tag}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-warm-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                        <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                  <h3 className="mt-2.5 font-heading text-base font-bold text-noir">{project.title}</h3>
                  <p className="mt-1 text-xs text-warm-muted">{project.year}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-sm text-warm-muted">
              Aucune réalisation dans cette catégorie pour le moment.
            </p>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-light-alt py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-noir sm:text-3xl">
              Vous avez un projet similaire ?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-warm-text">
              Contactez-nous pour un devis gratuit. Nous intervenons dans toute la Moselle.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-accent px-7 py-3 font-heading text-sm font-semibold text-dark transition-colors hover:bg-accent-hover"
              >
                Demander un devis
              </Link>
              <a
                href="tel:0783523884"
                className="rounded-full border border-warm-border px-7 py-3 font-heading text-sm font-semibold text-noir transition-colors hover:border-accent hover:text-accent"
              >
                07 83 52 38 84
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
