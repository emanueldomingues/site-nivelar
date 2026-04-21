"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [current, setCurrent] = useState(0);

  const heroImages = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina2.jpg",
    "/images/equipamentos/maquina3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/95 z-50 px-6 py-3 border-b border-gray-800">
        <h1 className="text-2xl font-bold">NIVELAR</h1>
        <p className="text-xs text-yellow-400">Onde começa cada grande obra</p>
      </header>

      {/* HERO */}
      <section className="h-[55vh] pt-20 relative flex items-center justify-center">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition ${
              current === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
        <h2 className="text-3xl text-center font-bold relative">
          Terraplanagem <span className="text-yellow-400">de Alto Padrão</span>
        </h2>
      </section>

      {/* CONTEÚDO TESTE */}
      <section className="py-16 text-center">
        <h2 className="text-yellow-400 text-2xl mb-4">SITE RESTAURADO</h2>
        <p className="text-gray-300">
          Estrutura funcionando sem erro de renderização.
        </p>
      </section>

      {/* CONTATO */}
      <section className="py-16 text-center">
        <h2 className="text-yellow-400 mb-4">CONTATO</h2>

        <p>📍 Av. Antônio Raminelli, 857</p>

        <a
          href="https://wa.me/5543998061421"
          className="inline-flex items-center gap-2 mt-4 hover:text-yellow-400"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </section>

      {/* BOTÃO */}
      <a
        href="https://wa.me/5543998061421"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full text-white"
      >
        <FaWhatsapp />
      </a>

    </main>
  );
}