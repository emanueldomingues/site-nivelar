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

  const [current, setCurrent] = useState(0);

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

          {/* MENU */}
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>

          {/* LOGO + SLOGAN */}
          <div className="flex flex-col items-end">
            <img src="/logo.svg" className="h-20 md:h-28" />
            <span className="text-xs text-yellow-400 mt-1">
              Terraplanagem de Alto Padrão
            </span>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section id="home" className="h-screen flex items-center justify-center relative pt-32">

        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Nivelar Terraplanagem
          </h1>
          <p className="text-yellow-400 mt-4">
            Atendimento em Cambé e região
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
            <img key={i} src={img} className="w-full h-[250px] object-cover rounded-xl hover:scale-105 transition" />
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
            <img key={i} src={img} className="rounded-xl hover:scale-105 transition" />
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
          segurança e compromisso. Nosso objetivo é transformar terrenos em bases sólidas.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-black p-6 rounded-xl">✔ Mais de 10 anos de experiência</div>
          <div className="bg-black p-6 rounded-xl">✔ Equipamentos modernos</div>
          <div className="bg-black p-6 rounded-xl">✔ Atendimento rápido</div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 bg-black">
        <h2 className="text-3xl text-yellow-400 text-center mb-10">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[300px] rounded-xl"
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

      {/* WHATS FLUTUANTE */}
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