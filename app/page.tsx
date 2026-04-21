"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [rating, setRating] = useState(0);

  const heroImages = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina2.jpg",
    "/images/equipamentos/maquina3.jpg",
  ];

  const imagensPadrao = [
    "/images/projetos/projeto1.jpg",
    "/images/projetos/projeto2.jpg",
    "/images/projetos/projeto3.jpg",
    "/images/projetos/projeto4.jpg",
    "/images/projetos/projeto5.jpg",
    "/images/projetos/projeto6.jpg",
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
        <div className="flex items-center justify-between px-6 py-3">

          <div className="flex flex-col">
            <h1 className="text-3xl font-black">NIVELAR</h1>
            <span className="text-xs text-yellow-400">
              Onde começa cada grande obra
            </span>
          </div>

          <nav className="hidden md:flex gap-10 text-lg">
            <a href="#home">Início</a>
            <a href="#projetos">Projetos</a>
            <a href="#equipamentos">Equipamentos</a>
            <a href="#sobre">Sobre Nós</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="h-[55vh] pt-24 relative flex items-center justify-center">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center ${
              current === i ? "opacity-100" : "opacity-0"
            } transition`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/70" />
        <h2 className="relative text-3xl md:text-5xl font-bold text-center">
          Terraplanagem <span className="text-yellow-400">Profissional</span>
        </h2>
      </section>

      {/* GRID PADRÃO */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl mb-10">
          NOSSOS <span className="text-yellow-400">TRABALHOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {imagensPadrao.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-[240px] object-cover rounded-xl"
            />
          ))}
        </div>
      </section>

      {/* SOBRE + DEPOIMENTOS */}
      <section id="sobre" className="py-20 px-6 text-center bg-[#111]">
        <h2 className="text-3xl mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-2xl mx-auto mb-10 text-gray-300">
          A Nivelar Terraplanagem atua com excelência, garantindo que cada obra
          comece da melhor forma possível.
        </p>

        {/* DEPOIMENTOS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {["Ótimo serviço!", "Equipe profissional!", "Recomendo muito!"].map((t, i) => (
            <div key={i} className="bg-black p-6 rounded-xl border border-gray-800">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-300">{t}</p>
            </div>
          ))}
        </div>

        {/* FORM COM ESTRELAS */}
        <div className="max-w-md mx-auto">
          <h3 className="mb-4 text-yellow-400">Avalie nosso serviço</h3>

          <div className="flex justify-center gap-2 mb-4">
            {[1,2,3,4,5].map((star) => (
              <FaStar
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-2xl ${
                  rating >= star ? "text-yellow-400" : "text-gray-500"
                }`}
              />
            ))}
          </div>

          <textarea
            placeholder="Deixe sua avaliação..."
            className="w-full p-3 rounded bg-black border border-gray-700 mb-3"
          />

          <button className="bg-yellow-400 text-black px-6 py-2 rounded">
            Enviar
          </button>
        </div>
      </section>

      {/* CONTATO RESTAURADO */}
      <section id="contato" className="py-16 px-6">
        <h2 className="text-3xl text-center text-yellow-400 mb-10">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* MAPA MAIOR */}
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[500px] rounded-xl"
          />

          {/* CONTATOS */}
          <div className="flex flex-col gap-4">

            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            <a href="https://wa.me/5543998061421" className="flex items-center gap-3">
              <div className="bg-green-500 p-2 rounded-full">
                <FaWhatsapp />
              </div>
              Fernando
            </a>

            <a href="https://wa.me/5543999520213" className="flex items-center gap-3">
              <div className="bg-green-500 p-2 rounded-full">
                <FaWhatsapp />
              </div>
              Anderson
            </a>

            <a href="https://wa.me/5543996281826" className="flex items-center gap-3">
              <div className="bg-green-500 p-2 rounded-full">
                <FaWhatsapp />
              </div>
              Valéria
            </a>

            <a
              href="https://instagram.com/terraplanagem.nivelar"
              className="flex items-center gap-3"
            >
              <img src="/icons/instagram.svg" className="w-7" />
              Instagram
            </a>

          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <a
        href="https://wa.me/5543998061421"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-xl"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}