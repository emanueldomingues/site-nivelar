<section id="contato" className="py-20 bg-black text-white">
  <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
    CONTATO
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

    {/* MAPA */}
    <iframe
      src="https://www.google.com/maps?q=Av.+Antônio+Raminelli,+857+-+Cambé&output=embed"
      className="w-full h-[420px] rounded-lg border-0"
      loading="lazy"
    ></iframe>

    {/* CONTATOS */}
    <div className="space-y-6 text-lg">

      {/* ENDEREÇO */}
      <div className="flex items-center gap-3">
        <span className="text-yellow-400 text-xl">📍</span>
        <span>Av. Antônio Raminelli, 857 - Cambé</span>
      </div>

      {/* WHATS - FERNANDO */}
      <a
        href="https://wa.me/5543998061421"
        target="_blank"
        className="flex items-center gap-3 group"
      >
        <div className="bg-green-500 p-2 rounded-full transition group-hover:bg-yellow-400">
          <span className="text-black text-lg">☎</span>
        </div>
        <span className="group-hover:text-yellow-400 transition">
          Fernando — (43) 99806-1421
        </span>
      </a>

      {/* WHATS - ANDERSON */}
      <a
        href="https://wa.me/5543999520213"
        target="_blank"
        className="flex items-center gap-3 group"
      >
        <div className="bg-green-500 p-2 rounded-full transition group-hover:bg-yellow-400">
          <span className="text-black text-lg">☎</span>
        </div>
        <span className="group-hover:text-yellow-400 transition">
          Anderson — (43) 99952-0213
        </span>
      </a>

      {/* WHATS - VALÉRIA */}
      <a
        href="https://wa.me/5543996281826"
        target="_blank"
        className="flex items-center gap-3 group"
      >
        <div className="bg-green-500 p-2 rounded-full transition group-hover:bg-yellow-400">
          <span className="text-black text-lg">☎</span>
        </div>
        <span className="group-hover:text-yellow-400 transition">
          Valéria — (43) 99628-1826
        </span>
      </a>

      {/* INSTAGRAM */}
      <a
        href="https://instagram.com/terraplanagem.nivelar"
        target="_blank"
        className="flex items-center gap-3 group"
      >
        <span className="text-xl">📸</span>
        <span className="group-hover:text-yellow-400 transition">
          @terraplanagem.nivelar
        </span>
      </a>

    </div>
  </div>
</section>