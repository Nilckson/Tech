export default function Systems() {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', padding: '0' }}>
      
      {/* Professional Navigation */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
          Nilckson<span style={{ color: '#38bdf8' }}>Tech</span>
        </div>
        <a href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>← Return Home</a>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '6rem 5%', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
          Enterprise-Grade <br/>System Architecture
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#94a3b8', marginBottom: '3rem', lineHeight: '1.6' }}>
          We design, build, and deploy high-performance web applications and resilient network infrastructures tailored for scale.
        </p>
      </header>

      {/* Services Cards */}
      <section style={{ padding: '0 5% 6rem', display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ backgroundColor: '#1e293b', padding: '2.5rem', borderRadius: '12px', border: '1px solid #334155', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#38bdf8', marginBottom: '1rem', marginTop: '0' }}>Web Application Development</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0' }}>Leveraging modern frameworks to deliver responsive, dynamic, and highly secure user experiences.</p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '2.5rem', borderRadius: '12px', border: '1px solid #334155', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#38bdf8', marginBottom: '1rem', marginTop: '0' }}>Infrastructure & Networking</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0' }}>Designing distributed systems and secure network topologies to ensure maximum uptime and data integrity.</p>
        </div>

      </section>
    </main>
  );
}
