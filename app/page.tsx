"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [current, setCurrent] = useState(0);

  const images = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina5.jpg",
    "/images/equipamentos/maquina3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/95 border-b border-gray-800 px-6 py-3 z-50">
        <div className="flex justify-between items-center">
          
          <div>
            <h1 className="text-2xl font-bold">NIVELAR</h1>
            <p className="text-xs text-yellow-400">
              Onde começa cada grande obra
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#" className="hover:text-yellow-400">Início</a>
            <a href="#" className="hover:text-yellow-400">Projetos</a>
            <a href="#" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#" className="hover:text-yellow-400">Sobre</a>
            <a href="#" className="hover:text-yellow-400">Contato</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="h-[50vh] pt-24 relative flex items-center justify-center">

        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              current === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50" />

        <h2 className="text-3xl md:text-5xl font-bold text-center relative px-4">
          Terraplanagem de <br />
          <span className="text-yellow-400">Alto Padrão</span>
        </h2>

      </section>

      {/* PROJETOS */}
      <section className="py-16 text-center">
        <h2 className="text-yellow-400 text-2xl mb-8">
          PROJETOS REALIZADOS
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">

          {[
            "/images/projetos/projeto1.jpg",
            "/images/projetos/projeto2.jpg",
            "/images/projetos/projeto3.jpg",
            "/images/projetos/projeto4.jpg",
            "/images/projetos/projeto5.jpg",
         
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="h-[220px] w-full object-cover rounded-lg hover:scale-105 transition"
            />
          ))}

        </div>
      </section>

    </main>
  );
}