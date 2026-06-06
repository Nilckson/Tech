export default function Systems() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      <style>{`
        /* --- Pulsar Sweeping Animation --- */
        @keyframes sweep-beam {
          0% { transform: translate(-50%, -50%) rotate(-55deg); }
          100% { transform: translate(-50%, -50%) rotate(55deg); }
        }
        
        @keyframes pulse-core {
          0%, 100% { box-shadow: 0 0 15px 5px rgba(0, 242, 254, 0.1), 0 0 30px 10px rgba(8, 51, 68, 0.2); opacity: 0.5; }
          50% { box-shadow: 0 0 25px 8px rgba(0, 242, 254, 0.2), 0 0 45px 15px rgba(8, 51, 68, 0.4); opacity: 0.8; }
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

        .multicolor-nebula {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 150vmax;
          height: 150vmax;
          background:
            radial-gradient(circle at 75% 25%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          animation: spin-nebula 35s linear infinite; /* Slower, deeper background spin */
        }

        .pulsar-beam {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2px; /* Thinner beam */
          height: 200vh;
          /* Dimmer, more transparent gradient */
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 242, 254, 0.15) 45%, rgba(255, 255, 255, 0.4) 50%, rgba(0, 242, 254, 0.15) 55%, transparent 100%);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
          /* Fast oscillation sweeping back and forth */
          animation: sweep-beam 1.2s ease-in-out infinite alternate;
        }

        .pulsar-core {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px; /* Smaller core */
          height: 8px;
          background: rgba(255, 255, 255, 0.7); /* Dimmer white */
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulse-core 2s ease-in-out infinite;
        }

        /* --- UI Elements --- */
        .neon-card {
          background: rgba(15, 23, 42, 0.5); /* Slightly more transparent */
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 242, 254, 0.2);
          border-radius: 12px;
          padding: 2.5rem;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .neon-card:hover {
          border-color: rgba(0, 242, 254, 0.5);
          transform: translateY(-2px);
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
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Enterprise-Grade <br/>System Architecture
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', marginBottom: '3rem', lineHeight: '1.6', textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
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
