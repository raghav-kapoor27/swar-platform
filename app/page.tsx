export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #020617, #0f172a)",
      color: "white",
      padding: "80px"
    }}>
      <h1 style={{ fontSize: "48px", fontWeight: "700" }}>SWAR</h1>
      <p style={{ maxWidth: "600px", marginTop: "20px", opacity: 0.8 }}>
        A voice-first AI platform helping rural students learn in their mother tongue
        and get early support for learning difficulties.
      </p>
      <a href="/login" style={{
        display: "inline-block",
        marginTop: "40px",
        padding: "14px 24px",
        background: "#f97316",
        borderRadius: "12px",
        color: "black",
        fontWeight: "600",
        textDecoration: "none"
      }}>
        Start Demo
      </a>
    </main>
  )
}
