"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Nivelar() {
  const whatsappPrincipal =
    "https://wa.me/5543996281826?text=Olá, quero orçamento de terraplanagem";

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
      <header className="flex items-center justify-between px-4 md:px-16 py-4 bg-black/80 backdrop-blur-xl border-b border-gray-800 fixed w-full z-50 shadow-lg">
        <div className="flex flex-col">
          <img src="/logo.svg" className="h-16 md:h-24 object-contain" />
        </div>

        <nav className="hidden md:flex gap-12 text-sm font-medium">
          <a href="#home" className="hover:text-yellow-400">Início</a>
          <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
          <a href="#galeria" className="hover:text-yellow-400">Projetos</a>
          <a href="#sobre" className="hover:text-yellow-400">Sobre Nós</a>
          <a href="#contato" className="hover:text-yellow-400">Contato</a>
        </nav>

        <div className="w-[100px]" />
      </header>

      {/* HERO */}
      <section id="home" className="scroll-mt-24 h-screen flex items-center px-6 md:px-16 relative">
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

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-7xl font-extrabold">
            Terraplanagem de
            <span className="text-yellow-400"> Alto Padrão</span>
          </h1>

          <a
            href={whatsappPrincipal}
            target="_blank"
            className="mt-6 inline-block bg-green-600 px-6 py-4 rounded-lg font-bold hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="scroll-mt-24 p-16 bg-[#111] text-center">
        <h2 className="text-4xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">DIFERENCIAIS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black p-8 rounded-xl">
            <h3 className="text-yellow-400">✔ Experiência</h3>
            <p>Mais de 10 anos de atuação</p>
          </div>

          <div className="bg-black p-8 rounded-xl">
            <h3 className="text-yellow-400">✔ Equipamentos</h3>
            <p>Máquinas modernas</p>
          </div>

          <div className="bg-black p-8 rounded-xl">
            <h3 className="text-yellow-400">✔ Rapidez</h3>
            <p>Atendimento ágil</p>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="scroll-mt-24 p-16 text-center">
        <h2 className="text-4xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <img
              key={i}
              src={`/images/maquina${i}.jpg`}
              className="rounded-xl hover:scale-110 transition"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="scroll-mt-24 p-16 bg-[#111]">
        <h2 className="text-4xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="text-gray-300 max-w-3xl">
          A Nivelar Terraplanagem atua com excelência no setor, entregando
          serviços com precisão, segurança e compromisso. Nosso objetivo é
          transformar terrenos em bases sólidas para grandes obras,
          sempre com qualidade e responsabilidade.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-24 p-16 bg-black">
        <h2 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857&output=embed"
            className="w-full h-[350px] rounded-xl"
          />

          <div className="space-y-4 text-sm md:text-base">

            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            {contatos.map((c, i) => (
              <a
                key={i}
                href={`https://wa.me/${c.numero}`}
                target="_blank"
                className="flex items-center gap-3 hover:text-yellow-400"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  className="w-5 h-5"
                />
                {c.nome} — {c.label}
              </a>
            ))}

            <a
              href="https://www.instagram.com/terraplanagem.nivelar/"
              target="_blank"
              className="flex items-center gap-3 text-yellow-400"
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

      {/* FOOTER */}
      <footer className="text-center p-6 text-gray-400 text-sm">
        © 2026 Nivelar Terraplanagem
      </footer>

      {/* BOTÃO FLUTUANTE */}
      <a
        href={whatsappPrincipal}
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className="w-6 h-6"
        />
      </a>

    </div>
  );
}