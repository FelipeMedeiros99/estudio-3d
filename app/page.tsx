"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { CATALOG_DATA } from "./data";
import logo from "./logo.jpeg";

export default function MobileCatalog() {
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        <div className="max-w-md mx-auto text-center flex flex-col items-center">
          {/* Main Logo Display */}
          <div className="mb-6 relative w-24 h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-white animate-in fade-in zoom-in duration-700">
            <Image
              src={logo}
              alt="KM 3D"
              fill
              className="object-cover"
              priority // High priority for LCP
            />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mt-2 mb-4">
            KM 3D
          </h1>
          <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase">
            Estúdio de Impressão 3D
          </span>
          <p className="text-slate-600 leading-relaxed">
            Transformando ideias digitais em realidade física com alta precisão.
            Explore nosso catálogo de colecionáveis e peças técnicas.
          </p>
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
      <main className="p-4 max-w-6xl mx-auto space-y-12">
        {Object.entries(CATALOG_DATA)
          // Filter to show only the active category, or all if "all" is selected
          .filter(([key]) => activeCategory === "all" || activeCategory === key)
          .map(([key, value]) => (
            <section
              key={key}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              {/* Category Title */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-slate-800 whitespace-nowrap">
                  {value.title}
                </h2>
                <div className="h-[1px] w-full bg-slate-200"></div>
              </div>

              {/* Masonry Grid for this specific category */}
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {value.files.map((v) => {
                  const isVideo = v.endsWith(".mp4");
                  return (
                    <div
                      key={v}
                      className="break-inside-avoid"
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
                            alt={value.title}
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
                })}
              </div>
            </section>
          ))}
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
                `Olá KM 3D! Gostaria de um orçamento para esta peça: ${window.location.origin}${selectedImage}`,
              )}`}
              target="_blank"
              className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-100 hover:scale-[1.02] transition-transform"
            >
              Encomendar pelo WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* --- FIXED WHATSAPP BUTTON --- */}
      <a
        href="https://wa.me/559882046039?text=Olá KM 3D! Vi seu catálogo e gostaria de solicitar um orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all duration-300 group flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* The Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:hidden"></span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </a>
    </div>
  );
}
