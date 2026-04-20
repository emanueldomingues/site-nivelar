"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const whatsappPrincipal =
    "https://wa.me/5543996281826?text=Olá, quero orçamento de terraplanagem";

  const contatos = [
    { nome: "Fernando", numero: "5543998061421", label: "(43) 99806-1421" },
    { nome: "Anderson", numero: "5543999520213", label: "(43) 99952-0213" },
    { nome: "Valéria", numero: "5543996281826", label: "(43) 99628-1826" },
  ];

  const heroImages = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
  ];

  const equipamentos = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
    "/images/maquina4.jpg",
    "/images/maquina5.jpg",
    "/images/maquina6.jpg",
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
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800 flex justify-between items-center px-6 py-4">
        <img src="/logo.svg" className="h-16" />

        <nav className="hidden md:flex gap-8">
          <a href="#home">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#equipamentos">Equipamentos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="h-screen relative flex items-center px-6">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
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
          <h1 className="text-5xl font-bold">
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <img src="/images/projeto.jpg" className="rounded-xl mx-auto max-w-3xl w-full" />
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="p-10 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-6">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {equipamentos.map((img, i) => (
            <img key={i} src={img} className="rounded-xl" />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="p-10 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300">
          Excelência no setor, entregando serviços com precisão e qualidade.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 text-center">
        <h2 className="text-3xl text-yellow-400 mb-6">CONTATO</h2>

        <div className="space-y-3">
          <p>📍 Av. Antônio Raminelli, 857 - Cambé</p>

          {contatos.map((c, i) => (
            <a key={i} href={`https://wa.me/${c.numero}`} className="block">
              {c.nome} — {c.label}
            </a>
          ))}

          <a href="https://instagram.com/terraplanagem.nivelar">
            @terraplanagem.nivelar
          </a>
        </div>
      </section>

      {/* BOTÃO WHATS */}
      <a
        href={whatsappPrincipal}
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className="w-6"
        />
      </a>
    </div>
  );
}