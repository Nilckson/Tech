export default function Home() {
  return (
    <main style={{ padding: '0', margin: '0' }}>
      <header style={{ padding: '8rem 1rem 4rem', textAlign: 'center' }}>
        <h1 className="neon-text" style={{ fontSize: 'clamp(2.5rem, 12vw, 4rem)', fontWeight: '900', letterSpacing: '-2px', margin: '0 0 1rem 0' }}>
          Nilckson<span style={{ color: '#38bdf8' }}>Tech</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          Building Systems, Securing Networks, and Empowering Developers.
        </p>
      </header>
      
      <section style={{ padding: '2rem 1.5rem 6rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <a href="/systems" className="neon-card">
            <h3 style={{ color: '#38bdf8', fontSize: '1.5rem', margin: '0 0 0.75rem 0' }}>System Architecture →</h3>
            <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>Custom web application development and robust network infrastructure setup.</p>
          </a>
          <a href="/cybersecurity" className="neon-card">
            <h3 style={{ color: '#38bdf8', fontSize: '1.5rem', margin: '0 0 0.75rem 0' }}>Cybersecurity →</h3>
            <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>Advanced threat hunting, network auditing, and proactive security solutions.</p>
          </a>
          <div className="neon-card">
            <h3 style={{ color: '#e2e8f0', fontSize: '1.5rem', margin: '0 0 0.75rem 0' }}>Tech Courses</h3>
            <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>Comprehensive ICT training covering networking, graphic design, and coding fundamentals.</p>
          </div>
          <div className="neon-card">
            <h3 style={{ color: '#e2e8f0', fontSize: '1.5rem', margin: '0 0 0.75rem 0' }}>Merchandise Store</h3>
            <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>Exclusive, high-quality apparel and gear designed for the tech community.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
