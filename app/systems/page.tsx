export default function Systems() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      <style>{`
        /* --- Pulsar Background Animations --- */
        @keyframes spin-beam {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes pulse-core {
          0%, 100% { box-shadow: 0 0 30px 10px rgba(0, 242, 254, 0.3), 0 0 60px 20px rgba(8, 51, 68, 0.5); }
          50% { box-shadow: 0 0 50px 15px rgba(0, 242, 254, 0.6), 0 0 90px 30px rgba(8, 51, 68, 0.8); }
        }
        .space-bg {
          position: fixed;
          inset: 0;
          background-color: #020617;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
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

        /* --- Dual-Color Cyber Accordion --- */
        .cyber-card {
          background: rgba(10, 15, 30, 0.7);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
          /* Dual-color borders and glows */
          border-left: 2px solid #00f2fe; /* Cyan Left */
          border-right: 2px solid #4ade80; /* Green Right */
          box-shadow: -20px 0 40px -15px rgba(0, 242, 254, 0.3),
                       20px 0 40px -15px rgba(74, 222, 128, 0.3);
        }
        .cyber-title {
          color: #00f2fe;
          font-family: monospace;
          font-size: 1.1rem;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        details {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          margin-bottom: 0.75rem;
          transition: all 0.3s ease;
        }
        summary {
          padding: 1rem;
          color: #f8fafc;
          font-family: monospace;
          font-size: 1rem;
          cursor: pointer;
          list-style: none;
          display: flex;
          align-items: center;
          outline: none;
        }
        summary::-webkit-details-marker { display: none; }
        summary::before {
          content: '▶';
          color: #4ade80;
          margin-right: 12px;
          font-size: 0.8rem;
          transition: transform 0.2s ease;
        }
        details[open] summary::before {
          transform: rotate(90deg);
          color: #00f2fe;
        }
        .accordion-content {
          padding: 0 1rem 1rem 2.5rem;
          color: #94a3b8;
          font-family: monospace;
          font-size: 0.9rem;
          line-height: 1.6;
        }
      `}</style>

      {/* Deep Space Background */}
      <div className="space-bg">
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

        <section style={{ padding: '0 5% 6rem', maxWidth: '800px', margin: '0 auto' }}>
          
          <div className="cyber-card">
            <div className="cyber-title">System Capabilities</div>
            
            <details>
              <summary>Web Application Development</summary>
              <div className="accordion-content">
                Leveraging modern frameworks to deliver responsive, dynamic, and highly secure user experiences.
              </div>
            </details>

            <details>
              <summary>Infrastructure & Networking</summary>
              <div className="accordion-content">
                Designing distributed systems and secure network topologies to ensure maximum uptime and data integrity.
              </div>
            </details>

            <details>
              <summary>Scalable Cloud Hosting</summary>
              <div className="accordion-content">
                Deploying optimized, containerized applications to ensure seamless growth and global availability.
              </div>
            </details>
          </div>

        </section>
      </div>
      
    </main>
  );
}
