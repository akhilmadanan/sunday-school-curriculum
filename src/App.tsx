import './App.css'

function App() {
  return (
    <main className="page">
      <header className="site-header">
        <div className="brand-mark" aria-hidden="true">
          S
        </div>
        <span className="brand-name">Sunday School</span>
        <span className="brand-divider" aria-hidden="true">
          /
        </span>
        <span className="brand-section">Curriculum</span>
      </header>

      <section className="welcome" aria-labelledby="welcome-title">
        <p className="eyebrow">A thoughtful place to begin</p>
        <h1 id="welcome-title">Sunday School Curriculum</h1>
        <p className="welcome-copy">
          Plan meaningful lessons and help your community grow together.
        </p>
        <div className="welcome-note">
          <span className="welcome-note-mark" aria-hidden="true">
            ✦
          </span>
          <p>Your curriculum workspace is ready.</p>
        </div>
      </section>

      <footer className="site-footer">
        <span>Made for learning, reflection, and community.</span>
      </footer>
    </main>
  )
}

export default App
