export default function Home() {
  return (
    <main style={{ padding: '0', margin: '0' }}>
      <style>{`
        .tech-header {
          background-color: rgba(5, 11, 20, 0.8);
          /* Glowing Tech Grid Background */
          background-image: 
            radial-gradient(circle at 50% 100%, rgba(0, 242, 254, 0.15), transparent 60%),
            linear-gradient(rgba(0, 242, 254, 0.1) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(0, 242, 254, 0.1) 1px, transparent 1px);
          background-size: 100% 100%, 30px 30px, 30px 30px;
          border-bottom: 1px solid rgba(0, 242, 254, 0.3);
          box-shadow: 0 15px 35px -10px rgba(0, 242, 254, 0.2);
        }
        
        .vibrant-text {
          /* Bright Cyan to Neon Pink/Purple Gradient */
          background: linear-gradient(to right, #00f2fe, #4facfe, #f093fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 25px rgba(0, 242, 254, 0.6);
        }
      `}</style>

      <header className="tech-header" style={{ padding: '8rem 1rem 4rem', textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="vibrant-text" style={{ fontSize: 'clamp(2.5rem, 12vw, 4rem)', fontWeight: '900', letterSpacing: '-2px', margin: '0 0 1rem 0' }}>
          Nilckson<span style={{ color: '#00f2fe', WebkitTextFillColor: '#00f2fe' }}>Tech</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#f8fafc', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', textShadow: '0 2px 5px #000' }}>
          Building Systems, Securing Networks, and Empowering Developers.
        </p>
      </header>
      
      <section style={{ padding: '0 1.5rem 6rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <a href="/systems" className="neon-card">
            <h3 style={{ color: '#00f2fe', fontSize: '1.5rem', margin: '0 0 0.75rem 0' }}>System Architecture →</h3>
            <p style={{ color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>Custom web application development and robust network infrastructure setup.</p>
          </a>
          <a href="/cybersecurity" className="neon-card">
            <h3 style={{ color: '#00f2fe', fontSize: '1.5rem', margin: '0 0 0.75rem 0' }}>Cybersecurity →</h3>
            <p style={{ color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>Advanced threat hunting, network auditing, and proactive security solutions.</p>
          </a>
          <div className="neon-card">
            <h3 style={{ color: '#f093fb', fontSize: '1.5rem', margin: '0 0 0.75rem 0' }}>Tech Courses</h3>
            <p style={{ color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>Comprehensive ICT training covering networking, graphic design, and coding fundamentals.</p>
          </div>
          <div className="neon-card">
            <h3 style={{ color: '#f093fb', fontSize: '1.5rem', margin: '0 0 0.75rem 0' }}>Merchandise Store</h3>
            <p style={{ color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>Exclusive, high-quality apparel and gear designed for the tech community.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
