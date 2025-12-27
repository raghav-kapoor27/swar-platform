export default function Student() {
  return (
    <div className="ai-stage">
      <div className="ai-field" />
      <div className="ai-noise" />

      <main className="container">
        <div className="card">
          <h2 className="h2">Speak to Learn</h2>
          <p className="p-muted">
            Press the button and respond in your own language.
            SWAR listens carefully.
          </p>

          <div
            style={{
              marginTop: "40px",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,#38bdf8,#2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              boxShadow: "0 0 40px rgba(56,189,248,0.6)"
            }}
          >
            🎙
          </div>
        </div>
      </main>
    </div>
  )
}
