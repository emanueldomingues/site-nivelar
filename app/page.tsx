"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Nivelar() {

  const images = [
    "/images/maquina1.jpg",
    "/images/maquina2.jpg",
    "/images/maquina3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0b0b0b] text-white font-sans">

      {/* HEADER */}
      <header className="flex items-center justify-between px-4 md:px-16 py-3 md:py-4 bg-black/80 backdrop-blur-xl border-b border-gray-800 fixed w-full z-50">

        <div className="flex flex-col">
          <img
            src="/logo.svg"
            alt="Nivelar Terraplanagem"
            className="h-10 md:h-16 object-contain"
          />
          <span className="text-[10px] md:text-xs text-gray-400 mt-1 leading-tight">
            Onde começa cada grande obra
          </span>
        </div>

        <nav className="hidden md:flex gap-10 text-sm font-medium">
          <a href="#home" className="hover:text-yellow-400 transition">Início</a>
          <a href="#servicos" className="hover:text-yellow-400 transition">Serviços</a>
          <a href="#galeria" className="hover:text-yellow-400 transition">Projetos</a>
          <a href="#contato" className="hover:text-yellow-400 transition">Contato</a>
        </nav>

        <div className="w-[60px] md:w-[100px]" />
      </header>

      {/* HERO */}
      <section id="home" className="h-[90vh] md:h-screen flex items-center px-4 md:px-16 relative">

        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative max-w-xl md:max-w-3xl z-10">
          <h1 className="text-2xl md:text-6xl font-extrabold leading-tight">
            Terraplanagem de
            <span className="text-yellow-400"> Alto Padrão</span>
          </h1>

          <p className="mt-4 md:mt-6 text-yellow-400 text-sm md:text-lg">
            Atendimento em Cambé e região
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <motion.section
        id="servicos"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-16 py-12 md:py-20 bg-[#111] text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
          NOSSOS <span className="text-yellow-400">DIFERENCIAIS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            ["✔ Experiência", "Mais de 10 anos de atuação"],
            ["✔ Equipamentos", "Máquinas modernas"],
            ["✔ Rapidez", "Atendimento ágil via WhatsApp"],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-black p-6 rounded-xl hover:scale-105 transition">
              <h3 className="text-yellow-400 text-lg mb-2">{title}</h3>
              <p className="text-sm md:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* GALERIA */}
      <section id="galeria" className="px-4 md:px-16 py-12 md:py-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
          PROJETOS <span className="text-yellow-400">REALIZADOS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <img
              key={i}
              src={`/images/maquina${i}.jpg`}
              className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="px-4 md:px-16 py-12 md:py-20 bg-black text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
          CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">

          <iframe
            src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857+-+Parque+Res.+Ana+Rosa&output=embed"
            className="w-full h-[250px] md:h-[350px] rounded-xl"
            loading="lazy"
          />

          <div className="text-left space-y-3 text-sm md:text-base">

            <p>
              <strong>📍 Endereço:</strong><br />
              Av. Antônio Raminelli, 857<br />
              Parque Res. Ana Rosa
            </p>

            <a href="https://wa.me/5543998061421" target="_blank" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5" />
              Fernando — (43) 99806-1421
            </a>

            <a href="https://wa.me/5543999520213" target="_blank" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5" />
              Anderson — (43) 99952-0213
            </a>

            <a href="https://wa.me/5543996281826" target="_blank" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5" />
              Valéria — (43) 99628-1826
            </a>

            <p><strong>📧 Email:</strong> contato@nivelar.com</p>

            <a
              href="https://www.instagram.com/terraplanagem.nivelar/"
              target="_blank"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className="w-5 h-5" />
              @terraplanagem.nivelar
            </a>

          </div>

        </div>
      </section>

      <footer className="text-center p-4 md:p-6 bg-black text-gray-400 text-xs md:text-sm">
        © 2026 Nivelar Terraplanagem
      </footer>

      {/* BOTÃO WHATSAPP */}
      <a
        href="https://wa.me/5543996281826"
        target="_blank"
        className="fixed bottom-4 right-4 md:bottom-5 md:right-5 bg-green-500 p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 md:w-6" />
      </a>

    </div>
  );
}