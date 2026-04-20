"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const imagens = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina2.jpg",
    "/images/equipamentos/maquina3.jpg",
  ];

  const equipamentos = Array.from(
    { length: 10 },
    (_, i) => `/images/equipamentos/maquina${i + 1}.jpg`
  );

  const projetos = Array.from(
    { length: 9 },
    (_, i) => `/images/projetos/projeto${i + 1}.jpg`
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imagens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">

          {/* MENU CENTRAL */}
          <nav className="hidden md:flex gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
            <a href="#home" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>

          {/* LOGO DIREITA */}
          <div className="ml-auto flex items-center gap-3">

            <div className="text-right">
              <p className="text-xs text-gray-400">
                Onde começa cada grande obra
              </p>
            </div>

            {/* LOGO SVG RECRIADO */}
            <svg width="120" height="40" viewBox="0 0 200 60" fill="none">
              <text x="0" y="40" fill="white" fontSize="32" fontWeight="bold">
                NIVELAR
              </text>
            </svg>

          </div>

        </div>
      </header>

      {/* HERO / CARROSSEL */}
      <section id="home" className="h-screen relative flex items-center">

        {imagens.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold">
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>

          <p className="mt-4 text-yellow-400">
            Atendimento em Cambé e região
          </p>
        </div>

      </section>

      {/* PROJETOS */}
      <section id="projetos" className="p-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projetos.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl h-[250px] w-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="p-16 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {equipamentos.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl h-[150px] w-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="p-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300">
          A Nivelar Terraplanagem atua com excelência no setor, entregando serviços
          com precisão e compromisso.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-16 bg-black">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[300px] rounded-xl"
          />

          <div className="space-y-4">
            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            <a href="#" className="hover:text-yellow-400">Fernando</a><br />
            <a href="#" className="hover:text-yellow-400">Anderson</a><br />
            <a href="#" className="hover:text-yellow-400">Valéria</a>
          </div>

        </div>
      </section>

      {/* WHATS */}
      <a
        href="https://wa.me/5543996281826"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <img src="/icons/whatsapp.svg" className="w-6" />
      </a>

    </main>
  );
}