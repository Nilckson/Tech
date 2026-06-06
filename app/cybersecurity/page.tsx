export default function Cybersecurity() {
  return (
    <main style={{ padding: '2rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <a href="/" style={{ color: '#00f2fe', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '2rem' }}>← Back to Home</a>
        
        <h1 className="vibrant-text" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', marginTop: '0', marginBottom: '1rem' }}>Cybersecurity Services</h1>
        <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '3rem', lineHeight: '1.6' }}>Protecting infrastructure through proactive offense and defense.</p>
        
        <div>
          <h2 style={{ color: '#f8fafc', borderBottom: '2px solid rgba(0, 242, 254, 0.3)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>Our Capabilities</h2>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div className="neon-card">
              <h3 style={{ color: '#00f2fe', marginTop: 0, marginBottom: '0.5rem' }}>Advanced Threat Hunting</h3>
              <p style={{ color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>Identifying and isolating hidden threats within your network before they execute.</p>
            </div>

            <div className="neon-card">
              <h3 style={{ color: '#00f2fe', marginTop: 0, marginBottom: '0.5rem' }}>Network Auditing</h3>
              <p style={{ color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>Comprehensive vulnerability scanning and architecture reviews to ensure maximum resilience.</p>
            </div>

            <div className="neon-card">
              <h3 style={{ color: '#00f2fe', marginTop: 0, marginBottom: '0.5rem' }}>Offensive Security</h3>
              <p style={{ color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>Controlled penetration testing using industry-standard environments to patch exploits.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
