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
    "/images/equipamentos/maquina11.jpeg",
    "/images/equipamentos/maquina12.jpeg",
    "/images/equipamentos/maquina13.jpeg",
    "/images/equipamentos/maquina14.jpeg",
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
    "/images/projetos/projeto10.jpeg",
    "/images/projetos/projeto11.jpeg",
    "/images/projetos/projeto12.jpeg",
    "/images/projetos/projeto13.jpeg",
    "/images/projetos/projeto14.jpeg",
    "/images/projetos/projeto15.jpeg",
    "/images/projetos/projeto16.jpeg",
  ];

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
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">{frases[current]}</p>
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

      {/* SOBRE (RESTAURADO) */}
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

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          <div className="bg-[#111] p-6 rounded-xl border border-gray-800 flex gap-4">
            <FaBullseye className="text-yellow-400 text-2xl" />
            <div>
              <h3 className="text-yellow-400 font-bold">Missão</h3>
              <p className="text-gray-300 text-sm">Transformar terrenos em bases sólidas com qualidade e compromisso.</p>
            </div>
          </div>

          <div className="bg-[#111] p-6 rounded-xl border border-gray-800 flex gap-4">
            <FaEye className="text-yellow-400 text-2xl" />
            <div>
              <h3 className="text-yellow-400 font-bold">Visão</h3>
              <p className="text-gray-300 text-sm">Ser referência em terraplanagem com excelência.</p>
            </div>
          </div>

          <div className="bg-[#111] p-6 rounded-xl border border-gray-800 flex gap-4">
            <FaGem className="text-yellow-400 text-2xl" />
            <div>
              <h3 className="text-yellow-400 font-bold">Valores</h3>
              <p className="text-gray-300 text-sm">Ética, compromisso e qualidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES (RESTAURADO COMPLETO) */}
      <section id="avaliacoes" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-white">Avaliações</span>{" "}
          <span className="text-yellow-400">Clientes</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            { nome: "Carlos Mendes", texto: "Serviço impecável!" },
            { nome: "Amanda Alves", texto: "Muito profissional!" },
            { nome: "Roberto Lima", texto: "Recomendo!" },
          ].map((a, i) => (
            <div key={i} className="border border-gray-700 p-6 rounded-xl">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p>{a.texto}</p>
              <span className="text-sm text-gray-500">{a.nome}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <div className="flex gap-2 mb-4 text-2xl">
            {[1,2,3,4,5].map((n) => (
              <FaStar key={n}
                onClick={() => setRating(n)}
                className={rating >= n ? "text-yellow-400 cursor-pointer" : "text-gray-500 cursor-pointer"}
              />
            ))}
          </div>

          <input placeholder="Nome" className="p-3 mb-2 w-full max-w-md text-black rounded" />
          <textarea placeholder="Mensagem" className="p-3 mb-2 w-full max-w-md text-black rounded" />

          <button className="bg-yellow-400 text-black px-6 py-2 rounded font-bold">
            Enviar Avaliação
          </button>
        </div>
      </section>

      {/* CONTATO (mantido com fonte corrigida) */}
      <section id="contato" className="py-16 px-4 text-gray-300 text-lg">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="text-white">Entre em</span>{" "}
          <span className="text-yellow-400">Contato</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[300px] rounded-xl"
          />

          <div className="flex flex-col gap-5">
            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            {[
              { nome: "Anderson", link: "https://wa.me/5543999520213" },
              { nome: "Valéria", link: "https://wa.me/5543996281826" },
              { nome: "Fernando", link: "https://wa.me/5543998061421" },
            ].map((c, i) => (
              <a key={i} href={c.link} className="flex items-center gap-4 hover:text-yellow-400">
                <div className="bg-green-500 p-3 rounded-full text-white text-xl">
                  <FaWhatsapp />
                </div>
                {c.nome}
              </a>
            ))}

            <a href="https://instagram.com/terraplanagem.nivelar"
              className="flex items-center gap-4 hover:text-yellow-400">
              <img src="/icons/instagram.svg" className="w-10" />
              @terraplanagem.nivelar
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Nivelar Terraplanagem
        <br />
        Desenvolvido por{" "}
        <a href="https://www.instagram.com/emanueldomingues/" className="text-white hover:text-yellow-400">
          @emanueldomingues
        </a>
      </footer>

    </div>
  );
}