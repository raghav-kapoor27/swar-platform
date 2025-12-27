export default function Login() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#020617",
      color: "white"
    }}>
      <div style={{
        background: "rgba(255,255,255,0.05)",
        padding: "32px",
        borderRadius: "16px",
        width: "320px"
      }}>
        <h2>Login to SWAR</h2>

        <button style={{ width: "100%", marginTop: "20px" }}>
          🎙 Voice Login (Demo)
        </button>

        <div style={{ marginTop: "20px" }}>
          <a href="/student">Student</a><br />
          <a href="/teacher">Teacher</a><br />
          <a href="/parent">Parent</a>
        </div>

        <p style={{ fontSize: "12px", opacity: 0.6, marginTop: "12px" }}>
          Pilot Mode • No real data
        </p>
      </div>
    </div>
  )
}
