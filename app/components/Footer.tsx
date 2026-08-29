import Link from "next/link";
import {
  TbBrandInstagram,
  TbBrandWhatsapp,
  TbMail,
  TbMapPin,
  TbArrowRight,
} from "react-icons/tb";
import { TELEFONE, URLS } from "../data";
import { formatPhoneNumber } from "../utils/formatTelefone";

export default function Footer({ id }: { id: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id={id}
      className="bg-neutral-950 border-t border-neutral-900 relative overflow-hidden"
    >
      {/* Detalhe visual de brilho sutil no topo do footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Marca e Bio */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-3xl font-black text-white tracking-tighter">
                KM<span className="text-emerald-400">3D</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Transformando ideias e arquivos digitais em peças físicas reais.
              Impressão em filamento de alta resistência, curadoria de modelos e
              pintura manual exclusiva.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          {/* <div className="flex flex-col">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">
              Navegação
            </h4>
            <nav className="flex flex-col gap-4">
              {["Processo", "Materiais", "Portfólio"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-neutral-400 hover:text-emerald-400 transition-colors text-sm font-medium flex items-center gap-2 group"
                >
                  <TbArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  {item}
                </Link>
              ))}
            </nav>
          </div> */}

          {/* Coluna 3: Contato e Localização */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <TbMapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>São Luís, MA</span>
              </li>
              <li>
                <a
                  href={URLS.instagram}
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  <TbBrandInstagram className="w-5 h-5 text-emerald-500 shrink-0" />
                  KM3D
                </a>
              </li>
              <li>
                <a
                  href={URLS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  <TbBrandWhatsapp className="w-5 h-5 text-emerald-500 shrink-0" />
                  {formatPhoneNumber(TELEFONE)}
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais e CTA */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">
              Redes Sociais
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href={URLS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <TbBrandInstagram className="w-5 h-5" />
              </a>
              <a
                href={URLS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <TbBrandWhatsapp className="w-5 h-5" />
              </a>
            </div>
            <a
              href={URLS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors w-full sm:w-auto text-center"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>

        {/* Barra Inferior (Direitos Autorais) */}
        <div className="pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs">
            © {currentYear} SLZ3D. Todos os direitos reservados.
          </p>
          <p className="text-neutral-600 text-xs flex items-center gap-1">
            Desenvolvido com dedicação em São Luís.
          </p>
        </div>
      </div>
    </footer>
  );
}
