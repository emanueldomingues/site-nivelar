"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Nivelar() {
  const whatsapp =
    "https://wa.me/5543999999999?text=Olá, quero orçamento de terraplanagem";

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
      <header className="flex items-center justify-between px-6 md:px-10 py-4 bg-black/70 backdrop-blur-md border-b border-gray-800 fixed w-full z-50">

        {/* LOGO */}
        <img
          src="/images/logo.png"
          className="h-12 md:h-16 object-contain"
          alt="Nivelar Terraplanagem"
        />

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-sm mx-auto">
          <a href="#home" className="hover:text-yellow-400">Início</a>
          <a href="#galeria" className="hover:text-yellow-400">Galeria</a>
          <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
          <a href="#projetos" className="hover:text-yellow-400">Ver Projetos</a>
          <a href="#contato" className="hover:text-yellow-400">Contato</a>
        </nav>

        <div className="w-[100px]" />
      </header>

      {/* HERO CARROSSEL */}
      <section id="home" className="h-screen relative flex items-center px-10 overflow-hidden">

        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
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

        <div className="relative max-w-xl z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            ESPECIALISTAS EM <br />
            <span className="text-yellow-400">TERRAPLANAGEM</span>
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
            Mais de 10 anos de experiência, máquinas modernas e execução rápida.
          </p>

          <div className="mt-6">
            <a
              href={whatsapp}
              target="_blank"
              className="bg-green-600 px-6 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition"
            >
              Solicitar Orçamento
            </a>
          </div>

          <p className="mt-4 text-yellow-400">
            Atendimento em Cambé e região
          </p>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="p-10 text-center bg-black">
        <h2 className="text-2xl text-yellow-400 mb-4">
          Referência em Terraplanagem em Cambé
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Mais de 10 anos de experiência, equipamentos modernos e excelência em cada obra.
        </p>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="p-16 text-center">
        <h2 className="text-4xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
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

      {/* DIFERENCIAIS */}
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
          <div className="bg-black p-8 rounded-xl">
            <h3 className="text-yellow-400 text-xl mb-2">✔ Experiência</h3>
            <p>Mais de 10 anos de atuação</p>
          </div>

          <div className="bg-black p-8 rounded-xl">
            <h3 className="text-yellow-400 text-xl mb-2">✔ Equipamentos</h3>
            <p>Máquinas modernas</p>
          </div>

          <div className="bg-black p-8 rounded-xl">
            <h3 className="text-yellow-400 text-xl mb-2">✔ Rapidez</h3>
            <p>Atendimento ágil via WhatsApp</p>
          </div>
        </div>
      </motion.section>

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
          />

          <div className="text-left space-y-4">
            <p><strong>📍 Localização:</strong> Cambé - PR</p>
            <p><strong>📞 Telefone:</strong> (43) 99999-9999</p>
            <p><strong>📧 Email:</strong> contato@nivelar.com</p>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/terraplanagem.nivelar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-400 hover:text-pink-500 transition"
            >
              📸 Instagram: @terraplanagem.nivelar
            </a>

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

      {/* WHATSAPP FIXO */}
      <a
        href={whatsapp}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        💬
      </a>

    </div>
  );
}