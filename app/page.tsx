"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Nivelar() {
  const whatsappValeria =
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
          <img src="/logo.svg" className="h-16 md:h-24" />
          <span className="text-[10px] md:text-xs text-gray-400 mt-1">
            Onde começa cada grande obra
          </span>
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

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-7xl font-bold">
            Terraplanagem de{" "}
            <span className="text-yellow-400">Alto Padrão</span>
          </h1>

          <a
            href={whatsappValeria}
            target="_blank"
            className="inline-block mt-6 bg-green-600 px-6 py-3 rounded-lg font-bold"
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
          A Nivelar Terraplanagem atua com excelência, garantindo qualidade,
          segurança e agilidade em cada projeto. Nosso compromisso é entregar
          resultados sólidos, porque acreditamos que{" "}
          <span className="text-yellow-400 font-semibold">
            onde começa cada grande obra, começa com um serviço bem feito.
          </span>
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 md:p-16 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* MAPA */}
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857+-+Cambé&output=embed"
            className="w-full h-[300px] md:h-[350px] rounded-xl"
          />

          {/* CONTATOS */}
          <div className="text-left space-y-4">

            <p>📍 Av. Antônio Raminelli, 857<br/>Parque Res. Ana Rosa</p>

            {/* WHATS CORRETO */}
            {[
              ["Fernando", "5543998061421", "(43) 99806-1421"],
              ["Anderson", "5543999520213", "(43) 99952-0213"],
              ["Valéria", "5543996281826", "(43) 99628-1826"],
            ].map(([nome, numero, label]) => (
              <a
                key={numero}
                href={`https://wa.me/${numero}`}
                target="_blank"
                className="flex items-center gap-3 hover:text-yellow-400"
              >
                {/* SVG OFICIAL WHATSAPP */}
                <svg width="20" height="20" viewBox="0 0 32 32" fill="#25D366">
                  <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.886.76 5.7 2.2 8.18L0 32l7.62-2.165a15.94 15.94 0 0 0 8.38 2.39c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.354a13.2 13.2 0 0 1-6.72-1.85l-.48-.28-4.52 1.28 1.2-4.4-.3-.46A13.2 13.2 0 1 1 16 29.75zm7.22-9.68c-.4-.2-2.36-1.16-2.72-1.3-.36-.14-.62-.2-.88.2s-1 1.3-1.22 1.56c-.22.26-.44.3-.82.1-.38-.2-1.6-.6-3.04-1.92-1.12-1-1.88-2.24-2.1-2.62-.22-.38-.02-.58.16-.76.16-.16.38-.42.56-.64.18-.22.24-.36.36-.6.12-.24.06-.44-.02-.62-.08-.18-.88-2.12-1.2-2.9-.32-.76-.64-.66-.88-.66h-.76c-.24 0-.62.1-.94.44s-1.24 1.2-1.24 2.92 1.26 3.4 1.44 3.64c.18.24 2.5 3.82 6.06 5.36.84.36 1.5.58 2.02.74.84.26 1.6.22 2.2.14.68-.1 2.36-.96 2.7-1.88.34-.92.34-1.7.24-1.88-.1-.18-.36-.28-.76-.48z"/>
                </svg>

                {nome} — {label}
              </a>
            ))}

            {/* INSTAGRAM OFICIAL */}
            <a
              href="https://www.instagram.com/terraplanagem.nivelar/"
              target="_blank"
              className="flex items-center gap-3 text-yellow-400"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                width="20"
              />
              @terraplanagem.nivelar
            </a>

          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <a
        href={whatsappValeria}
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full"
      >
        {/* ÍCONE CORRETO */}
        <svg width="24" height="24" viewBox="0 0 32 32" fill="white">
          <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.886.76 5.7 2.2 8.18L0 32l7.62-2.165a15.94 15.94 0 0 0 8.38 2.39c8.837 0 16-7.163 16-16S24.837.396 16 .396z"/>
        </svg>
      </a>

      <footer className="text-center p-6 text-gray-400">
        © 2026 Nivelar Terraplanagem
      </footer>
    </div>
  );
}