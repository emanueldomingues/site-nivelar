"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Nivelar() {
  const whatsapp =
    "https://wa.me/5543999999999?text=Olá, quero orçamento de terraplanagem";

  const images = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      setCurrent((prev) => (prev + 1) % images.length);
    }
    if (touchStart - touchEnd < -50) {
      setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="bg-[#0b0b0b] text-white font-sans">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 md:px-16 py-5 bg-black/80 backdrop-blur-xl border-b border-gray-800 fixed w-full z-50 shadow-lg">

        <img
          src="/logo.svg"
          alt="Nivelar Terraplanagem"
          className="h-14 md:h-20 object-contain"
        />

        {/* MENU AJUSTADO */}
        <nav className="hidden md:flex gap-12 text-sm font-medium tracking-wide">
          <a href="#home" className="hover:text-yellow-400 transition">Início</a>
          <a href="#servicos" className="hover:text-yellow-400 transition">Serviços</a>
          <a href="#galeria" className="hover:text-yellow-400 transition">Ver Projetos</a>
          <a href="#contato" className="hover:text-yellow-400 transition">Contato</a>
        </nav>

        <div className="w-[120px]"></div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex items-center px-6 md:px-16 relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundImage: `url(${images[current]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative max-w-2xl z-10">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
            Terraplanagem de
            <span className="text-yellow-400"> Alto Padrão</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg md:text-xl">
            Equipamentos modernos, equipe especializada e entrega rápida.
          </p>

          <div className="mt-8">
            <a
              href={whatsapp}
              target="_blank"
              className="bg-green-600 px-8 py-4 rounded-lg font-bold shadow-lg hover:scale-105 transition"
            >
              Solicitar Orçamento
            </a>
          </div>

          <p className="mt-6 text-yellow-400 font-medium">
            Atendimento em Cambé e região
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <motion.section
        id="servicos"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-16 bg-[#111] text-center"
      >
        <h2 className="text-4xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">DIFERENCIAIS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black p-8 rounded-xl shadow-lg">
            <h3 className="text-yellow-400 text-xl mb-2">✔ Experiência</h3>
            <p>Mais de 10 anos de mercado</p>
          </div>

          <div className="bg-black p-8 rounded-xl shadow-lg">
            <h3 className="text-yellow-400 text-xl mb-2">✔ Equipamentos</h3>
            <p>Máquinas modernas e revisadas</p>
          </div>

          <div className="bg-black p-8 rounded-xl shadow-lg">
            <h3 className="text-yellow-400 text-xl mb-2">✔ Agilidade</h3>
            <p>Execução rápida e eficiente</p>
          </div>
        </div>
      </motion.section>

      {/* GALERIA */}
      <section id="galeria" className="p-16 text-center">
        <h2 className="text-4xl font-bold mb-10">
          ÚLTIMOS <span className="text-yellow-400">PROJETOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <img
              key={i}
              src={`/images/maquina${i}.jpg`}
              className="rounded-xl hover:scale-110 transition duration-500 shadow-xl"
            />
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="p-16 bg-[#111] text-center">
        <h2 className="text-4xl font-bold mb-10">
          O QUE NOSSOS CLIENTES DIZEM
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Serviço rápido e de alta qualidade.",
            "Equipe profissional e pontual.",
            "Resultado impecável, recomendo."
          ].map((texto, i) => (
            <div key={i} className="bg-black p-6 rounded-xl shadow-lg">
              <p className="text-gray-300">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-16 bg-black text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <iframe
            src="https://www.google.com/maps?q=Cambé+PR&output=embed"
            className="w-full h-[350px] rounded-xl"
            loading="lazy"
          ></iframe>

          <div className="text-left space-y-4">
            <p><strong>📍 Localização:</strong> Cambé - PR</p>
            <p><strong>📞 Telefone:</strong> (43) 99999-9999</p>
            <p><strong>📧 Email:</strong> contato@nivelar.com</p>

            <a
              href={whatsapp}
              target="_blank"
              className="inline-block mt-4 bg-green-600 px-6 py-3 rounded-lg font-bold"
            >
              Falar no WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-6 bg-black text-gray-400">
        © 2026 Nivelar Terraplanagem
      </footer>

      {/* WHATS FLOAT */}
      <a
        href={whatsapp}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </a>

    </div>
  );
}