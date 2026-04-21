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
            <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 mt-1 font-bold w-fit">
              TERRAPLANAGEM
            </span>
            <span className="text-xs mt-1 text-white">
              Onde começa cada grande obra
            </span>
          </div>

          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-12 text-lg font-semibold">
            <a href="#home" className="hover:text-yellow-400 transition">Início</a>
            <a href="#projetos" className="hover:text-yellow-400 transition">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400 transition">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400 transition">Sobre Nós</a>
            <a href="#contato" className="hover:text-yellow-400 transition">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="h-[55vh] pt-24 relative flex items-center justify-center">
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
            <img
              key={i}
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
            <img
              key={i}
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
          Na Nivelar Terraplanagem, acreditamos que toda grande obra começa com uma base sólida e bem executada.
          Nosso trabalho vai muito além da movimentação de terra — nós preparamos o terreno para que sonhos,
          projetos e construções se tornem realidade com segurança e precisão.

          <br /><br />

          Guiados pelo nosso propósito,
          <span className="text-white font-semibold"> "Onde começa cada grande obra"</span>,
          atuamos com responsabilidade, tecnologia e compromisso em cada serviço realizado.

          <br /><br />

          Nosso princípio é simples: fazer bem feito desde o início.
        </p>

        {/* VALORES */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <div className="bg-black p-6 rounded-xl border border-gray-800">
            <h3 className="text-yellow-400 font-bold mb-2">Ética</h3>
            <p className="text-gray-300 text-sm">
              Transparência e responsabilidade em cada serviço.
            </p>
          </div>

          <div className="bg-black p-6 rounded-xl border border-gray-800">
            <h3 className="text-yellow-400 font-bold mb-2">Compromisso</h3>
            <p className="text-gray-300 text-sm">
              Cumprimento de prazos e excelência na execução.
            </p>
          </div>

          <div className="bg-black p-6 rounded-xl border border-gray-800">
            <h3 className="text-yellow-400 font-bold mb-2">Qualidade</h3>
            <p className="text-gray-300 text-sm">
              Equipamentos modernos e alto padrão de entrega.
            </p>
          </div>
        </div>

        {/* DEPOIMENTOS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {[
            ["Carlos Mendes", "Serviço excelente."],
            ["Juliano Rocha", "Equipe profissional."],
            ["Fernanda Lima", "Recomendo totalmente."],
          ].map(([nome, texto], i) => (
            <div key={i} className="bg-black p-6 rounded-xl border border-gray-800">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-300">{texto}</p>
              <span className="text-sm text-gray-500">— {nome}</span>
            </div>
          ))}
        </div>

        {/* AVALIAÇÃO */}
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

          <input placeholder="Seu nome" className="w-full p-3 mb-3 bg-black border border-gray-700 rounded" />
          <textarea placeholder="Sua avaliação" className="w-full p-3 mb-3 bg-black border border-gray-700 rounded" />

          <button className="bg-yellow-400 text-black px-6 py-2 rounded">
            Enviar
          </button>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-16 px-4 text-sm md:text-base">
        <h2 className="text-3xl text-yellow-400 text-center mb-10">CONTATO</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[520px] rounded-xl"
          />

          <div className="flex flex-col gap-5">

            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            {[
              ["Fernando", "5543998061421"],
              ["Anderson", "5543999520213"],
              ["Valéria", "5543996281826"],
            ].map(([nome, numero]) => (
              <a key={numero}
                href={`https://wa.me/${numero}`}
                target="_blank"
                className="flex gap-3 items-center hover:text-yellow-400 transition">
                <div className="bg-green-500 p-2 rounded-full">
                  <FaWhatsapp />
                </div>
                {nome}
              </a>
            ))}

            <a
              href="https://instagram.com/terraplanagem.nivelar"
              target="_blank"
              className="flex gap-3 items-center hover:text-yellow-400 transition"
            >
              <img src="/icons/instagram.svg" className="w-7" />
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