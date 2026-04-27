"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  const [rating, setRating] = useState(0);

  const mensagem = "Olá, vim pelo site e gostaria de mais informações.";

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
            <span className="text-sm">Onde começa cada grande obra</span>
          </div>

          <nav className="hidden md:flex gap-10 text-lg absolute left-1/2 -translate-x-1/2">
            <a href="#home">Início</a>
            <a href="#projetos">Projetos</a>
            <a href="#equipamentos">Equipamentos</a>
            <a href="#sobre">Sobre</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="h-[65vh] pt-28 relative flex items-center justify-center">
        {heroImages.map((img, i) => (
          <div key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${current === i ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />

        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>
          <p className="mt-4 text-gray-300">{frases[current]}</p>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Projetos <span className="text-yellow-400">Realizados</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {projetos.map((img, i) => (
            <img key={i} src={img}
              onClick={() => setZoomImg(img)}
              className="h-[240px] w-full object-cover rounded-xl cursor-pointer"
            />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="py-16 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-10">
          Nossos <span className="text-yellow-400">Equipamentos</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {equipamentos.map((img, i) => (
            <img key={i} src={img}
              onClick={() => setZoomImg(img)}
              className="h-[240px] w-full object-cover rounded-xl cursor-pointer"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">
          Sobre <span className="text-yellow-400">Nós</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Na Nivelar Terraplanagem, acreditamos que toda grande obra começa com uma base sólida e bem executada.
          Atuamos com responsabilidade, tecnologia e compromisso, garantindo qualidade em cada etapa do processo.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto text-left">
          <div>
            <h3 className="text-yellow-400 font-bold">Missão</h3>
            <p>Executar projetos com excelência.</p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-bold">Visão</h3>
            <p>Ser referência no setor.</p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-bold">Valores</h3>
            <p>Qualidade, ética e compromisso.</p>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Avaliações <span className="text-yellow-400">Clientes</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            { nome: "Lucas", texto: "Serviço impecável!" },
            { nome: "Mariana", texto: "Equipe profissional!" },
            { nome: "Carlos", texto: "Recomendo!" },
          ].map((a, i) => (
            <div key={i} className="border border-gray-700 p-6 rounded-xl">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p>{a.texto}</p>
              <span className="text-sm text-gray-500">{a.nome}</span>
            </div>
          ))}
        </div>

        {/* FORM */}
        <div className="mt-10 flex flex-col items-center">
          <div className="flex gap-2 mb-4 text-2xl">
            {[1,2,3,4,5].map((n) => (
              <FaStar key={n}
                onClick={() => setRating(n)}
                className={rating >= n ? "text-yellow-400" : "text-gray-500"}
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

      {/* CONTATO */}
      <section id="contato" className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Entre em <span className="text-yellow-400">Contato</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[300px] rounded-xl"
          />

          <div className="flex flex-col gap-5 text-gray-300">
            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            {[
              { nome: "Anderson", tel: "5543999520213" },
              { nome: "Valéria", tel: "5543996281826" },
              { nome: "Fernando", tel: "5543998061421" },
            ].map((c, i) => (
              <a key={i}
                href={`https://wa.me/${c.tel}?text=${encodeURIComponent(mensagem)}`}
                className="flex items-center gap-3">
                <FaWhatsapp /> {c.nome}
              </a>
            ))}

            <a href="https://instagram.com/terraplanagem.nivelar">
              Instagram
            </a>
          </div>

        </div>
      </section>

      {/* ZOOM */}
      {zoomImg && (
        <div onClick={() => setZoomImg(null)}
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
          <img src={zoomImg} className="max-h-[90%]" />
        </div>
      )}

      {/* BOTÃO FLUTUANTE */}
      <a
        href={`https://wa.me/5543996281826?text=${encodeURIComponent(mensagem)}`}
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full text-white text-2xl"
      >
        <FaWhatsapp />
      </a>

      {/* RODAPÉ */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Nivelar Terraplanagem
      </footer>

    </div>
  );
}