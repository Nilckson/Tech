export default function Systems() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      
      <style>{`
        @keyframes mobile-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .mobile-safe-bg {
          position: absolute;
          width: 250vw;
          height: 250vw;
          top: 50%;
          left: 50%;
          margin-top: -125vw;
          margin-left: -125vw;
          /* Soft radial gradients instead of heavy blurs */
          background: radial-gradient(circle at 30% 30%, #3b0764 0%, transparent 45%),
                      radial-gradient(circle at 70% 70%, #083344 0%, transparent 45%);
          background-color: #020617;
          animation: mobile-spin 12s linear infinite;
          z-index: 0;
        }
      `}</style>

      {/* The Animated Background */}
      <div className="mobile-safe-bg"></div>

      {/* All Page Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Navigation */}
        <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px', color: '#fff' }}>
            Nilckson<span style={{ color: '#00f2fe' }}>Tech</span>
          </div>
          <a href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>← Return Home</a>
        </nav>

        {/* Hero Section */}
        <header style={{ padding: '4rem 5%', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', color: '#fff' }}>
            Enterprise-Grade <br/>System Architecture
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', marginBottom: '3rem', lineHeight: '1.6' }}>
            We design, build, and deploy high-performance web applications and resilient network infrastructures tailored for scale.
          </p>
        </header>

        {/* Services Cards */}
        <section style={{ padding: '0 5% 6rem', display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          
          <div className="neon-card" style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0, 242, 254, 0.3)', borderRadius: '12px', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Web Application Development</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0' }}>Leveraging modern frameworks to deliver responsive, dynamic, and highly secure user experiences.</p>
          </div>

          <div className="neon-card" style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0, 242, 254, 0.3)', borderRadius: '12px', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Infrastructure & Networking</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0' }}>Designing distributed systems and secure network topologies to ensure maximum uptime and data integrity.</p>
          </div>

        </section>
      </div>
      
    </main>
  );
}
