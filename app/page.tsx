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

        <div className="relative w-full flex items-center py-4">

          {/* LOGO EXTREMA ESQUERDA */}
          <div className="flex flex-col items-start leading-none pl-4">

            <h1 className="text-4xl md:text-5xl font-extrabold">
              NIVELAR
            </h1>

            <div className="bg-yellow-400 text-black text-xs md:text-sm px-3 py-[2px] mt-1">
              TERRAPLANAGEM
            </div>

            <p className="text-xs md:text-sm text-gray-400 mt-1">
              Onde começa cada grande obra
            </p>

          </div>

          {/* MENU CENTRALIZADO ABSOLUTO */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-sm md:text-base">
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

        <div className="relative z-10 px-6 md:px-12">
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

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[320px] rounded-xl"
          />

          {/* CONTATOS DESCIDOS */}
          <div className="space-y-6 text-base mt-6 md:mt-10">

            <p className="mb-4">📍 Av. Antônio Raminelli, 857 - Cambé</p>

            <a href="https://wa.me/5543998061421" target="_blank" className="flex items-center gap-3 hover:text-yellow-400">
              <img src="/icons/whatsapp.svg" className="w-6" />
              Fernando
            </a>

            <a href="https://wa.me/5543999520213" target="_blank" className="flex items-center gap-3 hover:text-yellow-400">
              <img src="/icons/whatsapp.svg" className="w-6" />
              Anderson
            </a>

            <a href="https://wa.me/5543996281826" target="_blank" className="flex items-center gap-3 hover:text-yellow-400">
              <img src="/icons/whatsapp.svg" className="w-6" />
              Valéria
            </a>

            <a href="https://instagram.com/terraplanagem.nivelar" target="_blank" className="flex items-center gap-3 text-yellow-400">
              <img src="/icons/instagram.svg" className="w-6" />
              @terraplanagem.nivelar
            </a>

          </div>

        </div>
      </section>

      {/* WHATS FLUTUANTE */}
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