"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const images = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina2.jpg",
    "/images/equipamentos/maquina3.jpg",
  ];

  const equipamentos = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina2.jpg",
    "/images/equipamentos/maquina3.jpg",
    "/images/equipamentos/maquina4.jpg",
  ];

  const projetos = [
    "/images/projetos/projeto1.jpg",
    "/images/projetos/projeto2.jpg",
    "/images/projetos/projeto3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 md:px-16 py-4 bg-black fixed w-full z-50 border-b border-gray-800">
        <img src="/logo.svg" className="h-14" />

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#home" className="hover:text-yellow-400">Início</a>
          <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
          <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
          <a href="#sobre" className="hover:text-yellow-400">Sobre</a>
          <a href="#contato" className="hover:text-yellow-400">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="h-screen flex items-center px-6 md:px-16 relative">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              current === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>

          <p className="mt-4 text-yellow-400">
            Onde começa cada grande obra
          </p>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projetos.map((img, i) => (
            <img key={i} src={img} className="rounded-xl h-52 w-full object-cover" />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="p-10 md:p-16 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {equipamentos.map((img, i) => (
            <img key={i} src={img} className="rounded-xl h-40 object-cover" />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300">
          A Nivelar Terraplanagem atua com excelência, entregando precisão,
          qualidade e confiança em cada projeto.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 md:p-16 bg-black">
        <h2 className="text-3xl text-yellow-400 text-center mb-10">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <iframe
            src="https://www.google.com/maps?q=Cambé&output=embed"
            className="w-full h-[250px] rounded-xl"
          />

          <div className="space-y-4 text-sm">
            <p>📍 Cambé - PR</p>

            <a href="https://wa.me/5543998061421" className="flex gap-2 items-center">
              <img src="/icons/whatsapp.svg" className="w-5" />
              Fernando
            </a>

            <a href="https://instagram.com" className="flex gap-2 items-center text-yellow-400">
              <img src="/icons/instagram.svg" className="w-5" />
              Instagram
            </a>
          </div>

        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/5543996281826"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full"
      >
        <img src="/icons/whatsapp.svg" className="w-5" />
      </a>

      {/* FOOTER */}
      <footer className="text-center p-6 text-gray-400">
        © 2026 Nivelar Terraplanagem
      </footer>

    </div>
  );
}