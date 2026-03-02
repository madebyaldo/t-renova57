import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="bg-light py-32 sm:py-40">
      <Container>
        <div className="text-center">
          <p className="text-7xl font-bold text-accent">404</p>
          <h1 className="mt-4 font-heading text-2xl font-bold text-noir sm:text-3xl">
            Page introuvable
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-warm-text">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-accent px-7 py-3 font-heading text-sm font-semibold text-dark transition-colors hover:bg-accent-hover"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </Container>
    </section>
  );
}
