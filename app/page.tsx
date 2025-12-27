export default function Home() {
  return (
    <div className="ai-stage">
      <div className="ai-field" />
      <div className="ai-noise" />

      <main className="container">
        <h1 className="h1">SWAR</h1>

        <p className="p-muted" style={{ marginTop: "28px", maxWidth: "720px" }}>
          SWAR is a voice-first AI system that listens to students in their
          mother tongue, detects early learning difficulties, and helps
          teachers respond with insight instead of labels.
        </p>

        <div style={{ marginTop: "48px", display: "flex", gap: "16px" }}>
          <a href="/login" className="button-primary">Launch Demo</a>
          <a href="/login" className="button-secondary">Teacher Console</a>
        </div>
      </main>
    </div>
  )
}
