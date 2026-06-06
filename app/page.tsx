export default function Courses() {
  return (
    <main style={{ padding: '0', margin: '0' }}>
      
      {/* Navigation */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px', color: '#fff' }}>
          Nilckson<span style={{ color: '#00f2fe' }}>Tech</span>
        </div>
        <a href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>← Return Home</a>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '4rem 5%', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="neon-text" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', fontWeight: '900', lineHeight: '1.2', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
          Tech Courses & Training
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', marginBottom: '3rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Comprehensive ICT training covering networking, offensive security, full-stack development, database management, and software engineering.
        </p>
      </header>

      {/* Course Cards with Link Placeholders */}
      <section style={{ padding: '0 5% 6rem', display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Cybersecurity */}
        <div className="neon-card">
          <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Cybersecurity & Ethical Hacking</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 1.5rem 0' }}>Master offensive security, network auditing, Kali Linux environments, and advanced threat hunting techniques.</p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ padding: '0.6rem 1.2rem', background: 'rgba(0, 242, 254, 0.1)', border: '1px solid #00f2fe', borderRadius: '6px', color: '#00f2fe', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>
              ▶ Video Module (Soon)
            </a>
            <a href="#" style={{ padding: '0.6rem 1.2rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>
              📄 Read Article
            </a>
          </div>
        </div>

        {/* Java Programming */}
        <div className="neon-card">
          <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Java Programming</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 1.5rem 0' }}>Learn core object-oriented programming concepts, data structures, and robust application development using Java.</p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ padding: '0.6rem 1.2rem', background: 'rgba(0, 242, 254, 0.1)', border: '1px solid #00f2fe', borderRadius: '6px', color: '#00f2fe', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>
              ▶ Video Module (Soon)
            </a>
            <a href="#" style={{ padding: '0.6rem 1.2rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>
              📄 Read Article
            </a>
          </div>
        </div>

        {/* SQL Databases */}
        <div className="neon-card">
          <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Database Management & SQL</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 1.5rem 0' }}>Master relational database design, complex data querying, schema structuring, and secure data management.</p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ padding: '0.6rem 1.2rem', background: 'rgba(0, 242, 254, 0.1)', border: '1px solid #00f2fe', borderRadius: '6px', color: '#00f2fe', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>
              ▶ Video Module (Soon)
            </a>
            <a href="#" style={{ padding: '0.6rem 1.2rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>
              📄 Read Article
            </a>
          </div>
        </div>

        {/* Web Engineering */}
        <div className="neon-card">
          <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Modern Web Engineering</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 1.5rem 0' }}>Learn to build responsive, dynamic web applications using modern frameworks like React, Next.js, and Tailwind CSS.</p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ padding: '0.6rem 1.2rem', background: 'rgba(0, 242, 254, 0.1)', border: '1px solid #00f2fe', borderRadius: '6px', color: '#00f2fe', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>
              ▶ Video Module (Soon)
            </a>
            <a href="#" style={{ padding: '0.6rem 1.2rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>
              📄 Read Article
            </a>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="neon-card">
          <h3 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem', marginTop: '0' }}>Graphic Design & UI/UX</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 1.5rem 0' }}>Develop an eye for design. Learn digital branding, layout structuring, and modern user interface principles.</p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ padding: '0.6rem 1.2rem', background: 'rgba(0, 242, 254, 0.1)', border: '1px solid #00f2fe', borderRadius: '6px', color: '#00f2fe', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>
              ▶ Video Module (Soon)
            </a>
            <a href="#" style={{ padding: '0.6rem 1.2rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>
              📄 Read Article
            </a>
          </div>
        </div>

      </section>
      
    </main>
  );
      }
