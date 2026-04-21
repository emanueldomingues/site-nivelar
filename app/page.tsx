"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const images = [
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
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* HEADER */}
      <header className="bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-24 relative">

          {/* LOGO ESQUERDA */}
          <div className="absolute left-0 flex flex-col leading-tight">
            <h1 className="text-4xl font-extrabold tracking-widest">
              NIVELAR
            </h1>

            <span className="bg-yellow-400 text-black px-3 py-1 text-sm font-bold w-fit">
              TERRAPLANAGEM
            </span>

            <span className="text-xs text-gray-400 mt-1">
              Onde começa cada grande obra
            </span>
          </div>

          {/* MENU CENTRAL */}
          <nav className="w-full flex justify-center gap-10 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-400">Início</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#equipamentos" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre Nós</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </nav>

        </div>
      </header>

      {/* HERO / CARROSSEL */}
      <section id="home" className="h-screen relative flex items-center px-6">

        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold">
            Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
          </h1>

          <p className="mt-4 text-yellow-400">
            Atendimento em Cambé e região
          </p>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {projetos.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-[250px] object-cover rounded-xl hover:scale-110 transition cursor-pointer"
            />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="py-16 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-6">
          {equipamentos.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl hover:scale-110 transition"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300">
          A Nivelar Terraplanagem atua com excelência no setor, entregando serviços com precisão,
          segurança e compromisso. Nosso objetivo é transformar terrenos em bases sólidas para grandes obras.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-black text-white">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
          CONTATO
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div className="space-y-6">
            <p>📍 Cambé - PR</p>

            <a href="https://wa.me/5543998061421" className="block hover:text-green-500">
              Fernando
            </a>

            <a href="https://wa.me/5543999520213" className="block hover:text-green-500">
              Anderson
            </a>

            <a href="https://wa.me/5543996281826" className="block hover:text-green-500">
              Valéria
            </a>

            <a href="#" className="block text-yellow-400 hover:text-pink-500">
              Instagram
            </a>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Cambé&output=embed"
            className="w-full h-[350px] rounded-xl"
          />
        </div>
      </section>

      {/* BOTÃO WHATS */}
      <a
        href="https://wa.me/5543996281826"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full"
      >
        WhatsApp
      </a>

      {/* RODAPÉ */}
      <footer className="text-center p-6 text-gray-400">
        © 2026 Nivelar Terraplanagem
      </footer>
    </div>
  );
}