import './App.css'; // Assuming you have this import

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2 className="logo">Nine victoria.</h2>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="container">
          <h1>Hi, I'm <span className="highlight">NINE WANOGHO</span></h1>
          <p>A passionate Web Developer building clean and modern web experiences.</p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
      </header>

      <section id="about" className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-text">
          <p>
            Hello! I am a developer based in DELTA. I enjoy creating things that live on the internet. 
            My interest in web development started back in 2024 when I decided to try editing custom Tumblr themes — 
            turns out hacking together HTML & CSS taught me a lot about it!
          </p>
        </div>
      </section>

      <section id="projects" className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          
          <div className="project-card">
            <h3>Project One</h3>
            <a href="#" className="btn" style={{padding: '8px 16px', fontSize: '0.9rem'}}>View Project</a>
          </div>

          <div className="project-card">
            <h3>Project Two</h3>
            <a href="#" className="btn" style={{padding: '8px 16px', fontSize: '0.9rem'}}>View Project</a>
          </div>

          <div className="project-card">
            <h3>Project Three</h3>
            <a href="#" className="btn" style={{padding: '8px 16px', fontSize: '0.9rem'}}>View Project</a>
          </div>

        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p style={{marginBottom: '30px', color: '#64748b'}}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <a href="mailto:your.v.wanogho6118@miva.edu.ng" className="btn">Say Hello</a>
        </div>
      </section>

      <footer>
        <p>Built by Nine © {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App