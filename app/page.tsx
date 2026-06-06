export default function Home() {
  return (
    <>
      <style>{`
        /* The Wormhole Animation */
        @keyframes wormhole {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .futuristic-bg {
          background: radial-gradient(circle at center, #0f172a 0%, #1e1b4b 50%, #000000 100%);
          background-size: 200% 200%;
          animation: wormhole 12s ease-in-out infinite;
          min-height: 100vh;
          color: #f8fafc;
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* Glowing Glassmorphism Cards */
        .neon-card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(56, 189, 248, 0.1);
          border-radius: 12px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .neon-card:hover {
          border-color: #38bdf8;
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.3), inset 0 0 10px rgba(56, 189, 248, 0.1);
          transform: translateY(-5px);
        }

        .neon-text {
          text-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
        }
      `}</style>

      <main className="futuristic-bg" style={{ margin: 0, padding: 0 }}>
        
        <header style={{ padding: '8rem 2rem 4rem', textAlign: 'center' }}>
          <h1 className="neon-text" style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '-2px', margin: '0 0 1rem 0' }}>
            Nilckson<span style={{ color: '#38bdf8' }}>Tech</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Building Systems, Securing Networks, and Empowering Developers.
          </p>
        </header>
        
        <section style={{ padding: '2rem 2rem 6rem', maxWidth: '1000px', margin: '0 auto' }}>
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
    </>
  );
}
