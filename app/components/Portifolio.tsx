"use client";

import { useState } from "react";
import { projetos } from "../data";
import Image from "next/image";

// Tipagem e dados mocados para o catálogo
type Categoria =
  | "Todos"
  | "Como Treinar o Seu Dragão"
  | "Dragon Ball"
  | "Pintados à Mão"
  | "Enfeite Decorativo"
  | "Utilitários";

const categorias: string[] = [
  "Todos",
  "Decoração",
  "Futebol",
  "Miniaturas",
  "Action Figures",
  "Utilitários",
];

export default function Portfolio({ id }: { id?: string }) {
  const [filtroAtivo, setFiltroAtivo] = useState<string>("Todos");

  const projetosFiltrados = projetos.filter(
    (projeto) => filtroAtivo === "Todos" || projeto.category === filtroAtivo,
  );

  return (
    <section id={id} className="relative py-24 bg-neutral-950 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Nosso <span className="text-emerald-400">Catálogo</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Explore projetos que já materializamos. De colecionáveis
              detalhados e pintados à mão a soluções utilitárias do dia a dia.
            </p>
          </div>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroAtivo(categoria)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filtroAtivo === categoria
                  ? "bg-emerald-500 text-neutral-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetosFiltrados.map((projeto) => (
            <div
              key={projeto.id}
              className="group relative h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800"
            >
              {/* Fallback de cor caso a imagem não carregue/não exista ainda */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900"></div>

              {/* Imagem do Projeto (Comente ou substitua o src real quando tiver as fotos) */}

              <Image
                src={projeto.image}
                alt={projeto.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />

              {/* Overlay de Hover (Glassmorphism) */}
              <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-max">
                  {projeto.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {projeto.title}
                </h3>
                <p className="text-sm text-neutral-300 line-clamp-2">
                  {projeto.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
