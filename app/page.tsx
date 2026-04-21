"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [index, setIndex] = useState(0);

  const imagens = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-black z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO ESQUERDA */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold leading-none">NIVELAR</h1>
            <div className="bg-yellow-400 text-black px-2 text-sm w-fit mt-1">
              TERRAPLANAGEM
            </div>
            <span className="text-xs text-gray-400 mt-1">
              Onde começa cada grande obra
            </span>
          </div>

          {/* MENU CENTRAL */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-sm">
            <a href="#inicio" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre Nós</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>

        </div>
      </header>

      {/* HERO / CARROSSEL */}
      <section id="inicio" className="h-[70vh] mt-24 relative">
        <Image
          src={imagens[index]}
          alt="banner"
          fill
          className="object-cover opacity-40"
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
      <section id="projetos" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl text-yellow-400 mb-10">Projetos</h2>

        <div className="grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <img
              key={i}
              src={`/images/projetos/projeto${i + 1}.jpg`}
              className="w-full h-60 object-cover hover:scale-105 transition cursor-pointer"
            />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl text-yellow-400 mb-10">Equipamentos</h2>

        <div className="grid grid-cols-5 gap-4">
          {[...Array(10)].map((_, i) => (
            <img
              key={i}
              src={`/images/equipamentos/maquina${i + 1}.jpg`}
              className="w-full h-40 object-cover hover:scale-105 transition cursor-pointer"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl text-yellow-400 mb-6">Sobre Nós</h2>
        <p className="text-gray-300">
          A Nivelar Terraplanagem atua com excelência em serviços de
          terraplanagem, oferecendo soluções modernas, equipamentos de ponta
          e uma equipe altamente qualificada para garantir qualidade em cada obra.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl text-yellow-400 text-center mb-10">CONTATO</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* MAPA ESQUERDA */}
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857+-+Cambé&output=embed"
            className="w-full h-80 rounded-lg"
          />

          {/* INFO DIREITA */}
          <div className="space-y-4 text-lg">
            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>
            <p>📞 Fernando — (43) 99806-1421</p>
            <p>📞 Anderson — (43) 99952-0213</p>
            <p>📞 Valéria — (43) 99628-1826</p>

            <a
              href="https://instagram.com/terraplanagem.nivelar"
              target="_blank"
              className="text-yellow-400 hover:text-white"
            >
              📷 @terraplanagem.nivelar
            </a>
          </div>

        </div>
      </section>

      {/* BOTÃO WHATSAPP */}
      <a
        href="https://wa.me/5543998061421"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white text-2xl hover:scale-110 transition"
      >
        💬
      </a>

    </main>
  );
}