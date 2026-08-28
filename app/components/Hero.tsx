import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* 1. Camada de Fundo (Background) */}
      <div className="absolute inset-0 z-0">
        {/* Nota: Substitua '/images/hero-3d.jpg' pelo caminho real da sua imagem na pasta 'public' */}
        <Image
          src="/icon.jpeg"
          alt="Bico extrusor de impressora 3D em operação"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />

        {/* 2. Camada de Contraste (Overlay com Gradiente) */}
        <div className="absolute inset-0 bg-neutral-950/70 bg-gradient-to-r from-neutral-950/90 via-neutral-900/60 to-transparent"></div>
      </div>

      {/* 3. Camada de Conteúdo (Foreground) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-start">
        {/* Badge superior (Micro-copy para gerar autoridade) */}
        <span className="inline-block py-1 px-3 mb-6 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium tracking-wider rounded-full uppercase backdrop-blur-sm">
          Manufatura Aditiva
        </span>

        {/* Título Principal (H1 - SEO Otimizado) */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white max-w-4xl leading-tight md:leading-tight tracking-tight">
          Materializando ideias com{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            impressão 3D
          </span>{" "}
          de alta precisão.
        </h1>

        {/* Subtítulo (Proposta de Valor expandida) */}
        <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed">
          Transformamos projetos digitais em peças físicas reais em São Luís. Da
          prototipagem de engenharia à criação de itens exclusivos, oferecemos
          precisão milimétrica e acabamento profissional.
        </p>

        {/* Grupo de Botões (CTAs) */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="#orcamento"
            className="flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
          >
            Solicitar Orçamento Técnico
          </Link>

          <Link
            href="#processo"
            className="flex items-center justify-center px-8 py-4 bg-transparent border border-neutral-600 hover:border-white text-neutral-200 hover:text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
          >
            Entender o Processo
          </Link>
        </div>
      </div>
    </section>
  );
}
