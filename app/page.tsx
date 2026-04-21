"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const imagensCarousel = [
  "/images/maquina1.jpg",
  "/images/maquina2.jpg",
  "/images/maquina3.jpg",
];

const equipamentos = [
  "maquina1.jpg","maquina2.jpg","maquina3.jpg","maquina4.jpg","maquina5.jpg",
  "maquina6.jpg","maquina7.jpg","maquina8.jpg","maquina9.jpg","maquina10.jpg"
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
      setIndex((prev) => (prev + 1) % imagensCarousel.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-10 py-6 bg-black">
        
        {/* LOGO */}
        <div className="flex flex-col">
          <h1 className="text-5xl font-extrabold leading-none">NIVELAR</h1>
          <span className="bg-yellow-400 text-black px-3 py-1 text-sm font-bold mt-1 w-fit">
            TERRAPLANAGEM
          </span>
          <span className="text-gray-400 text-sm mt-1">
            Onde começa cada grande obra
          </span>
        </div>

        {/* MENU CENTRAL */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 text-lg">
          <a href="#inicio" className="hover:text-yellow-400">Início</a>
          <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
          <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
          <a href="#sobre" className="hover:text-yellow-400">Sobre Nós</a>
          <a href="#contato" className="hover:text-yellow-400">Contato</a>
        </nav>
      </header>

      {/* CAROUSEL */}
      <section id="inicio" className="relative h-[70vh]">
        <Image
          src={imagensCarousel[index]}
          alt="slide"
          fill
          className="object-cover opacity-60"
        />

        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h2 className="text-5xl font-bold">
            Terraplanagem de <br />
            <span className="text-yellow-400">Alto Padrão</span>
          </h2>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-20 px-10">
        <h2 className="text-3xl text-yellow-400 mb-10 text-center">PROJETOS</h2>

        <div className="grid grid-cols-3 gap-6">
          {projetos.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="projeto"
              width={400}
              height={300}
              className="rounded-lg object-cover hover:scale-105 transition cursor-pointer"
            />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="py-20 px-10 bg-zinc-900">
        <h2 className="text-3xl text-yellow-400 mb-10 text-center">EQUIPAMENTOS</h2>

        <div className="grid grid-cols-5 gap-6">
          {equipamentos.map((img, i) => (
            <Image
              key={i}
              src={`/images/equipamentos/${img}`}
              alt="equipamento"
              width={300}
              height={200}
              className="rounded-lg object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 px-10 text-center">
        <h2 className="text-3xl text-yellow-400 mb-6">SOBRE NÓS</h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          Somos especialistas em terraplanagem de alto padrão, oferecendo soluções completas
          com equipamentos modernos e equipe qualificada.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 px-10">
        <h2 className="text-3xl text-yellow-400 mb-10 text-center">CONTATO</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857+-+Cambé&output=embed"
            className="w-full h-[350px] rounded-lg"
          />

          <div className="space-y-4 text-lg">
            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>
            <p className="flex items-center gap-2 text-green-400">
              <FaWhatsapp /> (43) 99806-1421
            </p>
            <p className="flex items-center gap-2 text-green-400">
              <FaWhatsapp /> (43) 99952-0213
            </p>
            <p className="flex items-center gap-2 text-yellow-400">
              <FaInstagram /> @terraplanagem.nivelar
            </p>
          </div>
        </div>
      </section>

      {/* WHATS FLUTUANTE */}
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