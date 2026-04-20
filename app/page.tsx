"use client";

import { useState, useEffect } from "react";

export default function Nivelar() {
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
"/images/maquina7.jpg",
"/images/maquina8.jpg",
"/images/maquina9.jpeg",
"/images/maquina10.jpeg"
];

const [current, setCurrent] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setCurrent((prev) => (prev + 1) % heroImages.length);
}, 4000);
return () => clearInterval(interval);
}, []);

return ( <div className="bg-[#0b0b0b] text-white">

```
  {/* HERO */}
  <section className="h-screen flex items-center px-6 md:px-16 relative">
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
        Terraplanagem de <span className="text-yellow-400">Alto Padrão</span>
      </h1>
    </div>
  </section>

  {/* EQUIPAMENTOS */}
  <section className="p-10 text-center bg-[#111]">
    <h2 className="text-3xl font-bold mb-10 text-yellow-400">
      EQUIPAMENTOS
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {equipamentos.map((img, i) => (
        <img key={i} src={img} className="rounded-xl" />
      ))}
    </div>
  </section>

</div>
```

);
}
