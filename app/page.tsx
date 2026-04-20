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
      <header className="fixed top-0 left-0 w-full bg-black z-50 border-b border-gray-800">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

          {/* LOGO ESTILO PRINT */}
          <div className="flex flex-col">

            <div className="bg-black px-4 py-2">
              <h1 className="text-3xl font-bold tracking-wide">NIVELAR</h1>
            </div>

            <div className="bg-yellow-400 text-black text-xs px-4 py-1 w-fit">
              TERRAPLANAGEM
            </div>

            <p className="text-xs text-gray-400 mt-1">
              Onde começa cada grande obra
            </p>

          </div>

          {/* MENU DIREITA */}
          <nav className="flex gap-8 text-sm">
            <a href="#home" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre Nós</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section id="home" className="h-[75vh] relative flex items-center">

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

        <div className="relative z-10 px-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Terraplanagem de <br />
            <span className="text-yellow-400">Alto Padrão</span>
          </h1>
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
          com precisão, segurança e compromisso.
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

            <a href="https://wa.me/5543998061421" className="hover:text-yellow-400">Fernando</a><br />
            <a href="https://wa.me/5543999520213" className="hover:text-yellow-400">Anderson</a><br />
            <a href="https://wa.me/5543996281826" className="hover:text-yellow-400">Valéria</a>
          </div>

        </div>
      </section>

    </main>
  );
}