export default function Login() {
  return (
    <main className="container" style={{ maxWidth: "420px" }}>
      <div className="card glow">
      <div className="card">
        <h2 className="h2">Login to SWAR</h2>

        <a
          href="/student"
          className="button-primary"
          style={{ width: "100%", marginTop: "24px", textAlign: "center" }}
        >
          🎙 Enter Voice Space
        </a>

        <a
          href="/teacher"
          className="button-secondary"
          style={{ width: "100%", marginTop: "16px", textAlign: "center" }}
        >
          👩‍🏫 Teacher Dashboard
        </a>

        <p className="p-muted" style={{ fontSize: "12px", marginTop: "16px" }}>
          Pilot Mode · No real student data stored
        </p>
      </div>
      </div>
    </main>
  )
}
