"use client";

import Link from "next/link";
import SocialBar from "../components/SocialIcons";

const products = [
  {
    id: "hoodie-01",
    name: "Zero Trust Premium Hoodie",
    price: "$45.00",
    tag: "Apparel",
    accent: "#00f2fe",
    desc: "Heavyweight cotton. 'Never Trust, Always Verify' embroidered on the sleeve."
  },
  {
    id: "tee-01",
    name: "Localhost 127.0.0.1 Tee",
    price: "$25.00",
    tag: "Best Seller",
    accent: "#34d399",
    desc: "There is no place like 127.0.0.1. Ultra-soft breathable fabric for deep work."
  },
  {
    id: "mug-01",
    name: "Sysadmin Tears Coffee Mug",
    price: "$15.00",
    tag: "Accessories",
    accent: "#a78bfa",
    desc: "Matte black ceramic mug. Absolutely essential for late-night debugging sessions."
  },
  {
    id: "cap-01",
    name: "Root Access Snapback",
    price: "$28.00",
    tag: "Headwear",
    accent: "#f472b6",
    desc: "Minimalist root hash symbol embroidered on the front. Adjustable fit."
  }
];

export default function MerchPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0b0f19; }
        .product-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .product-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.04);
        }
        .product-image-placeholder {
          width: 100%;
          height: 200px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: #3a5468;
          opacity: 0.5;
        }
      `}</style>

      <main style={{ minHeight: "100vh", background: "#0b0f19", color: "#fff", overflowX: "hidden" }}>
        
        {/* Navigation Bar */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto", padding: "0 clamp(1rem, 5vw, 2rem)" }}>
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 0" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.1em", color: "#00f2fe", textTransform: "uppercase" }}>
                NilcksonTech
              </span>
            </Link>
            <Link href="/" style={{ fontSize: "0.9rem", color: "#94a3b8", textDecoration: "none", fontFamily: '"DM Sans", sans-serif' }}>
              ← Back
            </Link>
          </nav>

          {/* Hero Section */}
          <header style={{ padding: "4rem 0 3rem" }}>
            <h1 style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: "clamp(2rem, 6vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#ffffff", marginBottom: "1rem" }}>
              Tech-Inspired Gear.
            </h1>
            <p style={{ fontSize: "1rem", color: "#94a3b8", lineHeight: 1.6, fontFamily: '"DM Sans", sans-serif', maxWidth: "500px" }}>
              Minimalist apparel and accessories built for developers, architects, and cybersecurity professionals.
            </p>
          </header>

          {/* Product Grid */}
          <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", paddingBottom: "4rem" }}>
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div 
                  className="product-image-placeholder" 
                  style={{ background: `linear-gradient(135deg, ${product.accent}15, transparent)` }}
                >
                  [ Product Image ]
                </div>
                
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", color: product.accent, textTransform: "uppercase", fontFamily: '"Syne", sans-serif' }}>
                      {product.tag}
                    </span>
                    <span style={{ fontFamily: '"Syne", sans-serif', fontWeight: 700, color: "#fff" }}>
                      {product.price}
                    </span>
                  </div>
                  
                  <h3 style={{ fontFamily: '"Syne", sans-serif', fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem", color: "#fff" }}>
                    {product.name}
                  </h3>
                  
                  <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                    {product.desc}
                  </p>
                  
                  <button style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "#ffffff", color: "#000000", border: "none", fontFamily: '"Syne", sans-serif', fontWeight: 700, cursor: "not-allowed", opacity: 0.8 }}>
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* Footer & Socials */}
          <SocialBar />
          <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "1.5rem 0 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
            <span style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.1em", color: "#94a3b8", textTransform: "uppercase" }}>
              NILCKSONTECH
            </span>
            <span style={{ fontSize: "0.8rem", color: "#94a3b8", fontFamily: '"DM Sans", sans-serif' }}>
              © {new Date().getFullYear()} · All rights reserved
            </span>
          </footer>
        </div>
      </main>
    </>
  );
}
