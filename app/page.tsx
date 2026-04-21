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
    <div className="bg-black text-white">

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/95 z-50 border-b border-gray-800">
        <div className="flex justify-between items-center px-6 py-3 relative">
          <div>
            <h1 className="text-3xl font-bold">NIVELAR</h1>
            <p className="text-xs text-yellow-400">
              Onde começa cada grande obra
            </p>
          </div>

          <nav className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="h-[55vh] pt-24 relative flex items-center justify-center">
        {heroImages.map((img, i) => (
          <div key={i}
            className={`absolute inset-0 bg-cover bg-center transition ${
              current === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />

        <h2 className="text-3xl md:text-5xl font-bold text-center relative px-4">
          Terraplanagem de <br />
          <span className="text-yellow-400">Alto Padrão</span>
        </h2>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-16 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          PROJETOS REALIZADOS
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
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          NOSSOS EQUIPAMENTOS
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
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">SOBRE NÓS</h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10 leading-relaxed">
          Na Nivelar Terraplanagem, acreditamos que toda grande obra começa com uma base sólida e bem executada.
          Nosso trabalho vai além da movimentação de terra: preparamos o terreno para que projetos se tornem realidade com segurança e precisão.
          <br /><br />
          Guiados pelo nosso propósito,
          <span className="text-white font-semibold"> "Onde começa cada grande obra"</span>,
          atuamos com responsabilidade, tecnologia e compromisso.
        </p>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto text-left">
          <div className="border-l-4 border-yellow-400 pl-4">
            <h3 className="text-yellow-400 font-bold">Ética</h3>
            <p className="text-gray-300 text-sm">Transparência e respeito.</p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4">
            <h3 className="text-yellow-400 font-bold">Compromisso</h3>
            <p className="text-gray-300 text-sm">Cumprimento de prazos.</p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4">
            <h3 className="text-yellow-400 font-bold">Qualidade</h3>
            <p className="text-gray-300 text-sm">Excelência na execução.</p>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16 text-center">
        <h2 className="text-3xl text-yellow-400 mb-10">DEPOIMENTOS</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {["Excelente serviço", "Muito profissional", "Recomendo totalmente"].map((t, i) => (
            <div key={i} className="bg-black p-6 border border-gray-700 rounded-xl">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p>{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
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

      {/* CONTATO */}
      <section id="contato" className="py-16 px-4">
        <h2 className="text-3xl text-yellow-400 text-center mb-10">CONTATO</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full md:w-[115%] h-[520px] rounded-xl"
          />

          <div className="flex flex-col gap-4 text-gray-300 text-base">

            <p>📍 Av. Antônio Raminelli, test 857 - Cambé</p>

            <a href="https://wa.me/5543998061421" className="flex gap-3 items-center hover:text-yellow-400">
              <div className="bg-green-500 p-2 rounded-full">
                <FaWhatsapp />
              </div>
              Fernando
            </a>

            <a href="https://instagram.com/terraplanagem.nivelar"
              className="flex gap-3 items-center hover:text-yellow-400">
              <img src="/icons/instagram.svg" className="w-7" />
              @terraplanagem.nivelar
            </a>

          </div>
        </div>
      </section>

      {/* ZOOM */}
      {zoomImg && (
        <div onClick={() => setZoomImg(null)} className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
          <img src={zoomImg} className="max-h-[90%]" />
        </div>
      )}

      {/* BOTÃO WHATS */}
      <a href="https://wa.me/5543998061421"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full text-white text-2xl shadow-lg">
        <FaWhatsapp />
      </a>

    </div>
  );
}