export default function Systems() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      <style>{`
        /* --- Performance-Optimized 3D Wormhole --- */
        @keyframes travel {
          /* Ends exactly at Z=0 to prevent clipping through your text */
          0% { transform: translateZ(-1500px) scale(0.1); opacity: 0; }
          15% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateZ(0px) scale(2.5); opacity: 0; } 
        }

        @keyframes tunnel-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .space-bg {
          position: fixed;
          inset: 0;
          background-color: #010308;
          perspective: 600px;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .tunnel-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
          animation: tunnel-spin 20s linear infinite;
        }

        .wormhole-ring {
          position: absolute;
          top: -45vmin;
          left: -45vmin;
          width: 90vmin;
          height: 90vmin;
          border-radius: 50%;
          
          /* Vibrant, multi-colored walls */
          border-top: 6px solid #00f2fe;    /* Cyan */
          border-right: 6px solid #a855f7;  /* Purple */
          border-bottom: 6px solid #ec4899; /* Pink */
          border-left: 6px solid #3b82f6;   /* Blue */
          
          /* Reduced blur radius for smooth 60fps mobile performance */
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.4);
          animation: travel 4s linear infinite;
          will-change: transform, opacity; /* Forces hardware acceleration */
        }

        .black-hole-mask {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, #010308 5%, transparent 35%, #010308 100%);
          z-index: 2;
        }

        /* --- UI Elements --- */
        .neon-card {
          background: rgba(10, 15, 30, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px); /* Fixes rendering on iPhones */
          border: 1px solid rgba(0, 242, 254, 0.3);
          border-radius: 12px;
          padding: 2.5rem;
          transform: translateZ(0); /* Forces card to stay strictly above the 3D background */
        }
      `}</style>

      {/* 3D Cinematic Wormhole Background */}
      <div className="space-bg">
        <div className="tunnel-wrapper">
          {/* Reduced from 20 to 12 rings to eliminate lag completely */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="wormhole-ring" 
              style={{ animationDelay: `${i * -0.33}s` }}
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
          
          <div className="neon-card">
            <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Web Application Development</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0' }}>Leveraging modern frameworks to deliver responsive, dynamic, and highly secure user experiences.</p>
          </div>

          <div className="neon-card">
            <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Infrastructure & Networking</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0' }}>Designing distributed systems and secure network topologies to ensure maximum uptime and data integrity.</p>
          </div>

        </section>
      </div>
      
    </main>
  );
}

