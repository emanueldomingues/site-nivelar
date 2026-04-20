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

          <span className="text-[11px] md:text-sm text-gray-400 mt-1 leading-tight">
            Onde começa cada <br className="md:hidden" />
            grande obra
          </span>
        </div>

        <nav className="hidden md:flex gap-10 text-sm font-medium">
          <a href="#home" className="hover:text-yellow-400">Início</a>
          <a href="#sobre" className="hover:text-yellow-400">Sobre Nós</a>
          <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
          <a href="#galeria" className="hover:text-yellow-400">Ver Projetos</a>
          <a href="#contato" className="hover:text-yellow-400">Contato</a>
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
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>

          <div className="mt-8">
            <a
              href={whatsapp}
              target="_blank"
              className="bg-green-600 px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
            >
              Solicitar Orçamento
            </a>
          </div>

          <p className="mt-6 text-yellow-400">
            Atendimento em Cambé e região
          </p>
        </div>
      </section>

      {/* SOBRE NÓS */}
      <section id="sobre" className="p-10 md:p-16 bg-[#111] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Na Nivelar Terraplanagem, acreditamos que toda grande obra começa com uma base sólida.
          Trabalhamos com dedicação, precisão e responsabilidade para entregar resultados de alto padrão,
          garantindo segurança e qualidade em cada etapa do serviço.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-black p-6 rounded-xl">
            <h3 className="text-yellow-400 font-bold">Compromisso</h3>
            <p className="text-gray-400 mt-2">Cumprimento de prazos com responsabilidade</p>
          </div>

          <div className="bg-black p-6 rounded-xl">
            <h3 className="text-yellow-400 font-bold">Qualidade</h3>
            <p className="text-gray-400 mt-2">Excelência em cada detalhe do serviço</p>
          </div>

          <div className="bg-black p-6 rounded-xl">
            <h3 className="text-yellow-400 font-bold">Confiança</h3>
            <p className="text-gray-400 mt-2">Transparência e respeito com cada cliente</p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">DIFERENCIAIS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black p-6 rounded-xl">✔ Experiência</div>
          <div className="bg-black p-6 rounded-xl">✔ Equipamentos modernos</div>
          <div className="bg-black p-6 rounded-xl">✔ Atendimento rápido</div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <img
              key={i}
              src={`/images/maquina${i}.jpg`}
              className="rounded-xl hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 md:p-16 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">
          CONTATO
        </h2>

        {/* MAPA CENTRALIZADO */}
        <div className="max-w-5xl mx-auto mb-8">
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[300px] md:h-[350px] rounded-xl"
            loading="lazy"
          />
        </div>

        <div className="max-w-xl mx-auto text-left space-y-4">

          <p className="text-center">
            📍 Av. Antônio Raminelli, 857 - Cambé
          </p>

          <a href="https://wa.me/5543998061421" target="_blank" className="block hover:text-yellow-400">
            🟢 Fernando - (43) 99806-1421
          </a>

          <a href="https://wa.me/5543999520213" target="_blank" className="block hover:text-yellow-400">
            🟢 Anderson - (43) 99952-0213
          </a>

          <a href="https://wa.me/5543996281826" target="_blank" className="block hover:text-yellow-400">
            🟢 Valéria - (43) 99628-1826
          </a>

          <a
            href="https://www.instagram.com/terraplanagem.nivelar/"
            target="_blank"
            className="block hover:text-yellow-400 mt-4"
          >
            📸 @terraplanagem.nivelar
          </a>

        </div>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <a
        href={whatsapp}
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        💬
      </a>

      <footer className="text-center p-6 bg-black text-gray-400 text-sm">
        © 2026 Nivelar Terraplanagem
      </footer>

    </div>
  );
}