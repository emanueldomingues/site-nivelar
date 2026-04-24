"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaStar, FaBullseye, FaEye, FaGem } from "react-icons/fa";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  const [rating, setRating] = useState(0);

  const heroImages = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina2.jpg",
    "/images/equipamentos/maquina3.jpg",
  ];

  const frases = [
    "Ética e transparência em cada projeto",
    "Compromisso com prazos e qualidade",
    "Valores sólidos para grandes obras",
  ];

  const equipamentos = Array.from({ length: 10 }, (_, i) => `/images/equipamentos/maquina${i + 1}.jpg`);
  const projetos = Array.from({ length: 9 }, (_, i) => `/images/projetos/projeto${i + 1}.jpg`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white font-sans">

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/95 z-50 border-b border-gray-800">
        <div className="flex items-center justify-between px-6 py-4 relative">

          <div className="flex flex-col">
            <img src="/logo.svg" className="w-64 md:w-80" />
            <span className="text-sm text-white">
              Onde começa cada grande obra
            </span>
          </div>

          <nav className="hidden md:flex gap-10 text-lg font-medium absolute left-1/2 -translate-x-1/2">
            <a href="#home" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre</a>
            <a href="#avaliacoes" className="hover:text-yellow-400">Avaliações</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section id="home" className="h-[65vh] pt-28 relative flex items-center justify-center overflow-hidden">
        {heroImages.map((img, i) => (
          <div key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              current === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />

        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Terraplanagem de{" "}
            <span className="text-yellow-400">Alto Padrão</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            {frases[current]}
          </p>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-white">Projetos</span>{" "}
          <span className="text-yellow-400">Realizados</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {projetos.map((img, i) => (
            <img key={i}
              src={img}
              onClick={() => setZoomImg(img)}
              className="h-[240px] w-full object-cover rounded-xl hover:scale-105 cursor-pointer transition"
            />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="py-16 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-white">Nossos</span>{" "}
          <span className="text-yellow-400">Equipamentos</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {equipamentos.map((img, i) => (
            <img key={i}
              src={img}
              onClick={() => setZoomImg(img)}
              className="h-[240px] w-full object-cover rounded-xl hover:scale-105 cursor-pointer transition"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-white">Sobre</span>{" "}
          <span className="text-yellow-400">Nós</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Na Nivelar Terraplanagem, acreditamos que toda grande obra começa com uma base sólida e bem executada.
          Nosso trabalho vai além da movimentação de terra: preparamos o terreno para que projetos se tornem realidade com segurança e precisão.
          <br /><br />
          Atuamos com responsabilidade, tecnologia e compromisso, garantindo qualidade em cada etapa do processo.
          Nosso objetivo é superar expectativas e construir relações de confiança com nossos clientes.
          <br /><br />
          <span className="text-white font-semibold">
            Onde começa cada grande obra.
          </span>
        </p>

        {/* 🔥 ADICIONADO (SEM ALTERAR NADA) */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">

          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 flex gap-4 items-start hover:border-yellow-400 transition">
            <div className="text-yellow-400 text-2xl">
              <FaBullseye />
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-1">Missão</h3>
              <p className="text-gray-300 text-sm">
                Transformar terrenos em bases sólidas com qualidade e compromisso.
              </p>
            </div>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 flex gap-4 items-start hover:border-yellow-400 transition">
            <div className="text-yellow-400 text-2xl">
              <FaEye />
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-1">Visão</h3>
              <p className="text-gray-300 text-sm">
                Ser referência em terraplanagem com excelência e confiança.
              </p>
            </div>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 flex gap-4 items-start hover:border-yellow-400 transition">
            <div className="text-yellow-400 text-2xl">
              <FaGem />
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-1">Valores</h3>
              <p className="text-gray-300 text-sm">
                Ética, compromisso, qualidade e respeito ao cliente.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* RESTO DO SEU CÓDIGO CONTINUA IGUAL (NÃO ALTERADO) */}