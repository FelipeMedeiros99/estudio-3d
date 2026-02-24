"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { CATALOG_DATA } from "./data";

export default function MobileCatalog() {
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  console.log({ selectedImage });

  const categories = Object.keys(CATALOG_DATA);

  const displayImages = useMemo(() => {
    if (activeCategory === "all") {
      return Object.values(CATALOG_DATA).flatMap((cat) => cat.files);
    }
    return CATALOG_DATA[activeCategory as keyof typeof CATALOG_DATA].files;
  }, [activeCategory]);

  // Helper to get category title for the Modal
  const getSelectedCategoryTitle = (src: string) => {
    const folder = src.split("/")[2];
    return (
      CATALOG_DATA[folder as keyof typeof CATALOG_DATA]?.title || "3D Model"
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 pb-20 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="px-6 pt-16 pb-12 bg-gradient-to-b from-slate-100 to-[#FDFDFD]">
        <div className="max-w-md mx-auto text-center">
          <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase">
            Estúdio de Impressão 3D
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mt-2 mb-4">
            Mateus 3D Lab
          </h1>
          <p className="text-slate-600 leading-relaxed">
            Transformando ideias digitais em realidade física com alta precisão.
            Explore nosso catálogo de colecionáveis, peças técnicas e suportes
            personalizados.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
            <div className="h-1 w-4 bg-indigo-200 rounded-full"></div>
            <div className="h-1 w-4 bg-indigo-200 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* --- STICKY NAVIGATION --- */}
      <nav className="sticky top-0 z-30 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-4 py-4">
        <div className="flex overflow-x-auto gap-2 no-scrollbar">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
              activeCategory === "all"
                ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
                : "bg-white text-slate-500 border border-slate-200"
            }`}
          >
            Todos os Projetos
          </button>
          {categories.map((catKey) => (
            <button
              key={catKey}
              onClick={() => setActiveCategory(catKey)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === catKey
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
                  : "bg-white text-slate-500 border border-slate-200"
              }`}
            >
              {CATALOG_DATA[catKey as keyof typeof CATALOG_DATA].title}
            </button>
          ))}
        </div>
      </nav>

      {/* --- MASONRY GRID --- */}
      <main className="p-4 max-w-6xl mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {Object.entries(CATALOG_DATA).map(
            (
              [key, value], // 1. Outer Map (Implicit Return)
            ) =>
              value.files.map((v) => {
                // 2. Inner Map (Explicit Return Starts)
                const isVideo = v.endsWith(".mp4");

                return (
                  // 3. The JSX being returned by the Inner Map
                  <div
                    key={v}
                    className="break-inside-avoid animate-in fade-in zoom-in duration-500"
                    onClick={() => !isVideo && setSelectedImage(v)}
                  >
                    {isVideo ? (
                      <video
                        src={v}
                        className="rounded-3xl w-full shadow-sm"
                        controls
                        muted
                      />
                    ) : (
                      <div className="relative group overflow-hidden rounded-3xl bg-slate-100 border border-slate-100 shadow-sm transition-all hover:shadow-xl active:scale-[0.98]">
                        <Image
                          src={v}
                          alt="3D Print"
                          width={500}
                          height={700}
                          className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <span className="text-white text-xs font-medium">
                            Ver detalhes
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }),
          )}
        </div>
      </main>

      {/* --- FULLSCREEN VIEWER --- */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white p-4 sm:p-8 animate-in slide-in-from-bottom duration-300">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="w-full max-w-2xl text-center flex flex-col gap-6">
            <div className="relative aspect-[4/5] w-full bg-slate-50 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={selectedImage}
                alt="3D Preview"
                fill
                className="object-contain p-2"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                {getSelectedCategoryTitle(selectedImage)}
              </h2>
              <p className="text-slate-500 mt-1">Peça produzida em Resina</p>
            </div>

            <a
              href={`https://wa.me/559882046039?text=${encodeURIComponent(
                `Olá Mateus! Gostaria de um orçamento para esta peça: ${window.location.origin}${selectedImage}`,
              )}`}
              target="_blank"
              className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-100 hover:scale-[1.02] transition-transform"
            >
              Encomendar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
