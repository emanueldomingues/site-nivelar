"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const imagens = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina2.jpg",
    "/images/equipamentos/maquina3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imagens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-black z-50 border-b border-gray-800">

        <div className="relative flex items-center justify-center h-24 w-full">

          {/* LOGO EXTREMA ESQUERDA */}
          <div className="absolute left-4 flex flex-col leading-none">

            <h1 className="text-4xl font-extrabold tracking-widest">
              NIVELAR
            </h1>

            <span className="bg-yellow-400 text-black px-3 py-1 text-sm font-bold w-fit">
              TERRAPLANAGEM
            </span>

            <span className="text-xs text-gray-400 mt-1">
              Onde começa cada grande obra
            </span>

          </div>

          {/* MENU CENTRAL */}
          <nav className="flex gap-10 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre Nós</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>

        </div>
      </header>

      {/* CARROSSEL */}
      <section id="home" className="h-[85vh] relative flex items-center px-6 pt-24">

        {imagens.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold">
            Terraplanagem de <br />
            <span className="text-yellow-400">Alto Padrão</span>
          </h1>
        </div>

      </section>

      {/* CONTATO IGUAL AO PRINT */}
      <section id="contato" className="py-20">

        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">
          CONTATO
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* MAPA ESQUERDA */}
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[300px] rounded-xl"
          />

          {/* CONTATOS DIREITA */}
          <div className="space-y-5 text-base">

            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            <p className="flex items-center gap-2 hover:text-green-400">
              📞 Fernando — (43) 99806-1421
            </p>

            <p className="flex items-center gap-2 hover:text-green-400">
              📞 Anderson — (43) 99952-0213
            </p>

            <p className="flex items-center gap-2 hover:text-green-400">
              📞 Valéria — (43) 99628-1826
            </p>

            <p className="text-yellow-400 hover:text-pink-500">
              @terraplanagem.nivelar
            </p>

          </div>

        </div>

      </section>

      {/* WHATS FLUTUANTE */}
      <a
        href="https://wa.me/5543996281826"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        WhatsApp
      </a>

    </div>
  );
}