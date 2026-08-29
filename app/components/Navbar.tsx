"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import { URLS } from "../data";

const NAV_ITEMS = [
  { id: "sobre", label: "Sobre" },
  { id: "engenharia", label: "Engenharia" },
  { id: "materiais", label: "Materiais" },
  { id: "portfolio", label: "Portfólio" },
  { id: "contact", label: "Contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((previousState) => !previousState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? "border-b border-white/10 bg-neutral-950/80 py-4 shadow-lg backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16">
        {/* Logotipo */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          onClick={closeMobileMenu}
        >
          <span className="text-2xl font-black tracking-tighter text-white">
            KM<span className="text-emerald-400">3D</span>
          </span>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="relative text-sm font-medium text-neutral-300 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all hover:after:w-full"
            >
              {label}
            </Link>
          ))}

          <Link
            href={URLS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-lg border border-blue-500/50 bg-blue-600/90 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Fazer Orçamento
          </Link>
        </nav>

        {/* Botão do menu mobile */}
        <button
          type="button"
          className="p-2 text-neutral-300 transition-colors hover:text-white focus:outline-none md:hidden"
          onClick={toggleMobileMenu}
          aria-label={
            isMobileMenuOpen
              ? "Fechar menu de navegação"
              : "Abrir menu de navegação"
          }
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <HiX className="h-6 w-6" aria-hidden="true" />
          ) : (
            <HiOutlineMenu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`absolute top-full left-0 w-full origin-top overflow-hidden border-b border-white/10 bg-neutral-900 transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "max-h-96 py-4 opacity-100"
            : "max-h-0 py-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6">
          {NAV_ITEMS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={closeMobileMenu}
              className="text-base font-medium text-neutral-300 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}

          <Link
            href={URLS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="mt-2 rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Fazer Orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}
