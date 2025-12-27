export default function Login() {
  return (
    <div className="ai-stage">
      <div className="ai-field" />
      <div className="ai-noise" />

      <main className="container" style={{ maxWidth: "420px" }}>
        <div className="card">
          <h2 className="h2">Access SWAR</h2>

          <a href="/student" className="button-primary" style={{ marginTop: "24px", display: "block", textAlign: "center" }}>
            🎙 Student Voice Space
          </a>

          <a href="/teacher" className="button-secondary" style={{ marginTop: "16px", display: "block", textAlign: "center" }}>
            👩‍🏫 Teacher Dashboard
          </a>

          <p className="p-muted" style={{ fontSize: "12px", marginTop: "16px" }}>
            Pilot Mode · No real student data stored
          </p>
        </div>
      </main>
    </div>
  )
}
