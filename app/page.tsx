"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const heroImages = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
  ];

  const equipamentos = Array.from({ length: 10 }, (_, i) => `/images/equipamentos/maquina${i + 1}.jpg`);
  const projetos = Array.from({ length: 9 }, (_, i) => `/images/projetos/projeto${i + 1}.jpg`);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white font-sans">

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur border-b border-gray-800">
        <div className="flex items-center justify-between px-6 md:px-16 py-4">

          {/* LOGO */}
          <div className="flex flex-col items-start">
            <img src="/logo.svg" className="h-20 md:h-24 object-contain" />
            <span className="text-sm text-yellow-400 mt-1">
              Onde começa cada grande obra
            </span>
          </div>

          {/* MENU CENTRAL */}
          <nav className="hidden md:flex gap-10 text-sm font-medium absolute left-1/2 -translate-x-1/2">
            {["home", "projetos", "equipamentos", "sobre", "contato"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-yellow-400 transition"
              >
                {item === "home"
                  ? "Início"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          <div className="w-[150px]" />
        </div>
      </header>

      {/* HERO CARROSSEL */}
      <section id="home" className="h-screen relative flex items-center">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/70" />
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projetos.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl object-cover h-[250px] w-full hover:scale-105 transition cursor-pointer"
            />
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section id="equipamentos" className="p-10 md:p-16 text-center bg-[#111]">
        <h2 className="text-3xl font-bold mb-10">
          NOSSOS <span className="text-yellow-400">EQUIPAMENTOS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {equipamentos.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl object-cover h-[180px] w-full hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="p-10 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          SOBRE <span className="text-yellow-400">NÓS</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300">
          A Nivelar Terraplanagem atua com excelência no setor, entregando serviços
          com precisão e compromisso.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="p-10 md:p-16 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* MAPA */}
          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857,+Cambé&output=embed"
            className="w-full h-[380px] rounded-xl"
          />

          {/* CONTATOS */}
          <div className="space-y-5 text-base">

            {/* ENDEREÇO */}
            <div className="flex items-center gap-3">
              <img src="/icons/map.svg" className="w-7" />
              <span>Av. Antônio Raminelli, 857 - Cambé</span>
            </div>

            {/* WHATS CONTATOS */}
            {[
              ["Fernando", "5543998061421"],
              ["Anderson", "5543999520213"],
              ["Valéria", "5543996281826"],
            ].map(([nome, numero]) => (
              <a
                key={nome}
                href={`https://wa.me/${numero}`}
                target="_blank"
                className="flex items-center gap-3 hover:text-yellow-400 transition"
              >
                <img src="/icons/whatsapp.svg" className="w-7" />
                {nome}
              </a>
            ))}

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/terraplanagem.nivelar"
              target="_blank"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <img src="/icons/instagram.svg" className="w-7" />
              @terraplanagem.nivelar
            </a>
          </div>
        </div>
      </section>

      {/* BOTÃO WHATS FLUTUANTE */}
      <a
        href="https://wa.me/5543996281826"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <img src="/icons/whatsapp.svg" className="w-6" />
      </a>

      {/* FOOTER */}
      <footer className="text-center p-6 text-gray-400">
        © 2026 Nivelar Terraplanagem
      </footer>

    </main>
  );
}