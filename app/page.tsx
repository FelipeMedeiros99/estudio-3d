import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Materials from "./components/Materials";
import Portfolio from "./components/Portifolio";
import Footer from "./components/Footer";
import Contact from "./components/Contacts";

// Futuras importações (deixadas comentadas para o roadmap)
// import Contact from './components/Contact';

export default function Home() {
  return (
    // O main atua como root container, definindo o background global
    // escuro para casar com a temática high-tech/engenharia
    <main className="relative min-h-screen bg-neutral-950 text-neutral-50 overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Navbar injetada fora do fluxo de blocos graças ao position: fixed interno dela */}
      <Navbar />

      {/* Hero Section no topo */}
      <Hero />

      {/* 
        Abaixo entram as próximas seções. 
        Vamos usar IDs nelas para que a âncora do Navbar (href="#secao") 
        funcione com smooth scrolling.
      */}

      <Process id="engenharia" />
      <Materials id="materiais" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
      <Footer id="footer" />
    </main>
  );
}
