"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";

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
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/95 z-50 px-6 py-3">
        <h1 className="text-2xl font-bold">NIVELAR</h1>
      </header>

      {/* HERO */}
      <section className="h-[60vh] pt-20 flex items-center justify-center relative">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center ${
              current === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50" />

        <h2 className="text-3xl font-bold relative text-center">
          Terraplanagem <span className="text-yellow-400">de Alto Padrão</span>
        </h2>
      </section>

      {/* TESTE DE IMAGENS */}
      <div className="p-10 text-center">
        <img
          src="/images/projetos/projeto1.jpg"
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="w-64 mx-auto"
        />

        <img
          src="/icons/instagram.svg"
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="w-10 mx-auto mt-4"
        />
      </div>

      {/* WHATS */}
      <a
        href="https://wa.me/5543998061421"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full text-white text-xl"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}