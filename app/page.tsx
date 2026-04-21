export default function Home() {
  return (
    <main style={{
      background: "#000",
      color: "#fff",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid #222"
      }}>
        <div>
          <h1 style={{ color: "#facc15", margin: 0 }}>NIVELAR</h1>
          <p style={{ fontSize: "12px", color: "#aaa", margin: 0 }}>
            Onde começa cada grande obra
          </p>
        </div>

        <nav>
          <a href="#" style={{ marginLeft: 20, color: "#fff" }}>Início</a>
          <a href="#" style={{ marginLeft: 20, color: "#fff" }}>Projetos</a>
          <a href="#" style={{ marginLeft: 20, color: "#fff" }}>Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "40px" }}>Construindo com excelência</h1>
        <p style={{ color: "#aaa" }}>Projetos modernos e confiáveis</p>
      </section>

      {/* DIFERENCIAIS */}
      <section style={{ padding: "40px" }}>
        <h2>Diferenciais</h2>

        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <h3 style={{ color: "#facc15" }}>Ética</h3>
            <p>Transparência total.</p>
          </div>

          <div>
            <h3 style={{ color: "#facc15" }}>Compromisso</h3>
            <p>Entrega no prazo.</p>
          </div>

          <div>
            <h3 style={{ color: "#facc15" }}>Qualidade</h3>
            <p>Execução profissional.</p>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section style={{ padding: "40px" }}>
        <h2>Avaliações</h2>

        <div style={{ display: "flex", gap: 20 }}>
          <div style={{ background: "#111", padding: 20 }}>
            <h3>Cliente 1</h3>
            <p>Ótimo serviço.</p>
          </div>

          <div style={{ background: "#111", padding: 20 }}>
            <h3>Cliente 2</h3>
            <p>Recomendo muito.</p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section style={{ padding: "40px" }}>
        <h2>Contato</h2>
        <p>Fale conosco para orçamento.</p>
      </section>

    </main>
  );
}