export default function Systems() {
  return (
    <>
      <style>{`
        @keyframes wormhole {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .wormhole-bg {
          /* Semi-transparent wormhole to blend with the global tech grid */
          background: radial-gradient(circle at center, rgba(15, 23, 42, 0.9) 0%, rgba(30, 27, 75, 0.8) 50%, rgba(2, 6, 23, 0.9) 100%);
          background-size: 200% 200%;
          animation: wormhole 12s ease-in-out infinite;
          min-height: 100vh;
        }
      `}</style>

      <main className="wormhole-bg" style={{ padding: '0', margin: '0' }}>
        
        {/* Navigation */}
        <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="vibrant-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
            Nilckson<span style={{ color: '#00f2fe', WebkitTextFillColor: '#00f2fe' }}>Tech</span>
          </div>
          <a href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>← Return Home</a>
        </nav>

        {/* Hero Section */}
        <header style={{ padding: '4rem 5%', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
            Enterprise-Grade <br/>System Architecture
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#94a3b8', marginBottom: '3rem', lineHeight: '1.6' }}>
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
    </>
  );
}
