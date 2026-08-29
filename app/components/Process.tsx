import React from "react";

import { TbBulb, TbChecklist, TbCube, TbBrush } from "react-icons/tb";

const steps = [
  {
    id: "01",
    title: "Sua Ideia ou Nosso Catálogo",
    description:
      "Você nos manda uma imagem, referência ou apenas a ideia do que deseja. Também possuímos um catálogo repleto de projetos prontos para você escolher.",
    icon: <TbBulb className="w-6 h-6 text-emerald-400" />,
  },
  {
    id: "02",
    title: "Validação do Projeto",
    description:
      "Com a ideia em mãos, geramos uma prévia do projeto e enviamos para sua avaliação. Após sua aprovação, preparamos o arquivo 3D digital para a manufatura.",
    icon: <TbChecklist className="w-6 h-6 text-blue-400" />,
  },
  {
    id: "03",
    title: "Impressão em Filamento",
    description:
      "Sua peça começa a ganhar forma no mundo físico. Utilizamos impressoras de filamento de alta qualidade para construir o modelo camada por camada com excelente resistência.",
    icon: <TbCube className="w-6 h-6 text-emerald-400" />,
  },
  {
    id: "04",
    title: "Pintura e Acabamento Manual",
    description:
      "A etapa onde a peça ganha vida. Realizamos o lixamento, correção de superfícies, pintura feita 100% à mão e finalizamos com verniz para proteção e brilho.",
    icon: <TbBrush className="w-6 h-6 text-blue-400" />,
  },
];

export default function Processo({ id }: { id?: string }) {
  return (
    <section id={id} className="relative py-24 bg-neutral-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              O Processo de <span className="text-emerald-400">Criação</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Transformamos arquivos digitais em colecionáveis físicos. Do
              modelo 3D ao acabamento final, cuidamos de cada etapa para
              garantir o máximo nível de detalhe na sua peça.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group relative flex flex-col p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
            >
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[80%] w-full h-[1px] bg-gradient-to-r from-neutral-800 to-transparent z-0"></div>
              )}

              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 group-hover:border-emerald-500/30 transition-colors shadow-inner">
                  {step.icon}
                </div>
                <span className="text-4xl font-black text-neutral-800/80 group-hover:text-neutral-700 transition-colors">
                  {step.id}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-neutral-200 mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/50 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
