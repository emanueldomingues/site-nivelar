export default function Home() {
  return (
    <>
      <header className="header">
        <h1>NIVELAR</h1>
        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#valores">Valores</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Terraplanagem de Alto Padrão</h1>
        <p>Qualidade, compromisso e eficiência em cada projeto</p>
      </section>

      <section id="servicos">
        <h2>Serviços</h2>
        <div className="cards">
          <div className="card">
            <h3>Terraplanagem</h3>
            <p>Execução completa com máquinas modernas</p>
          </div>
          <div className="card">
            <h3>Nivelamento</h3>
            <p>Precisão e acabamento profissional</p>
          </div>
          <div className="card">
            <h3>Preparação de Terreno</h3>
            <p>Base pronta para construção</p>
          </div>
        </div>
      </section>

      <section id="valores">
        <h2>Nossos Valores</h2>
        <div className="cards">
          <div className="card">
            <h3>Ética</h3>
            <p>Transparência em todos os serviços</p>
          </div>
          <div className="card">
            <h3>Compromisso</h3>
            <p>Prazos respeitados com responsabilidade</p>
          </div>
          <div className="card">
            <h3>Qualidade</h3>
            <p>Entrega acima do esperado</p>
          </div>
        </div>
      </section>

      <section id="avaliacoes">
        <h2>Avaliações</h2>
        <div className="cards">
          <div className="card">
            <p>"Serviço excelente, recomendo muito!"</p>
            <span>- Cliente 1</span>
          </div>
          <div className="card">
            <p>"Equipe profissional e rápida."</p>
            <span>- Cliente 2</span>
          </div>
        </div>
      </section>

      <section id="contato">
        <h2>Contato</h2>
        <p className="contato-texto">
          Entre em contato para um orçamento
        </p>
        <a
          className="botao"
          href="https://wa.me/SEUNUMERO"
          target="_blank"
        >
          Falar no WhatsApp
        </a>
      </section>

      <style jsx>{`
        body {
          margin: 0;
          background: #000;
          color: #fff;
          font-family: Arial, sans-serif;
        }

        .header {
          display: flex;
          justify-content: space-between;
          padding: 20px 40px;
          background: #000;
          border-bottom: 1px solid #222;
        }

        .header a {
          margin-left: 20px;
          color: #fff;
          text-decoration: none;
        }

        .hero {
          text-align: center;
          padding: 100px 20px;
          background: url('/bg.jpg') center/cover;
        }

        .hero h1 {
          font-size: 48px;
          color: #ffc107;
        }

        section {
          padding: 60px 40px;
        }

        h2 {
          text-align: center;
          margin-bottom: 40px;
        }

        .cards {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .card {
          background: #111;
          padding: 20px;
          border: 1px solid #222;
          min-width: 250px;
          max-width: 300px;
        }

        .card h3 {
          color: #ffc107;
        }

        #valores .card {
          background: #161616;
        }

        #avaliacoes .card {
          background: #0f0f0f;
          font-style: italic;
        }

        #contato {
          text-align: center;
        }

        .contato-texto {
          font-size: 18px;
          margin-bottom: 20px;
        }

        .botao {
          display: inline-block;
          background: #ffc107;
          color: #000;
          padding: 12px 24px;
          text-decoration: none;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .cards {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}