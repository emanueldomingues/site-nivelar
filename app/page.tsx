export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#000", color: "#fff" }}>
      
      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Terraplanagem de Alto Padrão
        </h1>
        <p style={{ color: "#aaa" }}>
          Qualidade, compromisso e resultado profissional
        </p>
      </section>

      {/* DIFERENCIAIS */}
      <section style={{ padding: "60px 40px" }}>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          
          <div style={card}>
            <h3 style={title}>Ética</h3>
            <p>Trabalhamos com transparência e respeito em todos os projetos.</p>
          </div>

          <div style={card}>
            <h3 style={title}>Compromisso</h3>
            <p>Cumprimos prazos e garantimos a satisfação do cliente.</p>
          </div>

          <div style={card}>
            <h3 style={title}>Qualidade</h3>
            <p>Equipamentos modernos e equipe altamente qualificada.</p>
          </div>

        </div>
      </section>

      {/* PROJETOS */}
      <section style={{ padding: "60px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Projetos Realizados
        </h2>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <img src="/img1.jpg" style={img} />
          <img src="/img2.jpg" style={img} />
          <img src="/img3.jpg" style={img} />
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section style={{ padding: "60px 40px", background: "#111" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Avaliações
        </h2>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          
          <div style={card}>
            <p>"Excelente serviço, muito profissional!"</p>
            <strong>- Cliente 1</strong>
          </div>

          <div style={card}>
            <p>"Entrega rápida e qualidade impecável."</p>
            <strong>- Cliente 2</strong>
          </div>

        </div>
      </section>

      {/* CONTATO */}
      <section style={{ padding: "60px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Contato
        </h2>

        <p>Entre em contato para um orçamento:</p>

        <a
          href="https://wa.me/SEUNUMERO"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            background: "#ffc107",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          WhatsApp
        </a>
      </section>

    </main>
  );
}

const card = {
  background: "#111",
  padding: "20px",
  flex: 1,
  minWidth: "250px",
  border: "1px solid #222",
};

const title = {
  marginBottom: "10px",
  color: "#ffc107",
};

const img = {
  width: "300px",
  height: "200px",
  objectFit: "cover" as const,
};