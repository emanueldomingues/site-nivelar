"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
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

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl">
            ☰
          </button>
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

      {/* SOBRE + DEPOIMENTOS + FORM */}
      <section id="sobre" className="py-16 px-4 text-center bg-[#0d0d0d]">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          A Nivelar Terraplanagem atua com excelência, garantindo que cada obra comece da melhor forma possível.
        </p>

        {/* DEPOIMENTOS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {[
            ["João Martins", "Serviço impecável, equipe extremamente profissional."],
            ["Ricardo Almeida", "Equipamentos modernos e entrega rápida."],
            ["Patrícia Souza", "Qualidade excelente, recomendo totalmente."],
          ].map(([nome, texto], i) => (
            <div key={i} className="bg-black p-6 rounded-xl border border-gray-800">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-300 mb-2">{texto}</p>
              <span className="text-sm text-gray-500">— {nome}</span>
            </div>
          ))}
        </div>

        {/* FORM AVALIAÇÃO */}
        <div className="max-w-md mx-auto">
          <h3 className="text-yellow-400 mb-4">Avalie nosso serviço</h3>

          <div className="flex justify-center gap-2 mb-4">
            {[1,2,3,4,5].map((star) => (
              <FaStar key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-2xl ${
                  rating >= star ? "text-yellow-400" : "text-gray-500"
                }`}
              />
            ))}
          </div>

          <input className="w-full p-3 mb-3 rounded bg-black border border-gray-700" placeholder="Seu nome" />
          <textarea className="w-full p-3 mb-3 rounded bg-black border border-gray-700" placeholder="Sua avaliação" />

          <button className="bg-yellow-400 text-black px-6 py-2 rounded">
            Enviar
          </button>
        </div>
      </section>

      {/* CONTATO (FONTE CORRIGIDA SEM QUEBRAR NADA) */}
      <section id="contato" className="py-16 px-4 text-base md:text-lg font-medium">
        <h2 className="text-2xl md:text-3xl text-yellow-400 text-center mb-10 font-bold">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[500px] rounded-xl"
          />

          <div className="flex flex-col gap-5 justify-center">

            <p className="text-gray-300">
              📍 Av. Antônio Raminelli, 857 - Cambé
            </p>

            {[
              ["Fernando", "5543998061421"],
              ["Anderson", "5543999520213"],
              ["Valéria", "5543996281826"],
            ].map(([nome, numero]) => (
              <a key={numero}
                href={`https://wa.me/${numero}`}
                className="flex items-center gap-3 hover:text-yellow-400 transition"
              >
                <div className="bg-green-500 p-2 rounded-full text-white">
                  <FaWhatsapp />
                </div>
                {nome}
              </a>
            ))}

            <a href="https://instagram.com/terraplanagem.nivelar"
              className="flex items-center gap-3 hover:text-yellow-400">
              <img src="/icons/instagram.svg" className="w-7 h-7" />
              @terraplanagem.nivelar
            </a>

          </div>
        </div>
      </section>

      {/* ZOOM */}
      {zoomImg && (
        <div onClick={() => setZoomImg(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <img src={zoomImg} className="max-h-[90%]" />
        </div>
      )}

      {/* WHATS */}
      <a href="https://wa.me/5543998061421"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full text-white text-2xl shadow-lg hover:scale-110 transition">
        <FaWhatsapp />
      </a>

    </div>
  );
}