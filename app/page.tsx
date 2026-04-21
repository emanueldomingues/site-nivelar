export default function Home() {
  return (
    <main>
      <header className="header">
        <h1>NIVELAR</h1>
        <p>Onde começa cada grande obra</p>

        <nav>
          <a href="#">Início</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Terraplanagem de Alto Padrão</h1>
        <p>Qualidade, compromisso e ética em cada projeto</p>
      </section>

      <section>
        <h2>Projetos Realizados</h2>

        <div className="cards">
          <div className="card">
            <h3>Terraplanagem</h3>
            <p>Serviço profissional com máquinas modernas</p>
          </div>

          <div className="card">
            <h3>Infraestrutura</h3>
            <p>Preparação completa de terrenos</p>
          </div>

          <div className="card">
            <h3>Obras</h3>
            <p>Execução com qualidade e prazo</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Avaliações</h2>

        <div className="cards">
          <div className="card">
            <h3>João Silva</h3>
            <p>Serviço excelente, recomendo!</p>
          </div>

          <div className="card">
            <h3>Maria Souza</h3>
            <p>Muito profissional e rápido.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Contato</h2>
        <p>Entre em contato para orçamento</p>
      </section>

      <style jsx>{`
        main {
          background: #000;
          color: #fff;
          font-family: Arial, sans-serif;
        }

        .header {
          padding: 20px;
          border-bottom: 1px solid #222;
        }

        .header h1 {
          color: #facc15;
        }

        nav a {
          margin-right: 15px;
          color: #fff;
          text-decoration: none;
        }

        .hero {
          text-align: center;
          padding: 100px 20px;
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
          margin-bottom: 10px;
          color: #facc15;
        }
      `}</style>
    </main>
  );
}