"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Nivelar() {

  const whatsappFlutuante =
    "https://wa.me/5543996281826?text=Olá, quero orçamento de terraplanagem";

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
      <header className="flex items-center justify-between px-4 md:px-16 py-4 bg-black/80 backdrop-blur-xl border-b border-gray-800 fixed w-full z-50">

        <img src="/logo.svg" className="h-16 md:h-24" />

        <nav className="hidden md:flex gap-10 text-sm">
          <a href="#home">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#equipamentos">Equipamentos</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="w-[100px]" />
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

        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="scroll-mt-24 p-10 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projetos.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img src={img} className="w-full h-[250px] object-cover hover:scale-110 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="p-10 md:p-16 text-center bg-[#111]">
        <h2 className="text-3xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {equipamentos.map((img, i) => (
            <img key={i} src={img} className="rounded-xl hover:scale-110 transition" />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300">
          A Nivelar Terraplanagem atua com excelência no setor, entregando serviços com precisão,
          segurança e compromisso. Nosso objetivo é transformar terrenos em bases sólidas para grandes obras.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-black p-6 rounded-xl">
            <h3 className="text-yellow-400">✔ Experiência</h3>
            <p>Mais de 10 anos no mercado</p>
          </div>
          <div className="bg-black p-6 rounded-xl">
            <h3 className="text-yellow-400">✔ Qualidade</h3>
            <p>Alto padrão em cada projeto</p>
          </div>
          <div className="bg-black p-6 rounded-xl">
            <h3 className="text-yellow-400">✔ Compromisso</h3>
            <p>Prazo e confiança garantidos</p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 md:p-16 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">CONTATO</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[300px] rounded-xl"
          />

          <div className="space-y-4">

            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            <a href="https://wa.me/5543998061421" target="_blank" className="flex gap-2 items-center">
              <img src="/icons/whatsapp.svg" className="w-5" /> Fernando
            </a>

            <a href="https://wa.me/5543999520213" target="_blank" className="flex gap-2 items-center">
              <img src="/icons/whatsapp.svg" className="w-5" /> Anderson
            </a>

            <a href="https://wa.me/5543996281826" target="_blank" className="flex gap-2 items-center">
              <img src="/icons/whatsapp.svg" className="w-5" /> Valéria
            </a>

            <a href="https://instagram.com/terraplanagem.nivelar" target="_blank" className="flex gap-2 items-center text-yellow-400">
              <img src="/icons/instagram.svg" className="w-5" /> @terraplanagem.nivelar
            </a>

          </div>
        </div>
      </section>

      {/* FLOAT */}
      <a href={whatsappFlutuante} target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full">
        <img src="/icons/whatsapp.svg" className="w-6" />
      </a>

      <footer className="text-center p-6 text-gray-400">
        © 2026 Nivelar Terraplanagem
      </footer>

    </div>
  );
}