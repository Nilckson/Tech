export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* Hero Section */}
      <header style={{ padding: '6rem 2rem', textAlign: 'center', background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)', borderBottom: '1px solid #334155' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-1px', margin: '0 0 1rem 0' }}>
          Nilckson<span style={{ color: '#38bdf8' }}>Tech</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          Building Systems, Securing Networks, and Empowering Developers.
        </p>
      </header>
      
      {/* Ecosystem Grid */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem', color: '#e2e8f0', borderBottom: 'none' }}>Our Ecosystem</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          {/* Clickable Card 1 */}
          <a href="/systems" style={{ textDecoration: 'none', color: 'inherit', backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
            <h3 style={{ color: '#38bdf8', fontSize: '1.25rem', margin: '0 0 0.75rem 0' }}>System Architecture →</h3>
            <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>Custom web application development and robust network infrastructure setup.</p>
          </a>

          {/* Clickable Card 2 */}
          <a href="/cybersecurity" style={{ textDecoration: 'none', color: 'inherit', backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
            <h3 style={{ color: '#38bdf8', fontSize: '1.25rem', margin: '0 0 0.75rem 0' }}>Cybersecurity →</h3>
            <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>Advanced threat hunting, network auditing, and proactive security solutions.</p>
          </a>

          {/* Static Card 3 */}
          <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
            <h3 style={{ color: '#e2e8f0', fontSize: '1.25rem', margin: '0 0 0.75rem 0' }}>Tech Courses</h3>
            <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>Comprehensive ICT training covering networking, graphic design, and coding fundamentals.</p>
          </div>

          {/* Static Card 4 */}
          <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
            <h3 style={{ color: '#e2e8f0', fontSize: '1.25rem', margin: '0 0 0.75rem 0' }}>Merchandise Store</h3>
            <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>Exclusive, high-quality apparel and gear designed for the tech community.</p>
          </div>

        </div>
      </section>
    </main>
  );
}

