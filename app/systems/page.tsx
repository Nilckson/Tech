export default function Systems() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      <style>{`
        /* --- 3D Wormhole Tunnel Animations --- */
        @keyframes travel {
          0% { transform: translateZ(-2500px) rotate(0deg) scale(0.2); opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateZ(800px) rotate(180deg) scale(2); opacity: 0; }
        }

        @keyframes tunnel-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .space-bg {
          position: fixed;
          inset: 0;
          background-color: #010308; /* Absolute deep space */
          perspective: 800px;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tunnel-wrapper {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          animation: tunnel-spin 30s linear infinite; /* Slow barrel roll */
        }

        .wormhole-ring {
          position: absolute;
          width: 90vmin;
          height: 90vmin;
          border-radius: 50%;
          /* Cyber-energy ring styling */
          border: 2px solid transparent;
          border-top: 4px solid rgba(0, 242, 254, 0.8);
          border-bottom: 4px solid rgba(168, 85, 247, 0.8);
          border-left: 1px dashed rgba(0, 242, 254, 0.3);
          border-right: 1px dashed rgba(168, 85, 247, 0.3);
          box-shadow: 0 0 50px rgba(0, 242, 254, 0.2), inset 0 0 50px rgba(168, 85, 247, 0.2);
          animation: travel 6s linear infinite;
        }

        /* The Distant Vanishing Point & Edge Darkening */
        .black-hole-mask {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, #010308 2%, transparent 30%, #010308 90%);
          z-index: 2;
        }
      `}</style>

      {/* 3D Cinematic Wormhole Background */}
      <div className="space-bg">
        <div className="tunnel-wrapper">
          {/* Generating 20 rings spaced evenly in time to create an infinite tunnel */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="wormhole-ring" 
              style={{ animationDelay: `${i * -0.3}s` }}
            ></div>
          ))}
        </div>
        <div className="black-hole-mask"></div>
      </div>

      {/* Page Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px', color: '#fff' }}>
            Nilckson<span style={{ color: '#00f2fe' }}>Tech</span>
          </div>
          <a href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>← Return Home</a>
        </nav>

        <header style={{ padding: '4rem 5%', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
            Enterprise-Grade <br/>System Architecture
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', marginBottom: '3rem', lineHeight: '1.6', textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
            We design, build, and deploy high-performance web applications and resilient network infrastructures tailored for scale.
          </p>
        </header>

        <section style={{ padding: '0 5% 6rem', display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          
          <div className="neon-card" style={{ background: 'rgba(10, 15, 30, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(0, 242, 254, 0.3)', borderRadius: '12px', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Web Application Development</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0' }}>Leveraging modern frameworks to deliver responsive, dynamic, and highly secure user experiences.</p>
          </div>

          <div className="neon-card" style={{ background: 'rgba(10, 15, 30, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(0, 242, 254, 0.3)', borderRadius: '12px', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Infrastructure & Networking</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0' }}>Designing distributed systems and secure network topologies to ensure maximum uptime and data integrity.</p>
          </div>

        </section>
      </div>
      
    </main>
  );
}
