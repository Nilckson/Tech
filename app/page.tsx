export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', color: '#111', lineHeight: '1.6' }}>
      <header style={{ padding: '4rem 2rem', backgroundColor: '#f4f4f5', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Nilckson Tech Solutions</h1>
        <p style={{ fontSize: '1.2rem', color: '#444' }}>Expert Web Development & Secure IT Infrastructure.</p>
      </header>
      
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ borderBottom: '2px solid #111', paddingBottom: '0.5rem' }}>Core Services</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '1rem 0' }}><strong>Web Development:</strong> Responsive, high-performance web applications.</li>
          <li style={{ margin: '1rem 0' }}><strong>Cybersecurity & Networking:</strong> Infrastructure auditing, threat hunting, and secure systems.</li>
          <li style={{ margin: '1rem 0' }}><strong>Brand Design:</strong> Professional digital assets and identity creation.</li>
        </ul>
      </section>
    </main>
  );
}

