"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const heroImages = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
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
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* MENU CENTRAL */}
          <nav className="hidden md:flex gap-8 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="hover:text-yellow-400 transition">Início</a>
            <a href="#projetos" className="hover:text-yellow-400 transition">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400 transition">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400 transition">Sobre</a>
            <a href="#contato" className="hover:text-yellow-400 transition">Contato</a>
          </nav>

          {/* LOGO DIREITA + SLOGAN */}
          <div className="ml-auto flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-gray-400">
                Onde começa cada grande obra
              </p>
            </div>
            <img src="/logo.png" className="h-14 md:h-20 object-contain" />
          </div>

        </div>
      </header>

      {/* HERO / CARROSSEL */}
      <section id="home" className="h-screen relative flex items-center">

        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img} className="w-full h-full object-cover" />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6 md:px-16 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>

          <p className="mt-4 text-yellow-400">
            Atendimento em Cambé e região
          </p>
        </div>

      </section>

      {/* PROJETOS */}
      <section id="projetos" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <img
              key={i}
              src={`/images/projetos/projeto${i + 1}.jpg`}
              className="rounded-xl h-[250px] w-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="p-10 md:p-16 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <img
              key={i}
              src={`/images/maquina${i + 1}.jpg`}
              className="rounded-xl h-[150px] w-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300">
          A Nivelar Terraplanagem atua com excelência no setor, entregando serviços
          com precisão e compromisso. Onde começa cada grande obra.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 md:p-16 bg-black">
        <h2 className="text-3xl text-yellow-400 text-center mb-10">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[300px] rounded-xl"
          />

          <div className="space-y-4">
            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            <a href="https://wa.me/5543998061421" className="block hover:text-yellow-400">
              Fernando
            </a>

            <a href="https://wa.me/5543999520213" className="block hover:text-yellow-400">
              Anderson
            </a>

            <a href="https://wa.me/5543996281826" className="block hover:text-yellow-400">
              Valéria
            </a>

            <a
              href="https://instagram.com/terraplanagem.nivelar"
              className="text-yellow-400 block"
            >
              Instagram
            </a>
          </div>

        </div>
      </section>

      {/* WHATS FLOAT */}
      <a
        href="https://wa.me/5543996281826"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <img src="/icons/whatsapp.svg" className="w-6" />
      </a>

      {/* FOOTER */}
      <footer className="text-center p-6 text-gray-400 text-sm">
        © 2026 Nivelar Terraplanagem
      </footer>

    </div>
  );
}