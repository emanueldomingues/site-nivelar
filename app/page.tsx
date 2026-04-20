"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const imagens = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
  ];

  const equipamentos = Array.from({ length: 10 }, (_, i) => `/images/maquina${i + 1}.jpg`);
  const projetos = Array.from({ length: 9 }, (_, i) => `/images/projetos/projeto${i + 1}.jpg`);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imagens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>

      {/* HEADER */}
      <header className="flex items-center justify-between px-10 py-4 bg-black fixed w-full z-50">

        <nav className="flex gap-8 text-sm">
          <a href="#home" className="hover:text-yellow-400">Início</a>
          <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
          <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
          <a href="#sobre" className="hover:text-yellow-400">Sobre</a>
          <a href="#contato" className="hover:text-yellow-400">Contato</a>
        </nav>

        <img src="/logo.png" className="h-16" />

      </header>

      {/* HERO COM CARROSSEL */}
      <section id="home" className="h-screen relative flex items-center px-10">

        {imagens.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">
          <img src="/logo.png" className="h-24 mb-4" />
          <p className="text-yellow-400 text-lg">Onde começa cada grande obra</p>
        </div>

      </section>

      {/* PROJETOS */}
      <section id="projetos" className="p-16 text-center">
        <h2 className="text-3xl mb-10">PROJETOS</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projetos.map((img, i) => (
            <img key={i} src={img} className="rounded-xl h-[250px] w-full object-cover" />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="p-16 text-center bg-[#111]">
        <h2 className="text-3xl mb-10">EQUIPAMENTOS</h2>

        <div className="grid md:grid-cols-5 gap-6">
          {equipamentos.map((img, i) => (
            <img key={i} src={img} className="rounded-xl h-[150px] w-full object-cover" />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="p-16 text-center">
        <h2 className="text-3xl mb-6">SOBRE</h2>

        <p className="max-w-2xl mx-auto text-gray-300">
          A Nivelar Terraplanagem atua com excelência no setor, entregando serviços com precisão,
          segurança e compromisso.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-16 bg-black">
        <h2 className="text-3xl text-yellow-400 text-center mb-10">CONTATO</h2>

        <div className="grid md:grid-cols-2 gap-10">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[300px] rounded-xl"
          />

          <div className="space-y-4">
            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            <a href="https://wa.me/5543998061421" className="hover:text-yellow-400">Fernando</a><br />
            <a href="https://wa.me/5543999520213" className="hover:text-yellow-400">Anderson</a><br />
            <a href="https://wa.me/5543996281826" className="hover:text-yellow-400">Valéria</a>
          </div>

        </div>
      </section>

    </main>
  );
}