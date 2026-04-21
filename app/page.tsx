"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  const [rating, setRating] = useState(0);

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
    <div className="bg-black text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur z-50 border-b border-gray-800">
        <div className="flex items-center justify-between px-4 md:px-10 py-3 relative">

          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl md:text-4xl font-black">NIVELAR</h1>
            <span className="bg-yellow-400 text-black text-[10px] md:text-xs px-2 py-0.5 mt-1 font-bold w-fit">
              TERRAPLANAGEM
            </span>
            <span className="text-[10px] md:text-xs mt-1">
              Onde começa cada grande obra
            </span>
          </div>

          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-12 text-base font-semibold">
            <a href="#home" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre Nós</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="h-[60vh] pt-28 relative flex items-center justify-center">
        {heroImages.map((img, i) => (
          <div key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              current === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/70" />
        <h2 className="relative text-2xl md:text-5xl font-bold text-center px-4">
          Terraplanagem de <br />
          <span className="text-yellow-400">Alto Padrão</span>
        </h2>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projetos.map((img, i) => (
            <img key={i}
              src={img}
              onClick={() => setZoomImg(img)}
              className="rounded-xl object-cover h-[240px] w-full cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="py-16 px-4 text-center bg-[#111]">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {equipamentos.map((img, i) => (
            <img key={i}
              src={img}
              onClick={() => setZoomImg(img)}
              className="rounded-xl object-cover h-[240px] w-full cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-16 px-4 text-center bg-[#0d0d0d]">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10 leading-relaxed">
          Na Nivelar Terraplanagem, acreditamos que toda grande obra começa com uma base sólida e bem executada...
        </p>

        {/* 🔥 NOVA SEÇÃO DE VALORES */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg font-bold mb-3">Ética</h3>
            <p className="text-gray-300 text-sm">
              Atuamos com transparência, honestidade e respeito em todas as etapas,
              garantindo confiança total em cada serviço realizado.
            </p>
          </div>

          <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg font-bold mb-3">Compromisso</h3>
            <p className="text-gray-300 text-sm">
              Cumprimos prazos e entregamos resultados com responsabilidade,
              mantendo sempre o padrão de qualidade que nossos clientes esperam.
            </p>
          </div>

          <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg font-bold mb-3">Qualidade</h3>
            <p className="text-gray-300 text-sm">
              Utilizamos equipamentos modernos e mão de obra qualificada,
              garantindo precisão e excelência em cada projeto.
            </p>
          </div>

        </div>
      </section>

      {/* CONTATO, ZOOM E WHATS permanecem IGUAL (não alterados) */}

    </div>
  );
}