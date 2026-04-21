"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const carousel = [
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

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % carousel.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white">

      {/* HEADER */}
      <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between relative">

        {/* LOGO */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-5xl font-black leading-none">
            NIVELAR
          </h1>
          <span className="bg-yellow-400 text-black text-xs md:text-sm px-2 md:px-3 py-1 mt-1 font-bold w-fit">
            TERRAPLANAGEM
          </span>
          <p className="text-xs md:text-sm text-gray-400 mt-1">
            Onde começa cada grande obra
          </p>
        </div>

        {/* MENU */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-8 text-sm">
          <a href="#inicio" className="hover:text-yellow-400 transition">Início</a>
          <a href="#projetos" className="hover:text-yellow-400 transition">Projetos</a>
          <a href="#equipamentos" className="hover:text-yellow-400 transition">Equipamentos</a>
          <a href="#sobre" className="hover:text-yellow-400 transition">Sobre Nós</a>
          <a href="#contato" className="hover:text-yellow-400 transition">Contato</a>
        </nav>
      </header>

      {/* CAROUSEL */}
      <section id="inicio" className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src={carousel[index]}
          alt="hero"
          fill
          className="object-cover brightness-50"
        />

        <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2">
          <h2 className="text-2xl md:text-5xl font-bold">
            Terraplanagem de
            <br />
            <span className="text-yellow-400">Alto Padrão</span>
          </h2>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="px-6 md:px-10 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-10">
          PROJETOS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projetos.map((img, i) => (
            <div key={i} className="relative w-full h-[220px] md:h-[250px] overflow-hidden rounded-lg">
              <Image src={img} alt="projeto" fill className="object-cover hover:scale-110 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="px-6 md:px-10 py-16 bg-zinc-900 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-10">
          EQUIPAMENTOS
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {equipamentos.map((img, i) => (
            <div key={i} className="relative w-full h-[120px] md:h-[150px] overflow-hidden rounded-lg">
              <Image src={img} alt="maq" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="px-6 md:px-10 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
          SOBRE NÓS
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base">
          Empresa especializada em terraplanagem de alto padrão, atuando com excelência,
          equipamentos modernos e compromisso com cada projeto.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 text-center mb-10">
          CONTATO
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">

          {/* MAPA */}
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full md:w-[650px] h-[300px] md:h-[400px] rounded-lg"
          />

          {/* CONTATOS */}
          <div className="flex flex-col gap-5 text-sm md:text-base">

            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            <a href="https://wa.me/5543998061421" target="_blank" className="flex items-center gap-3 hover:text-yellow-400 transition">
              <div className="bg-green-500 p-2 rounded-full text-white">
                <FaWhatsapp />
              </div>
              Fernando — (43) 99806-1421
            </a>

            <a href="https://wa.me/5543999520213" target="_blank" className="flex items-center gap-3 hover:text-yellow-400 transition">
              <div className="bg-green-500 p-2 rounded-full text-white">
                <FaWhatsapp />
              </div>
              Anderson — (43) 99952-0213
            </a>

            <a href="https://wa.me/5543996281826" target="_blank" className="flex items-center gap-3 hover:text-yellow-400 transition">
              <div className="bg-green-500 p-2 rounded-full text-white">
                <FaWhatsapp />
              </div>
              Valéria — (43) 99628-1826
            </a>

            {/* INSTAGRAM SEM FUNDO */}
            <a
              href="https://instagram.com/terraplanagem.nivelar"
              target="_blank"
              className="flex items-center gap-3 text-white hover:text-yellow-400 transition"
            >
              <img src="/icons/instagram.svg" className="w-5 h-5" />
              @terraplanagem.nivelar
            </a>

          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <a
        href="https://wa.me/5543998061421"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white text-2xl shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>

    </main>
  );
}