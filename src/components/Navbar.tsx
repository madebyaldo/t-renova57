"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
] as const;

const PHONE_NUMBER = "0783523884";
const PHONE_DISPLAY = "07 83 52 38 84";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-nav/95 shadow-lg backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-container items-center justify-between px-4 py-5 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="T-Renova 57 — Accueil"
        >
          <Image
            src="/images/Logo/logo-nav.webp"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="font-heading text-lg font-bold tracking-tight text-white">
            T-Renova 57
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex" role="list">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-base font-bold transition-colors ${
                    isActive ? "text-accent" : "text-white/70 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={`tel:${PHONE_NUMBER}`}
          className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-dark transition-colors hover:bg-accent-hover md:inline-flex"
          aria-label={`Appeler le ${PHONE_DISPLAY}`}
        >
          {PHONE_DISPLAY}
        </a>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-dark"
            aria-label={`Appeler le ${PHONE_DISPLAY}`}
          >
            Appeler
          </a>
          <button
            type="button"
            className="p-1 text-white/70 transition-colors duration-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "max-h-64 border-t border-white/10 bg-nav/95 backdrop-blur-xl"
            : "max-h-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="space-y-1 px-4 pb-5 pt-3" role="list">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-2 text-sm transition-colors ${
                    isActive ? "text-accent" : "text-white/70 hover:text-white"
                  }`}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
