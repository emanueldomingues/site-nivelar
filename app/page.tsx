"use client";

import { useState, useEffect } from "react";

export default function Nivelar() {
  const heroImages = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina2.jpg",
    "/images/equipamentos/maquina3.jpg",
  ];

  const equipamentos = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina2.jpg",
    "/images/equipamentos/maquina3.jpg",
    "/images/equipamentos/maquina4.jpg",
    "/images/equipamentos/maquina5.jpg",
  ];

  const projetos = [
    "/images/projetos/projeto1.jpg",
    "/images/projetos/projeto2.jpg",
    "/images/projetos/projeto3.jpg",
    "/images/projetos/projeto4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <img src="/logo.svg" className="h-20" />

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>

          <div className="w-[120px]" />
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="h-screen flex items-center justify-center relative text-center px-6">

        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>

          <p className="mt-4 text-yellow-400 text-lg">
            Onde começa cada grande obra
          </p>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {projetos.map((img, i) => (
            <img key={i} src={img} className="rounded-xl h-56 w-full object-cover" />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="py-16 px-6 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {equipamentos.map((img, i) => (
            <img key={i} src={img} className="rounded-xl h-40 w-full object-cover" />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300">
          A Nivelar Terraplanagem atua com excelência, entregando qualidade, segurança
          e compromisso em cada projeto.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          <div className="bg-black p-6 rounded-xl">✔ 10+ anos de experiência</div>
          <div className="bg-black p-6 rounded-xl">✔ Equipamentos modernos</div>
          <div className="bg-black p-6 rounded-xl">✔ Atendimento rápido</div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-16 px-6 bg-black">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[300px] rounded-xl"
          />

          <div className="space-y-4">
            <p>📍 Cambé - PR</p>

            <a href="https://wa.me/5543998061421" className="flex items-center gap-2">
              <img src="/icons/whatsapp.svg" className="w-5" />
              Fernando
            </a>

            <a href="https://wa.me/5543999520213" className="flex items-center gap-2">
              <img src="/icons/whatsapp.svg" className="w-5" />
              Anderson
            </a>

            <a href="https://wa.me/5543996281826" className="flex items-center gap-2">
              <img src="/icons/whatsapp.svg" className="w-5" />
              Valéria
            </a>

            <a href="https://instagram.com/terraplanagem.nivelar" className="flex items-center gap-2 text-yellow-400">
              <img src="/icons/instagram.svg" className="w-5" />
              @terraplanagem.nivelar
            </a>
          </div>
        </div>
      </section>

      {/* WHATS FIXO */}
      <a
        href="https://wa.me/5543996281826"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg"
      >
        <img src="/icons/whatsapp.svg" className="w-6" />
      </a>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400">
        © 2026 Nivelar Terraplanagem
      </footer>

    </div>
  );
}