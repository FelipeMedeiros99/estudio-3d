"use client";
import { URLS } from "../data";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";

export default function Contact({ id }: { id?: string }) {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento para um projeto personalizado.",
  );

  const contacts = [
    {
      title: "WhatsApp",
      description:
        "Fale diretamente conosco para tirar dúvidas e solicitar seu orçamento.",
      href: `https://wa.me/${URLS.whatsapp}?text=${whatsappMessage}`,
      label: "Chamar no WhatsApp",
      external: true,
      icon: <FaWhatsapp className="w-6 h-6" />,
    },
    // {
    //   title: "E-mail",
    //   description:
    //     "Envie todos os detalhes do seu projeto para que possamos analisar sua ideia.",
    //   href: `mailto:${URLS.email}?subject=${encodeURIComponent(
    //     "Solicitação de orçamento",
    //   )}`,
    //   label: "Enviar e-mail",
    //   external: false,
    //   icon: <FiMail className="w-6 h-6" />,
    // },
    {
      title: "Instagram",
      description:
        "Acompanhe nossos trabalhos, novidades e projetos personalizados.",
      href: URLS.instagram,
      label: "Ver Instagram",
      external: true,
      icon: <FaInstagram className="w-6 h-6" />,
    },
    // {
    //   title: "Localização",
    //   description:
    //     "Veja nossa localização no mapa e encontre a melhor rota até nós.",
    //   href: URLS.maps,
    //   label: "Abrir no Maps",
    //   external: true,
    //   icon: <FiMapPin className="w-6 h-6" />,
    // },
  ];

  return (
    <section id={id} className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Cabeçalho */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            Fale conosco
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Vamos transformar sua ideia em{" "}
            <span className="text-emerald-400">realidade</span>
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed">
            Escolha a melhor forma de entrar em contato. Estamos prontos para
            conversar sobre seu próximo projeto.
          </p>
        </div>

        {/* Cards de contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className="group relative p-7 rounded-2xl bg-neutral-900/70 border border-neutral-800 transition-all duration-300 hover:border-emerald-500/40 hover:bg-neutral-900 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                  {contact.icon}
                </div>

                <svg
                  className="w-5 h-5 text-neutral-600 transition-all duration-300 group-hover:text-emerald-400 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {contact.title}
              </h3>

              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                {contact.description}
              </p>

              <span className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-emerald-400">
                {contact.label}

                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { FormEvent, useState } from "react";

// export default function Contact({ id }: { id?: string }) {
//   const [enviado, setEnviado] = useState(false);

//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setEnviado(true);
//   }

//   return (
//     <section id={id} className="relative py-24 bg-neutral-950 overflow-hidden">
//       {/* Elementos decorativos de fundo */}
//       <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
//         {/* Cabeçalho */}
//         <div className="max-w-2xl mb-12">
//           <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
//             Fale conosco
//           </span>

//           <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
//             Transforme sua ideia em{" "}
//             <span className="text-emerald-400">realidade</span>
//           </h2>

//           <p className="text-neutral-400 text-lg leading-relaxed">
//             Tem um projeto em mente? Envie os detalhes e nossa equipe analisará
//             a melhor forma de materializar sua ideia.
//           </p>
//         </div>

//         {/* Conteúdo */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//           {/* Informações de contato */}
//           <div className="lg:col-span-2 space-y-4">
//             <div className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800">
//               <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-5">
//                 <svg
//                   className="w-5 h-5 text-emerald-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.8}
//                     d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//               </div>

//               <h3 className="text-lg font-semibold text-white mb-2">
//                 Orçamentos
//               </h3>

//               <p className="text-sm text-neutral-400 leading-relaxed">
//                 Conte um pouco sobre o que você precisa e entraremos em contato
//                 para entender todos os detalhes do projeto.
//               </p>
//             </div>

//             <div className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800">
//               <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-5">
//                 <svg
//                   className="w-5 h-5 text-emerald-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.8}
//                     d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
//                   />
//                   <circle cx="12" cy="11" r="2.5" strokeWidth={1.8} />
//                 </svg>
//               </div>

//               <h3 className="text-lg font-semibold text-white mb-2">
//                 Projetos personalizados
//               </h3>

//               <p className="text-sm text-neutral-400 leading-relaxed">
//                 Trabalhamos com projetos personalizados, desde peças decorativas
//                 até soluções funcionais e protótipos.
//               </p>
//             </div>
//           </div>

//           {/* Formulário */}
//           <div className="lg:col-span-3">
//             <form
//               onSubmit={handleSubmit}
//               className="p-6 md:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-sm"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 {/* Nome */}
//                 <div>
//                   <label
//                     htmlFor="nome"
//                     className="block text-sm font-medium text-neutral-300 mb-2"
//                   >
//                     Nome
//                   </label>

//                   <input
//                     id="nome"
//                     name="nome"
//                     type="text"
//                     required
//                     placeholder="Seu nome"
//                     className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 outline-none transition-all focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10"
//                   />
//                 </div>

//                 {/* E-mail */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-neutral-300 mb-2"
//                   >
//                     E-mail
//                   </label>

//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     placeholder="seu@email.com"
//                     className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 outline-none transition-all focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10"
//                   />
//                 </div>

//                 {/* Telefone */}
//                 <div>
//                   <label
//                     htmlFor="telefone"
//                     className="block text-sm font-medium text-neutral-300 mb-2"
//                   >
//                     Telefone
//                   </label>

//                   <input
//                     id="telefone"
//                     name="telefone"
//                     type="tel"
//                     placeholder="(00) 00000-0000"
//                     className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 outline-none transition-all focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10"
//                   />
//                 </div>

//                 {/* Tipo de projeto */}
//                 <div>
//                   <label
//                     htmlFor="tipo"
//                     className="block text-sm font-medium text-neutral-300 mb-2"
//                   >
//                     Tipo de projeto
//                   </label>

//                   <select
//                     id="tipo"
//                     name="tipo"
//                     required
//                     defaultValue=""
//                     className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 outline-none transition-all focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10"
//                   >
//                     <option value="" disabled>
//                       Selecione uma opção
//                     </option>
//                     <option value="decoracao">Decoração</option>
//                     <option value="miniatura">Miniatura</option>
//                     <option value="action-figure">Action Figure</option>
//                     <option value="utilitario">Utilitário</option>
//                     <option value="outro">Outro</option>
//                   </select>
//                 </div>

//                 {/* Mensagem */}
//                 <div className="md:col-span-2">
//                   <label
//                     htmlFor="mensagem"
//                     className="block text-sm font-medium text-neutral-300 mb-2"
//                   >
//                     Conte sobre seu projeto
//                   </label>

//                   <textarea
//                     id="mensagem"
//                     name="mensagem"
//                     required
//                     rows={5}
//                     placeholder="Descreva sua ideia, medidas, quantidade, prazo ou qualquer outro detalhe importante..."
//                     className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 outline-none resize-none transition-all focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10"
//                   />
//                 </div>
//               </div>

//               {/* Feedback */}
//               {enviado && (
//                 <div className="mt-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-300">
//                   Mensagem preparada com sucesso! Agora conecte este formulário
//                   ao seu serviço de envio para receber os contatos.
//                 </div>
//               )}

//               {/* Botão */}
//               <button
//                 type="submit"
//                 className="w-full mt-6 px-6 py-3.5 rounded-xl bg-emerald-500 text-neutral-950 font-bold transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] active:scale-[0.99]"
//               >
//                 Solicitar orçamento
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
