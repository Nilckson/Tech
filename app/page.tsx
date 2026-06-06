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
          <p style={{ color: '#94a3b8', margin: 0 }}>Enterprise-grade design and deployment.</p>
        </a>

        <a href="/cybersecurity" className="neon-card" style={{ textDecoration: 'none', display: 'block' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Cybersecurity →</h3>
          <p style={{ color: '#94a3b8', margin: 0 }}>Advanced threat hunting and defense.</p>
        </a>

        <a href="/courses" className="neon-card" style={{ textDecoration: 'none', display: 'block' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Tech Courses →</h3>
          <p style={{ color: '#94a3b8', margin: 0 }}>Learn networking, coding, and design.</p>
        </a>

        <a href="/merchandise" className="neon-card" style={{ textDecoration: 'none', display: 'block' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Merchandise Store →</h3>
          <p style={{ color: '#94a3b8', margin: 0 }}>Tech-inspired apparel and gear.</p>
        </a>

      </section>
    </main>
  );
}
