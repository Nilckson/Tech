export default function Systems() {
  return (
    <main style={{ padding: '0', margin: '0' }}>
      
      {/* Navigation */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px', color: '#fff' }}>
          Nilckson<span style={{ color: '#00f2fe' }}>Tech</span>
        </div>
        <a href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>← Return Home</a>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '4rem 5%', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="neon-text" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', fontWeight: '900', lineHeight: '1.2', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
          Enterprise-Grade <br/>System Architecture
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', marginBottom: '3rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 3rem' }}>
          We design, build, and deploy high-performance web applications and resilient network infrastructures tailored for scale.
        </p>
      </header>

      {/* Services Cards */}
      <section style={{ padding: '0 5% 6rem', display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        
        <div className="neon-card">
          <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Web Application Development</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0' }}>Leveraging modern frameworks to deliver responsive, dynamic, and highly secure user experiences.</p>
        </div>

        <div className="neon-card">
          <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Infrastructure & Networking</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0' }}>Designing distributed systems and secure network topologies to ensure maximum uptime and data integrity.</p>
        </div>

      </section>
      
    </main>
  );
}
