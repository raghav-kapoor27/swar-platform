export default function Teacher() {
  return (
    <div className="ai-stage">
      <div className="ai-field" />
      <div className="ai-noise" />

      <main className="container">
        <h2 className="h2">Learning Insight Console</h2>

        {/* SUMMARY */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "24px", marginTop: "40px" }}>
          <div className="card">
            <h3>Total Students</h3>
            <p className="h2">42</p>
          </div>
          <div className="card">
            <h3>Early Support Flags</h3>
            <p className="h2">7</p>
          </div>
          <div className="card">
            <h3>Offline Sync Status</h3>
            <span className="tag">All Synced</span>
          </div>
        </div>

        {/* STUDENT LIST */}
        <div style={{ marginTop: "64px" }}>
          <h3 className="h2">Flagged Learning Profiles</h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "24px", marginTop: "24px" }}>
            <div className="card">
              <h3>Student A</h3>
              <p className="p-muted">
                Speech pattern suggests difficulty with phoneme sequencing.
                Responds better to slower narration.
              </p>
              <span className="tag">Phonological Support Suggested</span>
            </div>

            <div className="card">
              <h3>Student B</h3>
              <p className="p-muted">
                Number response latency higher than class baseline.
                Benefits from concrete examples.
              </p>
              <span className="tag">Number Sense Support</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
