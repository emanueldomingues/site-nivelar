"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const whatsapp =
  "https://wa.me/5543999999999?text=Olá, quero orçamento de terraplanagem";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-gray-800 fixed w-full z-50">
      <Image
        src="/logo.svg"
        alt="Nivelar Terraplanagem"
        width={200}
        height={80}
        className="h-12 w-auto md:h-16"
      />

      <nav className="hidden md:flex gap-8 text-sm">
        <a href="#home" className="hover:text-yellow-400">Início</a>
        <a href="#galeria" className="hover:text-yellow-400">Galeria</a>
        <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
        <a href="#depoimentos" className="hover:text-yellow-400">Depoimentos</a>
        <a href="#contato" className="hover:text-yellow-400">Contato</a>
      </nav>

      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-6 md:hidden">
          <a href="#home">Início</a>
          <a href="#galeria">Galeria</a>
          <a href="#servicos">Serviços</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const images = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const diff = touchStart - e.changedTouches[0].clientX;

    if (diff > 50) {
      setIndex((prev) => (prev + 1) % images.length);
    } else if (diff < -50) {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }

    setTouchStart(null);
  };

  return (
    <section
      id="home"
      className="h-screen relative overflow-hidden flex items-center px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        key={index}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[index]})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-xl z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Terraplanagem em Cambé e Região
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          Mais de 10 anos de experiência com máquinas modernas.
        </p>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-green-600 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-green-500 transition"
        >
          Solicitar Orçamento
        </a>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-yellow-400" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section id="galeria" className="p-16 text-center">
      <h2 className="text-4xl font-bold mb-10">Projetos Recentes</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Image
            key={i}
            src={`/images/maquina${i}.jpg`}
            alt={`Serviço de terraplanagem ${i}`}
            width={500}
            height={300}
            className="rounded-xl shadow-xl hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}

function Servicos() {
  return (
    <motion.section
      id="servicos"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-16 bg-[#111] text-center"
    >
      <h2 className="text-4xl font-bold mb-10">Diferenciais</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {["Experiência", "Máquinas modernas", "Atendimento rápido"].map(
          (item, i) => (
            <div
              key={i}
              className="bg-black p-8 rounded-xl shadow-lg hover:-translate-y-2 transition"
            >
              <h3 className="text-yellow-400 text-xl mb-2">✔ {item}</h3>
              <p>Alta qualidade garantida</p>
            </div>
          )
        )}
      </div>
    </motion.section>
  );
}

function Depoimentos() {
  return (
    <section id="depoimentos" className="p-16 text-center">
      <h2 className="text-4xl font-bold mb-10">Depoimentos</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          "Serviço excelente!",
          "Muito rápido e profissional!",
          "Recomendo demais!",
        ].map((text, i) => (
          <div key={i} className="bg-[#111] p-6 rounded-xl shadow">
            <p className="text-gray-300">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="p-16 bg-black text-center">
      <h2 className="text-4xl font-bold mb-8 text-yellow-400">Contato</h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <iframe
          src="https://www.google.com/maps?q=Cambé+PR&output=embed"
          className="w-full h-[350px] rounded-xl"
          loading="lazy"
        ></iframe>

        <div className="text-left space-y-4">
          <p>📍 Cambé - PR</p>
          <p>📞 (43) 99999-9999</p>
          <p>📧 contato@nivelar.com</p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-600 px-6 py-3 rounded-lg font-bold hover:bg-green-500 transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="text-center p-6 bg-black text-gray-400">
      © 2026 Nivelar Terraplanagem
    </footer>
  );
}

export default function Page() {
  return (
    <div className="bg-[#0b0b0b] text-white font-sans">
      <Header />
      <Hero />
      <Galeria />
      <Servicos />
      <Depoimentos />
      <Contato />
      <Footer />

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </a>
    </div>
  );
}