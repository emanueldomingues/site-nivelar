"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";

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
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % carousel.length);
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <main>
      {/* HEADER */}
      <header className="w-full bg-black py-4 px-8 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-black leading-none">NIVELAR</h1>
          <span className="bg-yellow-400 text-black text-xs px-2 py-1 mt-1 font-bold w-fit">
            TERRAPLANAGEM
          </span>
          <p className="text-xs text-gray-400 mt-1">
            Onde começa cada grande obra
          </p>
        </div>

        {/* MENU CENTRAL */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-sm">
          <a href="#inicio">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#equipamentos">Equipamentos</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* HERO / CAROUSEL */}
      <section id="inicio" className="relative w-full h-[70vh]">
        <Image
          src={carousel[index]}
          alt="hero"
          fill
          className="object-cover brightness-50"
        />

        <div className="absolute left-10 top-1/2 -translate-y-1/2">
          <h2 className="text-5xl font-bold">
            Terraplanagem de
            <br />
            <span className="text-yellow-400">Alto Padrão</span>
          </h2>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="px-10 py-16">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">Projetos</h2>

        <div className="grid grid-cols-3 gap-6">
          {projetos.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-[250px] overflow-hidden rounded-lg"
            >
              <Image
                src={img}
                alt="projeto"
                fill
                className="object-cover hover:scale-110 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="px-10 py-16 bg-zinc-900">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          Equipamentos
        </h2>

        <div className="grid grid-cols-5 gap-6">
          {equipamentos.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-[150px] overflow-hidden rounded-lg"
            >
              <Image src={img} alt="maq" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="px-10 py-16">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Sobre Nós
        </h2>
        <p className="max-w-2xl text-gray-300">
          Empresa especializada em terraplanagem de alto padrão, atuando em Cambé e região com qualidade, eficiência e equipamentos modernos.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="px-10 py-16">
        <h2 className="text-3xl text-yellow-400 text-center mb-10">
          CONTATO
        </h2>

        <div className="flex gap-10 items-start">
          {/* MAPA */}
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-2/3 h-[350px] rounded-lg"
          />

          {/* INFO */}
          <div className="flex flex-col gap-4 text-sm">
            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>
            <p>📞 Fernando — (43) 99806-1421</p>
            <p>📞 Anderson — (43) 99952-0213</p>
            <p>📞 Valéria — (43) 99628-1826</p>

            <a
              href="https://instagram.com/terraplanagem.nivelar"
              className="text-yellow-400 flex items-center gap-2"
            >
              <FaInstagram /> @terraplanagem.nivelar
            </a>
          </div>
        </div>
      </section>

      {/* WHATS FLUTUANTE */}
      <a
        href="https://wa.me/5543998061421"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white text-2xl shadow-lg"
      >
        <FaWhatsapp />
      </a>
    </main>
  );
}