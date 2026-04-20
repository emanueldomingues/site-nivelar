"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Nivelar() {

  const whatsappPrincipal = "https://wa.me/5543996281826";

  const contatos = [
    {
      nome: "Fernando",
      numero: "5543998061421",
      label: "(43) 99806-1421",
    },
    {
      nome: "Anderson",
      numero: "5543999520213",
      label: "(43) 99952-0213",
    },
    {
      nome: "Valéria",
      numero: "5543996281826",
      label: "(43) 99628-1826",
    },
  ];

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

        <div>
          <img src="/logo.svg" className="h-16 md:h-24" />
        </div>

        <nav className="hidden md:flex gap-10">
          <a href="#home">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Projetos</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="w-[80px]" />
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
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold">
            Terraplanagem de
            <span className="text-yellow-400"> Alto Padrão</span>
          </h1>

          <a
            href={whatsappPrincipal}
            target="_blank"
            className="mt-6 inline-block bg-green-600 px-6 py-3 rounded-lg"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="p-10 md:p-16 bg-[#111] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300">
          A Nivelar Terraplanagem atua com excelência no setor, entregando
          serviços com precisão, segurança e compromisso. Nosso propósito é
          transformar terrenos em bases sólidas para grandes obras.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 md:p-16 bg-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-yellow-400 text-center">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* MAPA */}
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857+Cambé&output=embed"
            className="w-full h-[300px] md:h-[350px] rounded-xl"
          />

          {/* INFO */}
          <div className="space-y-4">

            <p>📍 Av. Antônio Raminelli, 857<br/>Parque Res. Ana Rosa</p>

            {/* WHATS CONTATOS */}
            {contatos.map((c, i) => (
              <a
                key={i}
                href={`https://wa.me/${c.numero}`}
                target="_blank"
                className="flex items-center gap-3 hover:text-yellow-400"
              >
                {/* WHATSAPP OFICIAL */}
                <svg width="22" height="22" viewBox="0 0 32 32" fill="#25D366">
                  <path d="M19.11 17.66c-.27-.14-1.57-.77-1.81-.86-.24-.09-.42-.14-.6.14-.18.27-.69.86-.85 1.03-.16.18-.31.2-.58.07-.27-.14-1.15-.42-2.2-1.33-.82-.73-1.38-1.62-1.54-1.9-.16-.27-.02-.42.12-.56.13-.13.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.44-.82-1.97-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01s-.47.07-.71.34c-.24.27-.93.91-.93 2.22 0 1.31.95 2.57 1.08 2.75.13.18 1.86 2.84 4.51 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.57-.64 1.79-1.25.22-.61.22-1.13.15-1.25-.07-.11-.25-.18-.52-.32z"/>
                </svg>

                {c.nome} — {c.label}
              </a>
            ))}

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/terraplanagem.nivelar/"
              target="_blank"
              className="flex items-center gap-2 text-yellow-400"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                className="w-5 h-5"
              />
              @terraplanagem.nivelar
            </a>

          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <a
        href={whatsappPrincipal}
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className="w-6 h-6"
        />
      </a>

      <footer className="text-center p-6 text-gray-400">
        © 2026 Nivelar Terraplanagem
      </footer>
    </div>
  );
}