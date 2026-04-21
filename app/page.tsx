"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [zoomImg, setZoomImg] = useState<string | null>(null);

  const heroImages = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina2.jpg",
    "/images/equipamentos/maquina3.jpg",
  ];

  const equipamentos = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina2.jpg",
    "/images/equipamentos/maquina3.jpg",
    "/images/equipamentos/maquina4.jpg",
    "/images/equipamentos/maquina5.jpg",
    "/images/equipamentos/maquina6.jpg",
    "/images/equipamentos/maquina7.jpg",
    "/images/equipamentos/maquina8.jpg",
    "/images/equipamentos/maquina9.jpg",
    "/images/equipamentos/maquina10.jpg",
  ];

  const projetos = [
    "/images/projetos/projeto1.jpg",
    "/images/projetos/projeto2.jpg",
    "/images/projetos/projeto3.jpg",
    "/images/projetos/projeto4.jpg",
    "/images/projetos/projeto5.jpg",
    "/images/projetos/projeto6.jpg",
    "/images/projetos/projeto7.jpg",
    "/images/projetos/projeto8.jpg",
    "/images/projetos/projeto9.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur z-50 border-b border-gray-800">
        <div className="w-full flex items-center justify-between px-10 py-10 relative">

          {/* LOGO */}
          <div className="flex flex-col leading-tight mt-10">
            <h1 className="text-5xl font-black tracking-wide">
              NIVELAR
            </h1>
            <span className="bg-yellow-400 text-black text-sm px-3 py-1 mt-1 font-bold w-fit">
              TERRAPLANAGEM
            </span>
            <span className="text-sm text-white mt-1">
              Onde começa cada grande obra
            </span>
          </div>

          {/* MENU */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex gap-10 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre Nós</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>

          <div className="w-[150px]" />
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="h-screen pt-44 relative flex items-center justify-center">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              current === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <h2 className="relative text-5xl font-bold text-center">
          Terraplanagem de <br />
          <span className="text-yellow-400">Alto Padrão</span>
        </h2>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projetos.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setZoomImg(img)}
              className="rounded-xl object-cover h-[260px] w-full cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="py-20 px-6 text-center bg-[#111]">
        <h2 className="text-3xl font-bold mb-12">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {equipamentos.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setZoomImg(img)}
              className="rounded-xl object-cover h-[140px] w-full cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 px-6 text-center bg-[#0d0d0d]">
        <h2 className="text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300">
          A Nivelar Terraplanagem nasce com o propósito de entregar excelência desde o início.
          Nosso compromisso é preparar cada terreno com precisão, garantindo a base perfeita
          para qualquer obra.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 px-6 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* MAPA */}
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[500px] rounded-xl"
          />

          {/* CONTATOS */}
          <div className="space-y-5 text-base">

            <p className="text-gray-300">📍 Av. Antônio Raminelli, 857 - Cambé</p>

            {[
              ["Fernando", "5543998061421"],
              ["Anderson", "5543999520213"],
              ["Valéria", "5543996281826"],
            ].map(([nome, numero]) => (
              <a
                key={numero}
                href={`https://wa.me/${numero}`}
                target="_blank"
                className="flex items-center gap-3 hover:text-yellow-400 transition"
              >
                <div className="bg-green-500 p-2 rounded-full text-white text-lg">
                  <FaWhatsapp />
                </div>
                {nome}
              </a>
            ))}

            {/* INSTAGRAM SVG ORIGINAL */}
            <a
              href="https://instagram.com/terraplanagem.nivelar"
              target="_blank"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <img src="/icons/instagram.svg" className="w-6 h-6" />
              @terraplanagem.nivelar
            </a>

          </div>
        </div>
      </section>

      {/* ZOOM */}
      {zoomImg && (
        <div
          onClick={() => setZoomImg(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <img src={zoomImg} className="max-h-[90%] max-w-[90%] rounded-lg" />
        </div>
      )}

      {/* BOTÃO WHATS */}
      <a
        href="https://wa.me/5543998061421"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white text-2xl shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}