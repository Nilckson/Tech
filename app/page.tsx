export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', color: '#111', lineHeight: '1.6' }}>
      <header style={{ padding: '4rem 2rem', backgroundColor: '#f4f4f5', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Nilckson Tech</h1>
        <p style={{ fontSize: '1.2rem', color: '#444' }}>Building Systems, Securing Networks, and Empowering Developers.</p>
      </header>
      
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ borderBottom: '2px solid #111', paddingBottom: '0.5rem' }}>Our Ecosystem</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '1rem 0' }}><strong>System Architecture:</strong> Custom web application development and robust network infrastructure setup.</li>
          <li style={{ margin: '1rem 0' }}><strong>Cybersecurity:</strong> Advanced threat hunting, network auditing, and proactive security solutions.</li>
          <li style={{ margin: '1rem 0' }}><strong>Tech Courses:</strong> Comprehensive ICT training covering networking, graphic design, and coding fundamentals.</li>
          <li style={{ margin: '1rem 0' }}><strong>Merchandise Store:</strong> Exclusive, high-quality apparel and gear designed for the tech community.</li>
        </ul>
      </section>
    </main>
  );
}


