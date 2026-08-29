import React from 'react';

const copy = {
  "name": "Zoya",
  "title": "Full-Stack Java Software Engineer & CS Graduate",
  "bio": "Computer Science graduate and software engineer specializing in high-performance Java backends, database query optimization, and practical web applications.",
  "about": "I build reliable backends and practical web software. With hands-on experience in full-stack Java development, SQL query optimization, and interactive applications, I focus on writing clear, performant code that solves real-world workflow problems.",
  "skills": [
    "Java",
    "Spring Boot",
    "SQL Optimization",
    "JavaScript / React",
    "REST APIs",
    "Data Structures & Algorithms",
    "HTML/CSS"
  ],
  "discrepancies_flagged": [
    "Resume lists an Android Internship, but no public Android/Kotlin projects are present on GitHub."
  ],
  "projects": [
    {
      "title": "GramaKhata",
      "repo_name": "GramaKhata-ADigitalSolutionforRuralAccountManagement",
      "description": "A digital village accounting application that streamlines credit and debit ledger management, replacing paper bookkeeping with a secure Java-based system.",
      "tags": ["Java", "Account Management", "Full-Stack"],
      "url": "https://github.com/Zoymusk/GramaKhata-ADigitalSolutionforRuralAccountManagement"
    },
    {
      "title": "Product Inventory Query Optimization",
      "repo_name": "product-inventory-query-optimisation",
      "description": "Spring Boot inventory service demonstrating database indexing strategies. Fixed query-planning index blocks and cut filtered-search latency by ~98% (verified via EXPLAIN plans).",
      "tags": ["Java", "Spring Boot", "SQL", "Performance Optimization"],
      "url": "https://github.com/Zoymusk/product-inventory-query-optimisation"
    },
    {
      "title": "Portfolio Agent",
      "repo_name": "portfolio-agent",
      "description": "An AI agent built on TrueForge for the Agent Harness Hackathon that automatically researches candidate profiles and generates verified portfolio sites.",
      "tags": ["JavaScript", "AI Agents", "Automation"],
      "url": "https://github.com/Zoymusk/portfolio-agent"
    },
    {
      "title": "Mental Health Forum",
      "repo_name": "Mental-Health-Forum",
      "description": "A community forum web application built with JavaScript featuring persistent user interactions and forum discussion tools.",
      "tags": ["JavaScript", "Web Development", "UI"],
      "url": "https://github.com/Zoymusk/Mental-Health-Forum"
    },
    {
      "title": "NumberMaze",
      "repo_name": "NumberMaze",
      "description": "A lightweight browser-based tile-hopping puzzle game implemented in vanilla HTML, CSS, and JavaScript with zero framework overhead.",
      "tags": ["JavaScript", "HTML/CSS", "Game Dev"],
      "url": "https://github.com/Zoymusk/NumberMaze"
    }
  ]
};

export default function Home() {
  return (
    <main style={{ padding: '2.5rem 1.5rem', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', maxWidth: '850px', margin: '0 auto', color: '#f8fafc', backgroundColor: '#0f172a', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '2rem', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 0.5rem 0', color: '#ffffff', letterSpacing: '-0.025em' }}>{copy.name}</h1>
        <p style={{ color: '#818cf8', fontWeight: '600', fontSize: '1.25rem', margin: '0 0 1rem 0' }}>{copy.title}</p>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#cbd5e1', margin: 0 }}>{copy.bio}</p>
      </header>

      {copy.discrepancies_flagged && copy.discrepancies_flagged.length > 0 && (
        <section style={{ backgroundColor: '#451a03', border: '1px solid #78350f', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem' }}>
          <h3 style={{ color: '#fde047', margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '700' }}>Resume & Profile Transparency Note</h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#fef08a', lineHeight: '1.6' }}>
            {copy.discrepancies_flagged.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </section>
      )}

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', borderBottom: '1px solid #1e293b', paddingBottom: '0.5rem' }}>About Me</h2>
        <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#cbd5e1', margin: 0 }}>{copy.about}</p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', borderBottom: '1px solid #1e293b', paddingBottom: '0.5rem' }}>Technical Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {copy.skills.map((skill, idx) => (
            <span key={idx} style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '0.4rem 0.85rem', borderRadius: '6px', fontSize: '0.9rem', fontWeight: '500', border: '1px solid #334155' }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.25rem', borderBottom: '1px solid #1e293b', paddingBottom: '0.5rem' }}>Featured Projects</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {copy.projects.map((project, idx) => (
            <div key={idx} style={{ border: '1px solid #334155', borderRadius: '12px', padding: '1.5rem', backgroundColor: '#1e293b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.25rem', fontWeight: '700' }}>{project.title}</h3>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: '#818cf8', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>
                    View Code →
                  </a>
                )}
              </div>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.6', margin: '0 0 1.25rem 0', color: '#cbd5e1' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} style={{ backgroundColor: '#312e81', color: '#c7d2fe', fontSize: '0.8rem', padding: '0.25rem 0.6rem', borderRadius: '4px', border: '1px solid #4338ca' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #334155', paddingTop: '1.5rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem' }}>
        <p>© 2026 {copy.name} • GitHub: <a href="https://github.com/Zoymusk" target="_blank" rel="noreferrer" style={{ color: '#818cf8', textDecoration: 'none' }}>Zoymusk</a></p>
      </footer>
    </main>
  );
}
