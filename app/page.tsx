export default function Home() {
  return (
    <main style={{ padding: '4rem 5%', maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
      
      {/* Hero Section */}
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', color: '#00f2fe', marginBottom: '1rem' }}>NilcksonTech</h1>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>Innovating the future of digital infrastructure.</p>
      </header>
      {/* Ecosystem Grid */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        <a href="/systems" className="neon-card" style={{ textDecoration: 'none', display: 'block' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>System Architecture →</h3>
          <p style={{ color: '#94a3b8', margin: 0 }}>Architecting scalable, enterprise-grade digital infrastructures.</p>
        </a>

        <a href="/cybersecurity" className="neon-card" style={{ textDecoration: 'none', display: 'block' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Cybersecurity →</h3>
          <p style={{ color: '#94a3b8', margin: 0 }}>Proactive threat mitigation and defensive systems engineering.</p>
        </a>

        <a href="/courses" className="neon-card" style={{ textDecoration: 'none', display: 'block' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Tech Courses →</h3>
          <p style={{ color: '#94a3b8', margin: 0 }}>Advanced technical training for the next generation of engineers.</p>
        </a>

        <a href="/merchandise" className="neon-card" style={{ textDecoration: 'none', display: 'block' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Merchandise Store →</h3>
          <p style={{ color: '#94a3b8', margin: 0 }}>Premium, tech-focused apparel for the modern developer.</p>
        </a>

      </section>
    </main>
  );
}
