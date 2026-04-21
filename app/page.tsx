export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="header">
        <h1>NIVELAR</h1>
        <p>Onde começa cada grande obra</p>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <h1>Construindo com excelência</h1>
        <p>Projetos modernos, eficientes e confiáveis.</p>
      </section>

      {/* DIFERENCIAIS */}
      <section>
        <h2>Diferenciais</h2>
        <div className="features">
          <div className="feature">
            <h3>Ética</h3>
            <p>Transparência em todos os processos.</p>
          </div>
          <div className="feature">
            <h3>Compromisso</h3>
            <p>Foco total na entrega e prazo.</p>
          </div>
          <div className="feature">
            <h3>Qualidade</h3>
            <p>Execução com alto padrão técnico.</p>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section>
        <h2>Avaliações</h2>
        <div className="cards">
          <div className="card">
            <h3>Cliente 1</h3>
            <p>Excelente trabalho e atendimento.</p>
          </div>
          <div className="card">
            <h3>Cliente 2</h3>
            <p>Entrega rápida e com qualidade.</p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato">
        <h2>Contato</h2>
        <p>Entre em contato para solicitar um orçamento.</p>
      </section>

      {/* CSS */}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #000;
          color: #fff;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #222;
        }

        .header h1 {
          color: #facc15;
          margin: 0;
        }

        .header p {
          margin: 0;
          font-size: 12px;
          color: #aaa;
        }

        nav a {
          margin-left: 20px;
          text-decoration: none;
          color: #fff;
        }

        .hero {
          text-align: center;
          padding: 80px 20px;
        }

        .hero h1 {
          font-size: 48px;
          margin-bottom: 10px;
        }

        .hero p {
          color: #aaa;
        }

        section {
          padding: 60px 40px;
        }

        h2 {
          font-family: Arial, sans-serif;
          margin-bottom: 20px;
        }

        /* DIFERENCIAIS */
        .features {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .feature {
          flex: 1;
          min-width: 250px;
          padding: 10px;
        }

        .feature h3 {
          color: #facc15;
        }

        /* AVALIAÇÕES */
        .cards {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .card {
          background: #111;
          padding: 20px;
          flex: 1;
          min-width: 250px;
          border: 1px solid #222;
        }

        .card h3 {
          color: #facc15;
        }
      `}</style>
    </main>
  );
}