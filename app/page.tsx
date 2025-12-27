export default function Home() {
  return (
    <main className="container">
      <h1 className="h1">
        SWAR
      </h1>

      <p className="p-muted" style={{ marginTop: "24px" }}>
        SWAR is a voice-first AI platform that listens to students in their mother
        tongue, detects early learning difficulties, and helps teachers respond
        with dignity instead of labels.
      </p>

      <div style={{ marginTop: "48px", display: "flex", gap: "16px" }}>
        <a href="/login" className="button-primary">
          Start Demo
        </a>
        <a href="/login" className="button-secondary">
          Teacher View
        </a>
      </div>

      <div style={{
        marginTop: "96px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "24px"
      }}>
        <div className="card">
          <h3 className="h2">Voice-First</h3>
          <p className="p-muted">
            No typing. Students learn and respond entirely through speech.
          </p>
        </div>

        <div className="card">
          <h3 className="h2">Early Support</h3>
          <p className="p-muted">
            Detects signs of dyslexia and dyscalculia without labeling children.
          </p>
        </div>

        <div className="card">
          <h3 className="h2">Built for Rural India</h3>
          <p className="p-muted">
            Works offline, supports Indian languages, and runs on low-end phones.
          </p>
        </div>
      </div>
    </main>
  )
}
