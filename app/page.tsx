"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { FaBullseye, FaEye, FaGem } from "react-icons/fa"; // 🔥 NOVO

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  const [rating, setRating] = useState(0);

  const heroImages = [
    "/images/equipamentos/maquina1.jpg",
    "/images/equipamentos/maquina2.jpg",
    "/images/equipamentos/maquina3.jpg",
  ];

  const projetos = [
    "/images/projetos/projeto1.jpg",
    "/images/projetos/projeto2.jpg",
    "/images/projetos/projeto3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="h-[55vh] relative flex items-center justify-center">
        {heroImages.map((img, i) => (
          <div key={i}
            className={`absolute inset-0 bg-cover bg-center transition ${
              current === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />

        <h2 className="text-3xl md:text-5xl font-bold text-center relative">
          Terraplanagem de <br />
          <span className="text-yellow-400">Alto Padrão</span>
        </h2>
      </section>

      {/* SOBRE */}
      <section className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          SOBRE NÓS
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10 leading-relaxed">
          Na Nivelar Terraplanagem, acreditamos que toda grande obra começa com uma base sólida.
          Trabalhamos com equipamentos modernos e equipe qualificada para garantir excelência em cada projeto.
        </p>

        {/* 🔥 NOVA PARTE ADICIONADA */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">

          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 flex gap-4 items-start hover:border-yellow-400 transition">
            <div className="text-yellow-400 text-2xl">
              <FaBullseye />
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-1">Missão</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Transformar terrenos em bases sólidas, entregando soluções eficientes com qualidade e compromisso.
              </p>
            </div>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 flex gap-4 items-start hover:border-yellow-400 transition">
            <div className="text-yellow-400 text-2xl">
              <FaEye />
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-1">Visão</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ser referência em terraplanagem, reconhecida pela excelência e confiança.
              </p>
            </div>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 flex gap-4 items-start hover:border-yellow-400 transition">
            <div className="text-yellow-400 text-2xl">
              <FaGem />
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-1">Valores</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ética, compromisso, qualidade e respeito ao cliente em cada projeto.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PROJETOS */}
      <section className="py-16 text-center">
        <h2 className="text-3xl text-yellow-400 mb-10">PROJETOS</h2>

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

      {/* AVALIAÇÃO */}
      <section className="py-16 text-center px-4">
        <h2 className="text-yellow-400 mb-4">Avalie nosso serviço</h2>

        <div className="flex justify-center gap-2 mb-4">
          {[1,2,3,4,5].map((n) => (
            <FaStar key={n}
              onClick={() => setRating(n)}
              className={rating >= n ? "text-yellow-400" : "text-gray-500"}
            />
          ))}
        </div>

        <input placeholder="Nome" className="p-2 mb-2 w-full max-w-md text-black" />
        <textarea placeholder="Mensagem" className="p-2 mb-2 w-full max-w-md text-black" />
      </section>

      {/* ZOOM */}
      {zoomImg && (
        <div onClick={() => setZoomImg(null)} className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
          <img src={zoomImg} className="max-h-[90%]" />
        </div>
      )}

      {/* WHATS */}
      <a href="https://wa.me/5543998061421"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full text-white text-2xl">
        <FaWhatsapp />
      </a>

    </div>
  );
}