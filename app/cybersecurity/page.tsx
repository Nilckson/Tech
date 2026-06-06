export default function Cybersecurity() {
  return (
    <main style={{ fontFamily: 'sans-serif', color: '#111', lineHeight: '1.6', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <a href="/" style={{ color: '#0056b3', textDecoration: 'none' }}>← Back to Home</a>
        
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Cybersecurity Services</h1>
        <p style={{ fontSize: '1.2rem', color: '#444' }}>Protecting infrastructure through proactive offense and defense.</p>
        
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ borderBottom: '2px solid #111', paddingBottom: '0.5rem' }}>Our Capabilities</h2>
          
          <div style={{ margin: '2rem 0' }}>
            <h3>Advanced Threat Hunting</h3>
            <p>Identifying and isolating hidden threats within your network before they execute.</p>
          </div>

          <div style={{ margin: '2rem 0' }}>
            <h3>Network Auditing</h3>
            <p>Comprehensive vulnerability scanning and architecture reviews to ensure maximum resilience.</p>
          </div>

          <div style={{ margin: '2rem 0' }}>
            <h3>Offensive Security</h3>
            <p>Controlled penetration testing using industry-standard environments to patch exploits.</p>
          </div>
        </div>

      </div>
    </main>
  );
}
