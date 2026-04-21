"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";

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
    <main>

      {/* HEADER */}
      <header className="w-full bg-black py-4 px-8 flex items-center justify-between relative">
        
        {/* LOGO */}
        <div className="flex flex-col ml-2">
          <h1 className="text-5xl font-black leading-none tracking-wide">
            NIVELAR
          </h1>
          <span className="bg-yellow-400 text-black text-sm px-3 py-1 mt-1 font-bold w-fit">
            TERRAPLANAGEM
          </span>
          <p className="text-sm text-gray-400 mt-1">
            Onde começa cada grande obra
          </p>
        </div>

        {/* MENU */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-sm">
          <a href="#inicio" className="hover:text-yellow-400">Início</a>
          <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
          <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
          <a href="#sobre" className="hover:text-yellow-400">Sobre Nós</a>
          <a href="#contato" className="hover:text-yellow-400">Contato</a>
        </nav>
      </header>

      {/* CAROUSEL */}
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
      <section id="projetos" className="px-10 py-16 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          PROJETOS
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {projetos.map((img, i) => (
            <div key={i} className="relative w-full h-[250px] overflow-hidden rounded-lg">
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
      <section id="equipamentos" className="px-10 py-16 bg-zinc-900 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          EQUIPAMENTOS
        </h2>

        <div className="grid grid-cols-5 gap-6">
          {equipamentos.map((img, i) => (
            <div key={i} className="relative w-full h-[150px] overflow-hidden rounded-lg">
              <Image src={img} alt="maq" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="px-10 py-16 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          SOBRE NÓS
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Empresa especializada em terraplanagem de alto padrão, atuando com excelência,
          equipamentos modernos e compromisso com cada projeto.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="px-10 py-16">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
          CONTATO
        </h2>

        <div className="flex gap-12 items-center justify-center">

          {/* MAPA */}
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-[600px] h-[350px] rounded-lg"
          />

          {/* CONTATOS */}
          <div className="flex flex-col gap-5 text-base">

            <p className="mb-2">📍 Av. Antônio Raminelli, 857 - Cambé</p>

            {/* WHATS */}
            {[
              { nome: "Fernando", num: "5543998061421", label: "(43) 99806-1421" },
              { nome: "Anderson", num: "5543999520213", label: "(43) 99952-0213" },
              { nome: "Valéria", num: "5543996281826", label: "(43) 99628-1826" },
            ].map((c, i) => (
              <a
                key={i}
                href={`https://wa.me/${c.num}`}
                target="_blank"
                className="flex items-center gap-3 group"
              >
                <div className="bg-green-500 p-3 rounded-full transition group-hover:bg-yellow-400">
                  <img src="/icons/whatsapp.svg" className="w-5" />
                </div>

                <span className="group-hover:text-yellow-400 transition">
                  {c.nome} — {c.label}
                </span>
              </a>
            ))}

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/terraplanagem.nivelar"
              target="_blank"
              className="flex items-center gap-3 text-yellow-400 hover:opacity-80"
            >
              <FaInstagram size={20} />
              @terraplanagem.nivelar
            </a>

          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <a
        href="https://wa.me/5543998061421"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <img src="/icons/whatsapp.svg" className="w-6" />
      </a>

    </main>
  );
}