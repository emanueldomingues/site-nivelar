"use client";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/95 border-b border-gray-800 px-6 py-3 z-50">
        <div className="flex justify-between items-center">
          
          <div>
            <h1 className="text-2xl font-bold">NIVELAR</h1>
            <p className="text-xs text-yellow-400">
              Onde começa cada grande obra
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#" className="hover:text-yellow-400">Início</a>
            <a href="#" className="hover:text-yellow-400">Projetos</a>
            <a href="#" className="hover:text-yellow-400">Equipamentos</a>
            <a href="#" className="hover:text-yellow-400">Sobre</a>
            <a href="#" className="hover:text-yellow-400">Contato</a>
          </nav>

        </div>
      </header>

      {/* TESTE */}
      <div className="pt-24 text-center">
        <h2 className="text-xl text-gray-300">Header funcionando</h2>
      </div>

    </main>
  );
}