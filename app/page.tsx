"use client";

import { useState, useEffect } from "react";

export default function Nivelar() {
  const whatsapp =
    "https://wa.me/5543996281826?text=Olá, quero orçamento de terraplanagem";

  const heroImages = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
  ];

  const equipamentos = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
    "/images/maquina4.jpg",
    "/images/maquina5.jpg",
    "/images/maquina6.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0b0b0b] text-white">

      {/* HEADER */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800 flex justify-between items-center px-6 md:px-16 py-4">
        <img src="/logo.svg" className="h-14 md:h-20" />

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#home" className="hover:text-yellow-400">Início</a>
          <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
          <a href="#sobre" className="hover:text-yellow-400">Sobre</a>
          <a href="#contato" className="hover:text-yellow-400">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="h-screen flex items-center px-6 md:px-16 relative">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>

          <p className="mt-4 text-yellow-400">
            Onde começa cada grande obra
          </p>
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="p-10 md:p-16 text-center bg-[#111]">
        <h2 className="text-3xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {equipamentos.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl h-40 w-full object-cover hover:scale-105 transition"
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
          A Nivelar Terraplanagem atua com excelência, entregando precisão,
          segurança e qualidade em cada projeto.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 md:p-16 bg-black">
        <h2 className="text-3xl text-center mb-10 text-yellow-400">CONTATO</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857&output=embed"
            className="w-full h-[250px] rounded-xl"
          />

          <div className="space-y-4">
            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            <a href={whatsapp} target="_blank" className="flex items-center gap-2 hover:text-yellow-400">
              <img src="/icons/whatsapp.svg" className="w-5" />
              WhatsApp
            </a>

            <a href="https://instagram.com/terraplanagem.nivelar" target="_blank" className="flex items-center gap-2 text-yellow-400">
              <img src="/icons/instagram.svg" className="w-5" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* BOTÃO WHATS */}
      <a
        href={whatsapp}
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg"
      >
        <img src="/icons/whatsapp.svg" className="w-6" />
      </a>

    </div>
  );
}