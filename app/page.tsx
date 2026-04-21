{/* HEADER */}
<header className="fixed top-0 w-full bg-black/95 backdrop-blur z-50 border-b border-gray-800">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 relative">

    {/* LOGO - MAIS BAIXA E MAIOR */}
    <div className="flex flex-col leading-tight justify-center">
      <h1 className="text-5xl font-black leading-none tracking-wide">
        NIVELAR
      </h1>

      <span className="bg-yellow-400 text-black text-sm px-3 py-1 mt-1 font-bold w-fit">
        TERRAPLANAGEM
      </span>

      <span className="text-sm text-white mt-1">
        Onde começa cada grande obra
      </span>
    </div>

    {/* MENU CENTRALIZADO */}
    <nav className="hidden md:flex gap-10 text-sm font-medium absolute left-1/2 -translate-x-1/2">
      <a href="#home" className="hover:text-yellow-400 transition">Início</a>
      <a href="#projetos" className="hover:text-yellow-400 transition">Projetos</a>
      <a href="#equipamentos" className="hover:text-yellow-400 transition">Equipamentos</a>
      <a href="#sobre" className="hover:text-yellow-400 transition">Sobre Nós</a>
      <a href="#contato" className="hover:text-yellow-400 transition">Contato</a>
    </nav>

    {/* ESPAÇO DIREITA (não mexer) */}
    <div className="w-[150px]" />

  </div>
</header>