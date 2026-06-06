export default function Home() {
  return (
    <main style={{ padding: '4rem 5%', maxWidth: '1000px', margin: '0 auto', color: '#fff' }}>
      
      {/* Hero Section */}
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#00f2fe' }}>NilcksonTech</h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8' }}>Innovating the future of digital infrastructure.</p>
      </header>

      {/* Ecosystem Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <a href="/systems" className="neon-card" style={{ textDecoration: 'none', display: 'block' }}>
          <h3 style={{ color: '#fff', fontSize: '1.5rem' }}>System Architecture</h3>
          <p style={{ color: '#94a3b8' }}>Enterprise-grade design and deployment.</p>
        </a>

        <div className="neon-card">
          <h3 style={{ color: '#fff', fontSize: '1.5rem' }}>Cybersecurity</h3>
          <p style={{ color: '#94a3b8' }}>Advanced threat hunting and defense.</p>
        </div>

        <a href="/courses" className="neon-card" style={{ textDecoration: 'none', display: 'block' }}>
          <h3 style={{ color: '#fff', fontSize: '1.5rem' }}>Tech Courses</h3>
          <p style={{ color: '#94a3b8' }}>Learn networking, coding, and design.</p>
        </a>

        <div className="neon-card">
          <h3 style={{ color: '#fff', fontSize: '1.5rem' }}>Merchandise Store</h3>
          <p style={{ color: '#94a3b8' }}>Tech-inspired apparel and gear.</p>
        </div>

      </section>
    </main>
  );
}

