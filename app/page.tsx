"use client";

import { useState, useEffect } from "react";

export default function Nivelar() {
  const contatos = [
    { nome: "Fernando", numero: "5543998061421" },
    { nome: "Anderson", numero: "5543999520213" },
    { nome: "Valéria", numero: "5543996281826" },
  ];

  const heroImages = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
  ];

  const equipamentos = Array.from(
    { length: 10 },
    (_, i) => `/images/equipamentos/maquina${i + 1}.jpg`
  );

  const projetos = Array.from(
    { length: 9 },
    (_, i) => `/images/projetos/projeto${i + 1}.jpg`
  );

  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/90 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* MENU CENTRAL */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>

          {/* LOGO DIREITA */}
          <div className="ml-auto text-right">
            <img src="/logo.svg" className="h-28 md:h-32 ml-auto" />
            <p className="text-yellow-400 text-sm mt-1">
              Onde começa cada grande obra
            </p>
          </div>

        </div>
      </header>

      {/* HERO CARROSSEL */}
      <section id="home" className="h-screen relative pt-32 overflow-hidden">

        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50 z-20" />

        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Nivelar Terraplanagem
          </h1>

          <p className="text-yellow-400 mt-4 text-lg">
            Onde começa cada grande obra
          </p>
        </div>

      </section>

      {/* PROJETOS */}
      <section id="projetos" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projetos.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setLightbox(img)}
              className="w-full aspect-video object-cover rounded-xl cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="p-10 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {equipamentos.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setLightbox(img)}
              className="aspect-square object-cover rounded-xl cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300">
          A Nivelar Terraplanagem atua com excelência no setor, entregando serviços com precisão,
          segurança e compromisso. Nosso objetivo é transformar terrenos em bases sólidas para grandes obras.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10">
          CONTATO <span className="text-yellow-400">NIVELAR</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[250px] rounded-xl"
          />

          <div className="space-y-4">

            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            {contatos.map((c, i) => (
              <a
                key={i}
                href={`https://wa.me/${c.numero}`}
                target="_blank"
                className="flex items-center gap-2 hover:text-yellow-400 transition"
              >
                <img src="/icons/whatsapp.svg" className="w-5" />
                {c.nome}
              </a>
            ))}

            <a
              href="https://instagram.com/terraplanagem.nivelar"
              target="_blank"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <img src="/icons/instagram.svg" className="w-5" />
              @terraplanagem.nivelar
            </a>

          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} className="max-h-[90%] max-w-[90%] rounded-xl" />
        </div>
      )}

      {/* WHATS FLOAT */}
      <a
        href="https://wa.me/5543996281826"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full hover:scale-110 transition"
      >
        <img src="/icons/whatsapp.svg" className="w-6" />
      </a>

    </div>
  );
}