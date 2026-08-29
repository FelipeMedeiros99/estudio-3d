import React from "react";
import { TbPrinter, TbPalette } from "react-icons/tb";

const especificacoes = [
  {
    id: "material",
    title: "Material Base (Filamento)",
    subtitle: "Resistência estrutural e sustentabilidade.",
    accent: "emerald",
    description:
      "Utilizamos polímeros termoplásticos de alta qualidade, como o PLA (biodegradável) e PETG. Esses materiais garantem que sua peça não apenas tenha um excelente volume e forma, mas também durabilidade para manuseio e exposição.",
    idealFor: [
      "Peças de grande volume",
      "Action figures estruturados",
      "Itens de decoração resistentes",
      "Cosplay e adereços",
    ],
    icon: <TbPrinter className="w-8 h-8 text-emerald-400" />,
    borderClass: "group-hover:border-emerald-500/50",
    bgClass: "group-hover:bg-emerald-900/10",
    badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    id: "acabamento",
    title: "Acabamento e Pintura",
    subtitle: "A arte que traz sua peça à vida.",
    accent: "blue",
    description:
      "A impressão é apenas o começo. Após a fabricação, a peça passa por um rigoroso processo de lixamento para suavizar as camadas, seguido de pintura 100% manual com tintas de alta pigmentação e selagem em verniz.",
    idealFor: [
      "Colecionáveis de alto padrão",
      "Presentes personalizados",
      "Dioramas detalhados",
      "Peças de exibição",
    ],
    icon: <TbPalette className="w-8 h-8 text-blue-400" />,
    borderClass: "group-hover:border-blue-500/50",
    bgClass: "group-hover:bg-blue-900/10",
    badgeClass: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
];

export default function Materiais({ id }: { id?: string }) {
  return (
    <section id={id} className="relative py-24 bg-neutral-950 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Do Plástico à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Arte
            </span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Combinamos a precisão geométrica da impressão 3D em filamento com a
            exclusividade do acabamento manual para entregar peças únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {especificacoes.map((item) => (
            <div
              key={item.id}
              className={`group relative flex flex-col p-8 md:p-10 rounded-3xl bg-neutral-900/40 border border-neutral-800 transition-all duration-500 ${item.borderClass} ${item.bgClass}`}
            >
              <div className="mb-8 p-4 bg-neutral-950 border border-neutral-800 rounded-2xl inline-block w-max shadow-inner">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                {item.title}
              </h3>
              <h4
                className={`text-lg font-medium mb-6 ${item.id === "material" ? "text-emerald-400" : "text-blue-400"}`}
              >
                {item.subtitle}
              </h4>

              <p className="text-neutral-300 leading-relaxed mb-8">
                {item.description}
              </p>

              <div className="mt-auto">
                <span className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4 block">
                  Destaques:
                </span>
                <ul className="space-y-3">
                  {item.idealFor.map((uso, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${item.id === "material" ? "text-emerald-500" : "text-blue-500"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-neutral-300 font-medium">
                        {uso}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
