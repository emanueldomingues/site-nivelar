"use client";

import { useState, useEffect } from "react";

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
    <main className="bg-black text-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-black z-50">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

          {/* LOGO + SLOGAN */}
          <div className="flex flex-col">

            <h1 className="text-3xl font-bold tracking-wide">
              NIVELAR
            </h1>

            <div className="bg-yellow-400 text-black text-xs px-3 py-1 mt-1 w-fit">
              TERRAPLANAGEM
            </div>

            <p className="text-xs text-gray-400 mt-1">
              Onde começa cada grande obra
            </p>

          </div>

          {/* MENU DIREITA (MENOR) */}
          <nav className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre Nós</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>

        </div>
      </header>

      {/* HERO COM CARROSSEL (MENOR) */}
      <section id="home" className="h-[70vh] relative flex items-center">

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

    </main>
  );
}