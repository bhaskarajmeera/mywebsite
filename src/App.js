// src/App.jsx
import "./style.css";
import {
  profile,
  skills,
  experience,
  education,
  projects,
  highlights,
} from "./data.js";

function App() {
  return (
    <div className="app" >
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">{profile.name}
      <p className="hero-tag">Full Stack Developer</p>
      </div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
      
        <h1>{profile.name}</h1>
        <h2>{profile.headline}</h2>
        <p className="hero-location">{profile.location}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn primary">
            Contact Me
          </a>
          <a href="#projects" className="btn primary">
            View Projects
          </a>
        </div>
        <div className="hero-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>·</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>·</span>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </section>
  );
}

function Main() {
  return (
    <main className="main">
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h3 className="section-title">About</h3>
      <p className="about-text">{profile.about}</p>
      <div className="highlights">
        {highlights.map((item, idx) => (
          <div key={idx} className="highlight-card">
            <span className="bullet" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <h3 className="section-title">Skills</h3>
      <div className="chip-grid">
        {skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h3 className="section-title">Experience</h3>
      <div className="timeline">
        {experience.map((job) => (
          <div key={job.company} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>
                {job.role} · <span className="muted">{job.company}</span>
              </h4>
              <p className="muted">
                {job.period} · {job.location}
              </p>
              <ul>
                {job.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h3 className="section-title">Projects</h3>
      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <h4>{project.name}</h4>
            <p className="muted">
              {project.tech.join(" · ")}
            </p>
            <p>{project.description}</p>
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="card-link"
              >
                View Project →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <h3 className="section-title">Education</h3>
      <div className="timeline">
        {education.map((ed) => (
          <div key={ed.school} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>
                {ed.degree} · <span className="muted">{ed.school}</span>
              </h4>
              <p className="muted">{ed.period}</p>
              <p>{ed.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h3 className="section-title">Contact</h3>
      <p>
        I’m open to full-time roles, internships, and freelance opportunities in
        full stack or front-end development.
      </p>
      <p>
        The best way to reach me is via{" "}
        <a href={`mailto:${profile.email}`}>email</a> or{" "}
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        .
      </p>
      <div className="contact-cards">
        <div className="contact-card">
          <h4>Email</h4>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="contact-card">
          <h4>LinkedIn</h4>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {profile.linkedin}
          </a>
        </div>
        <div className="contact-card">
          <h4>GitHub</h4>
          <a href={profile.github} target="_blank" rel="noreferrer">
            {profile.github}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name} · Built with React.js
      </p>
    </footer>
  );
}

export default App;

