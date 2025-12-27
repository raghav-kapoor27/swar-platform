export default function Home() {
  return (
    <div className="ai-stage">
      <div className="ai-field" />
      <div className="ai-noise" />

      <main className="container">
        <h1 className="h1">SWAR</h1>

        <p className="p-muted" style={{ marginTop: "28px" }}>
          A voice-native AI system for education — built to listen first,
          understand learning differences early, and support children
          without labels or judgment.
        </p>

        <div style={{ marginTop: "48px", display: "flex", gap: "16px" }}>
          <a href="/login" className="button-primary">
            Start Voice Demo
          </a>
          <a href="/login" className="button-secondary">
            Teacher Dashboard
          </a>
        </div>

        <div
          style={{
            marginTop: "96px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px"
          }}
        >
          <div className="card">
            <h3 className="h2">Voice-First by Design</h3>
            <p className="p-muted">
              Students interact entirely through speech in their
              mother tongue — no typing, no friction.
            </p>
          </div>

          <div className="card">
            <h3 className="h2">Early Learning Support</h3>
            <p className="p-muted">
              Detects patterns linked to dyslexia and dyscalculia
              without scoring or diagnosing children.
            </p>
          </div>

          <div className="card">
            <h3 className="h2">Built for Rural Reality</h3>
            <p className="p-muted">
              Designed for low-end Android devices, offline-first,
              and Indian classrooms.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
