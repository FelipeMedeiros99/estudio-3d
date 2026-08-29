"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { id: "sobre", label: "Sobre" },
  { id: "engenharia", label: "Engenharia" },
  { id: "materiais", label: "Materiais" },
  { id: "portfolio", label: "Portfólio" },
  { id: "contact", label: "Contato" },
];

export default function Navbar() {
  // Estados para controle de interface
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para monitorar o scroll da página e alterar a opacidade do Header
  useEffect(() => {
    const handleScroll = () => {
      // Se o scroll passar de 50px, ativamos o background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o listener de evento
    window.addEventListener("scroll", handleScroll);

    // Cleanup function para evitar memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Lado Esquerdo: Logotipo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Se houver um logo em imagem, descomente e adapte o código abaixo: */}
          {/* <Image src="/logo.svg" alt="Logo da Empresa" width={40} height={40} /> */}
          {/* Logotipo Tipográfico (Fallback técnico) */}
          <span className="text-2xl font-black text-white tracking-tighter">
            KM<span className="text-emerald-400">3D</span>
          </span>
        </Link>

        {/* Centro/Direita: Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id.toLowerCase()}`}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-400 after:transition-all hover:after:w-full"
            >
              {label}
            </Link>
          ))}

          {/* CTA no Header */}
          <Link
            href="#orcamento"
            className="ml-4 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600/90 hover:bg-blue-500 rounded-lg transition-colors border border-blue-500/50"
          >
            Fazer Orçamento
          </Link>
        </nav>

        {/* Lado Direito: Botão Menu Mobile (Hamburger) */}
        <button
          className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-white/10 transition-all duration-300 origin-top overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 py-4"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {NAV_ITEMS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#orcamento"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 text-center px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Fazer Orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}
