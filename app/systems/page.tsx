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

        {/* The Terminal Card */}
        <section style={{ padding: '0 5% 4rem', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.6), rgba(0, 242, 254, 0.1))',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            borderRadius: '16px',
            padding: '1.5rem',
            width: '100%',
            maxWidth: '550px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5), inset 0 0 20px rgba(0, 242, 254, 0.1)'
          }}>
            
            {/* Terminal Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', border: '2px solid #00f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', fontSize: '1.2rem' }}>
                🤖
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px', color: '#f8fafc' }}>SYSTEM_ADMIN</div>
                <div style={{ fontSize: '0.75rem', color: '#00f2fe', letterSpacing: '1px', marginTop: '4px' }}>CLEARANCE_LEVEL: MAXIMUM</div>
              </div>
            </div>

            {/* Terminal Window */}
            <div style={{ background: '#020617', borderRadius: '8px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#4ade80', fontSize: '0.75rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>
                ● SYSTEM_STATUS: ACTIVE
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
                <span style={{ color: '#00f2fe' }}>root@nilckson:~$</span> <span style={{ color: '#f8fafc' }}>whoami --detailed</span>
                <br/><br/>
                <span style={{ color: '#94a3b8', lineHeight: '1.7', display: 'block' }}>
                  I am a security researcher and digital architect. I bridge the gap between offensive cybersecurity and robust, modern frontend engineering.
                </span>
              </div>
            </div>
            
          </div>
        </section>

      </main>
    </>
  );
 }
