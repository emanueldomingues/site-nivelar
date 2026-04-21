"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
  ];

  const projetos = [
    "/images/projetos/projeto1.jpg",
    "/images/projetos/projeto2.jpg",
    "/images/projetos/projeto3.jpg",
    "/images/projetos/projeto4.jpg",
    "/images/projetos/projeto5.jpg",
  ];

  const depoimentos = [
    {
      nome: "Carlos Silva",
      texto: "Serviço impecável, equipe extremamente profissional. Recomendo!",
    },
    {
      nome: "Marcos Oliveira",
      texto: "Equipamentos modernos e entrega rápida. Superou expectativas.",
    },
    {
      nome: "Fernanda Costa",
      texto: "Atendimento excelente e qualidade no serviço. Muito confiável.",
    },
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
      <header className="fixed top-0 w-full bg-black/95 z-50 border-b border-gray-800">
        <div className="flex items-center justify-between px-4 md:px-10 py-3 relative">

          <div className="flex flex-col">
            <h1 className="text-2xl md:text-4xl font-black">NIVELAR</h1>
            <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 mt-1 font-bold w-fit">
              TERRAPLANAGEM
            </span>
            <span className="text-xs mt-1">
              Onde começa cada grande obra
            </span>
          </div>

          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10">
            <a href="#home">Início</a>
            <a href="#projetos">Projetos</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#equipamentos">Equipamentos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-black">
            <a href="#home">Início</a>
            <a href="#projetos">Projetos</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#equipamentos">Equipamentos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="h-[60vh] pt-24 relative flex items-center justify-center">
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
        <h2 className="relative text-3xl md:text-5xl font-bold text-center">
          Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
        </h2>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {projetos.map((img, i) => (
            <img key={i} src={img} className="rounded-lg h-[240px] object-cover" />
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-16 bg-[#111] text-center">
        <h2 className="text-2xl md:text-3xl mb-10">
          O QUE NOSSOS <span className="text-yellow-400">CLIENTES DIZEM</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {depoimentos.map((dep, i) => (
            <div key={i} className="bg-black p-6 rounded-xl border border-gray-800">
              
              <div className="flex justify-center mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-300 mb-4">"{dep.texto}"</p>

              <span className="font-semibold text-white">{dep.nome}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl mb-10">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {equipamentos.map((img, i) => (
            <img key={i} src={img} className="rounded-lg h-[240px] object-cover" />
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-16 text-center">
        <h2 className="text-2xl text-yellow-400 mb-6">CONTATO</h2>

        <a
          href="https://wa.me/5543998061421"
          className="bg-green-500 px-6 py-3 rounded-full inline-flex items-center gap-2"
        >
          <FaWhatsapp /> Falar no WhatsApp
        </a>
      </section>

      {/* BOTÃO FIXO */}
      <a
        href="https://wa.me/5543998061421"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full text-white"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}