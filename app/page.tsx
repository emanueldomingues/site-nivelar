"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Nivelar() {
  const whatsappValeria =
    "https://wa.me/5543996281826?text=Olá, quero orçamento de terraplanagem";

  const whatsappFernando =
    "https://wa.me/5543998061421?text=Olá, quero orçamento de terraplanagem";

  const whatsappAnderson =
    "https://wa.me/5543999520213?text=Olá, quero orçamento de terraplanagem";

  const images = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0b0b0b] text-white font-sans">

      {/* HEADER */}
      <header className="flex items-center justify-between px-4 md:px-16 py-4 bg-black/80 backdrop-blur-xl border-b border-gray-800 fixed w-full z-50">

        <div className="flex flex-col">
          <img src="/logo.svg" className="h-16 md:h-24" />
          <span className="text-xs text-gray-400">
            Onde começa cada grande obra
          </span>
        </div>

        <nav className="hidden md:flex gap-10 text-sm">
          <a href="#home" className="hover:text-yellow-400">Início</a>
          <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
          <a href="#galeria" className="hover:text-yellow-400">Projetos</a>
          <a href="#sobre" className="hover:text-yellow-400">Sobre nós</a>
          <a href="#contato" className="hover:text-yellow-400">Contato</a>
        </nav>

        <div className="w-[100px]" />
      </header>

      {/* HERO */}
      <section id="home" className="h-screen flex items-center px-6 md:px-16 relative">

        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold">
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>

          <a
            href={whatsappValeria}
            target="_blank"
            className="mt-6 inline-block bg-green-600 px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="p-10 md:p-16 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300">
          Na Nivelar Terraplanagem, acreditamos que cada projeto começa com uma base sólida.
          Trabalhamos com compromisso, qualidade e responsabilidade para entregar resultados
          que fazem a diferença. <strong className="text-yellow-400">Onde começa cada grande obra</strong>,
          começa com a gente.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 md:p-16 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* MAPA */}
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[300px] md:h-[350px] rounded-xl"
          />

          {/* INFO */}
          <div className="space-y-4 text-sm md:text-base">

            <p>
              📍 <strong>Endereço:</strong><br />
              Av. Antônio Raminelli, 857<br />
              Parque Res. Ana Rosa
            </p>

            <a href={whatsappFernando} target="_blank" className="flex items-center gap-2 hover:text-yellow-400">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-5 h-5" />
              Fernando — (43) 99806-1421
            </a>

            <a href={whatsappAnderson} target="_blank" className="flex items-center gap-2 hover:text-yellow-400">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-5 h-5" />
              Anderson — (43) 99952-0213
            </a>

            <a href={whatsappValeria} target="_blank" className="flex items-center gap-2 hover:text-yellow-400">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-5 h-5" />
              Valéria — (43) 99628-1826
            </a>

            <a
              href="https://www.instagram.com/terraplanagem.nivelar/"
              target="_blank"
              className="flex items-center gap-2 text-yellow-400"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-5 h-5" />
              @terraplanagem.nivelar
            </a>

          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <a
        href={whatsappValeria}
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          className="w-6 h-6"
        />
      </a>

      <footer className="text-center p-6 text-gray-400">
        © 2026 Nivelar Terraplanagem
      </footer>

    </div>
  );
}