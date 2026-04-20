"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Nivelar() {
  const whatsapp =
    "https://wa.me/5543996281826?text=Olá, quero orçamento de terraplanagem";

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
      <header className="flex items-center justify-between px-4 md:px-16 py-4 bg-black/80 backdrop-blur-xl border-b border-gray-800 fixed w-full z-50 shadow-lg">

        <div className="flex flex-col">
          <img
            src="/logo.svg"
            alt="Nivelar Terraplanagem"
            className="h-16 md:h-24 object-contain"
          />

          <span className="text-[10px] md:text-xs text-gray-400 mt-1 tracking-wide leading-tight">
            Onde começa cada <br className="md:hidden" />
            grande obra
          </span>
        </div>

        <nav className="hidden md:flex gap-12 text-sm font-medium tracking-wide">
          <a href="#home" className="hover:text-yellow-400 transition">Início</a>
          <a href="#servicos" className="hover:text-yellow-400 transition">Serviços</a>
          <a href="#sobre" className="hover:text-yellow-400 transition">Sobre Nós</a>
          <a href="#galeria" className="hover:text-yellow-400 transition">Ver Projetos</a>
          <a href="#contato" className="hover:text-yellow-400 transition">Contato</a>
        </nav>

        <div className="w-[80px] md:w-[120px]" />
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

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative max-w-2xl z-10">
          <h1 className="text-3xl md:text-7xl font-extrabold leading-tight">
            Terraplanagem de
            <span className="text-yellow-400"> Alto Padrão</span>
          </h1>

          <div className="mt-8">
            <a
              href={whatsapp}
              target="_blank"
              className="bg-green-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold shadow-lg hover:scale-105 transition"
            >
              Solicitar Orçamento
            </a>
          </div>

          <p className="mt-6 text-yellow-400 font-medium text-sm md:text-base">
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
        className="p-10 md:p-16 bg-[#111] text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">DIFERENCIAIS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black p-6 md:p-8 rounded-xl">
            <h3 className="text-yellow-400 text-lg md:text-xl mb-2">✔ Experiência</h3>
            <p>Mais de 10 anos de atuação</p>
          </div>

          <div className="bg-black p-6 md:p-8 rounded-xl">
            <h3 className="text-yellow-400 text-lg md:text-xl mb-2">✔ Equipamentos</h3>
            <p>Máquinas modernas</p>
          </div>

          <div className="bg-black p-6 md:p-8 rounded-xl">
            <h3 className="text-yellow-400 text-lg md:text-xl mb-2">✔ Rapidez</h3>
            <p>Atendimento ágil via WhatsApp</p>
          </div>
        </div>
      </motion.section>

      {/* SOBRE NÓS */}
      <section id="sobre" className="p-10 md:p-16 bg-[#0f0f0f] text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-10">
          Na <strong>Nivelar Terraplanagem</strong>, acreditamos que grandes obras começam com uma base sólida.
          Trabalhamos com dedicação, precisão e compromisso para entregar resultados de alto padrão,
          garantindo confiança em cada etapa do serviço.
        </p>

        <h3 className="text-2xl font-bold mb-6 text-yellow-400">
          Nossos Valores
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-black p-6 rounded-xl">
            <h4 className="text-yellow-400 font-semibold mb-2">Compromisso</h4>
            <p className="text-sm text-gray-300">
              Cumprimos prazos e entregamos exatamente o que prometemos.
            </p>
          </div>

          <div className="bg-black p-6 rounded-xl">
            <h4 className="text-yellow-400 font-semibold mb-2">Qualidade</h4>
            <p className="text-sm text-gray-300">
              Trabalhamos com excelência em cada detalhe do serviço.
            </p>
          </div>

          <div className="bg-black p-6 rounded-xl">
            <h4 className="text-yellow-400 font-semibold mb-2">Confiança</h4>
            <p className="text-sm text-gray-300">
              Construímos relações duradouras com nossos clientes.
            </p>
          </div>

        </div>

        <p className="mt-10 text-yellow-400 font-semibold">
          Onde começa cada grande obra.
        </p>

      </section>

      {/* GALERIA */}
      <section id="galeria" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <img
              key={i}
              src={`/images/maquina${i}.jpg`}
              className="rounded-xl hover:scale-110 transition duration-500 shadow-xl"
            />
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 md:p-16 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé+PR&output=embed"
            className="w-full h-[300px] md:h-[350px] rounded-xl"
            loading="lazy"
          />

          <div className="text-left space-y-4 text-sm md:text-base">

            <p><strong>📍 Endereço:</strong> Av. Antônio Raminelli, 857 - Cambé</p>

            <a href="https://wa.me/5543998061421" target="_blank">Fernando - (43) 99806-1421</a><br/>
            <a href="https://wa.me/5543999520213" target="_blank">Anderson - (43) 99952-0213</a><br/>
            <a href="https://wa.me/5543996281826" target="_blank">Valéria - (43) 99628-1826</a>

            <p className="mt-4"><strong>📧 Email:</strong> contato@nivelar.com</p>

          </div>

        </div>
      </section>

      <footer className="text-center p-6 bg-black text-gray-400 text-sm">
        © 2026 Nivelar Terraplanagem
      </footer>

      {/* BOTÃO WHATS FLUTUANTE */}
      <a
        href={whatsapp}
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        💬
      </a>

    </div>
  );
}