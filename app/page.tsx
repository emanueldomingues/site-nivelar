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
    <div className="bg-[#0b0b0b] text-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-4 md:px-16 py-4 bg-black/80 backdrop-blur-xl border-b border-gray-800 fixed w-full z-50">

        <div className="flex flex-col">
          <img src="/logo.svg" className="h-16 md:h-24" />
          <span className="text-xs text-gray-400">
            Onde começa cada grande obra
          </span>
        </div>

        <nav className="hidden md:flex gap-10 text-sm">
          <a href="#home">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Ver Projetos</a>
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
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-6xl font-bold">
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>

          <a
            href={whatsapp}
            target="_blank"
            className="inline-block mt-6 bg-green-600 px-6 py-3 rounded-lg font-bold"
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
          Na Nivelar Terraplanagem, acreditamos que toda grande obra começa com uma base sólida.
          Trabalhamos com precisão, responsabilidade e compromisso para entregar serviços de alto padrão.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">DIFERENCIAIS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black p-6 rounded-xl">✔ Experiência</div>
          <div className="bg-black p-6 rounded-xl">✔ Equipamentos</div>
          <div className="bg-black p-6 rounded-xl">✔ Rapidez</div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <img key={i} src={`/images/maquina${i}.jpg`} className="rounded-xl"/>
          ))}
        </div>
      </section>

      {/* CONTATO LADO A LADO */}
      <section id="contato" className="p-10 md:p-16 bg-black">
        <h2 className="text-3xl text-center font-bold mb-10 text-yellow-400">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* MAPA */}
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[300px] md:h-[350px] rounded-xl"
          />

          {/* CONTATOS */}
          <div className="space-y-5">

            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            {/* WHATS REAL */}
            <a href="https://wa.me/5543998061421" target="_blank" className="flex items-center gap-3 hover:text-yellow-400">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-5 h-5"/>
              Fernando - (43) 99806-1421
            </a>

            <a href="https://wa.me/5543999520213" target="_blank" className="flex items-center gap-3 hover:text-yellow-400">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-5 h-5"/>
              Anderson - (43) 99952-0213
            </a>

            <a href="https://wa.me/5543996281826" target="_blank" className="flex items-center gap-3 hover:text-yellow-400">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-5 h-5"/>
              Valéria - (43) 99628-1826
            </a>

            {/* INSTAGRAM REAL */}
            <a href="https://www.instagram.com/terraplanagem.nivelar/" target="_blank" className="flex items-center gap-3 hover:text-yellow-400 mt-4">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-5 h-5"/>
              @terraplanagem.nivelar
            </a>

          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <a
        href={whatsapp}
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg"
      >
        💬
      </a>

    </div>
  );
}