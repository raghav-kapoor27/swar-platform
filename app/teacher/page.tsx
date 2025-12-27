export default function Teacher() {
  return (
    <div className="ai-stage">
      <div className="ai-field" />
      <div className="ai-noise" />

      <main className="container">
        <h2 className="h2">Teacher Insight Panel</h2>

        <div
          style={{
            marginTop: "48px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px"
          }}
        >
          <div className="card">
            <h3 className="h2">Student A</h3>
            <p className="p-muted">
              May benefit from slower phonics-based instruction.
              Flag generated from voice patterns.
            </p>
            <p className="p-muted" style={{ fontSize: "12px" }}>
              Assistive signal · Not diagnostic
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
