export default function Systems() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      <style>{`
        /* --- Pulsar & Nebula Background Animations --- */
        @keyframes spin-beam {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes pulse-core {
          0%, 100% { box-shadow: 0 0 30px 10px rgba(0, 242, 254, 0.3), 0 0 60px 20px rgba(8, 51, 68, 0.5); }
          50% { box-shadow: 0 0 50px 15px rgba(0, 242, 254, 0.6), 0 0 90px 30px rgba(8, 51, 68, 0.8); }
        }
        @keyframes spin-nebula {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .space-bg {
          position: fixed;
          inset: 0;
          background-color: #020617;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        /* The Multi-Colored Quadrants */
        .multicolor-nebula {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 150vmax;
          height: 150vmax;
          background:
            radial-gradient(circle at 75% 25%, rgba(220, 38, 38, 0.25) 0%, transparent 50%),  /* Red */
            radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.25) 0%, transparent 50%),   /* Green */
            radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),   /* Purple */
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.15) 0%, transparent 50%); /* White */
          animation: spin-nebula 25s linear infinite;
        }

        .pulsar-beam {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 200vh;
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 242, 254, 0.8) 45%, #ffffff 50%, rgba(0, 242, 254, 0.8) 55%, transparent 100%);
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.8);
          animation: spin-beam 10s linear infinite;
        }

        .pulsar-core {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 16px;
          height: 16px;
          background: #ffffff;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulse-core 2s ease-in-out infinite;
        }
      `}</style>

      {/* Deep Space Background */}
      <div className="space-bg">
        <div className="multicolor-nebula"></div>
        <div className="pulsar-beam"></div>
        <div className="pulsar-core"></div>
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
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', color: '#fff' }}>
            Enterprise-Grade <br/>System Architecture
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', marginBottom: '3rem', lineHeight: '1.6' }}>
            We design, build, and deploy high-performance web applications and resilient network infrastructures tailored for scale.
          </p>
        </header>

        {/* Original Standard Cards */}
        <section style={{ padding: '0 5% 6rem', display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0, 242, 254, 0.3)', borderRadius: '12px', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Web Application Development</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0' }}>Leveraging modern frameworks to deliver responsive, dynamic, and highly secure user experiences.</p>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0, 242, 254, 0.3)', borderRadius: '12px', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Infrastructure & Networking</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0' }}>Designing distributed systems and secure network topologies to ensure maximum uptime and data integrity.</p>
          </div>

        </section>
      </div>
      
    </main>
  );
}
