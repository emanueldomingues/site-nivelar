"use client";

import { useState, useEffect } from "react";

export default function Nivelar() {
  const whatsappPrincipal =
    "https://wa.me/5543996281826?text=Olá, quero orçamento de terraplanagem";

  const contatos = [
    {
      nome: "Fernando",
      numero: "5543998061421",
      label: "(43) 99806-1421",
    },
    {
      nome: "Anderson",
      numero: "5543999520213",
      label: "(43) 99952-0213",
    },
    {
      nome: "Valéria",
      numero: "5543996281826",
      label: "(43) 99628-1826",
    },
  ];

  // 🔥 HERO (AJUSTADO)
  const heroImages = [
    "/images/projetos/projeto1.jpg",
    "/images/projetos/projeto2.jpg",
    "/images/projetos/projeto3.jpg",
  ];

  // 🔥 EQUIPAMENTOS (AJUSTADO)
  const equipamentos = [
    "/images/equipamentos/maq1.jpg",
    "/images/equipamentos/maq2.jpg",
    "/images/equipamentos/maq3.jpg",
    "/images/equipamentos/maq4.jpg",
    "/images/equipamentos/maq5.jpg",
    "/images/equipamentos/maq6.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0b0b0b] text-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 md:px-16 py-4 bg-black/80 backdrop-blur border-b border-gray-800 fixed w-full z-50">
        <img src="/logo.svg" className="h-16 md:h-24" />

        <nav className="hidden md:flex gap-10 text-sm">
          <a href="#home" className="hover:text-yellow-400">Início</a>
          <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
          <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
          <a href="#sobre" className="hover:text-yellow-400">Sobre Nós</a>
          <a href="#contato" className="hover:text-yellow-400">Contato</a>
        </nav>

        <div className="w-[100px]" />
      </header>

      {/* HERO */}
      <section id="home" className="h-screen flex items-center px-6 md:px-16 relative">
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

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-7xl font-bold">
            Terraplanagem de{" "}
            <span className="text-yellow-400">Alto Padrão</span>
          </h1>

          <p className="mt-6 text-yellow-400">
            Atendimento em Cambé e região
          </p>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/images/projetos/projeto1.jpg" className="rounded-xl" />
          <img src="/images/projetos/projeto2.jpg" className="rounded-xl" />
          <img src="/images/projetos/projeto3.jpg" className="rounded-xl" />
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="p-10 md:p-16 bg-[#111] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {equipamentos.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="p-10 md:p-16 bg-[#111] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300">
          A Nivelar Terraplanagem atua com excelência, entregando serviços com precisão,
          segurança e compromisso em cada projeto.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 md:p-16 bg-black">
        <h2 className="text-3xl text-yellow-400 mb-10 text-center">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857&output=embed"
            className="w-full h-[350px] rounded-xl"
          />

          <div className="space-y-4">
            <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

            {contatos.map((c, i) => (
              <a
                key={i}
                href={`https://wa.me/${c.numero}`}
                target="_blank"
                className="flex items-center gap-2"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  className="w-5 h-5"
                />
                {c.nome} — {c.label}
              </a>
            ))}

            <a
              href="https://www.instagram.com/terraplanagem.nivelar/"
              target="_blank"
              className="flex items-center gap-2 text-yellow-400"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                className="w-5 h-5"
              />
              @terraplanagem.nivelar
            </a>
          </div>
        </div>
      </section>

      {/* BOTÃO WHATS */}
      <a
        href={whatsappPrincipal}
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className="w-6 h-6"
        />
      </a>
    </div>
  );
}