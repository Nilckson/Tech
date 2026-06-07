"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: "hoodie-01",
    name: "Zero Trust Premium Hoodie",
    price: 45.00,
    tag: "Apparel",
    gradient: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)",
    desc: "Heavyweight cotton. 'Never Trust, Always Verify' embroidered on the sleeve."
  },
  {
    id: "tee-01",
    name: "Localhost 127.0.0.1 Tee",
    price: 25.00,
    tag: "Best Seller",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    desc: "Ultra-soft breathable fabric for deep work."
  },
  {
    id: "mug-01",
    name: "Sysadmin Tears Coffee Mug",
    price: 15.00,
    tag: "Accessories",
    gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    desc: "Premium ceramic. Essential for late-night debugging sessions."
  },
  {
    id: "cap-01",
    name: "Root Access Snapback",
    price: 28.00,
    tag: "Headwear",
    gradient: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)",
    desc: "Minimalist root hash symbol embroidered. Adjustable fit."
  }
];

export default function Storefront() {
  const [cart, setCart] = useState<number>(0);

  const addToCart = () => {
    setCart((prev) => prev + 1);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #F9FAFB; color: #111827; }
        
        .multi-color-bg {
          position: absolute;
          top: 0; left: 0; right: 0; height: 500px;
          background: radial-gradient(circle at 15% 50%, rgba(255, 154, 158, 0.15), transparent 25%),
                      radial-gradient(circle at 85% 30%, rgba(161, 140, 209, 0.15), transparent 25%),
                      radial-gradient(circle at 50% 80%, rgba(132, 250, 176, 0.15), transparent 25%);
          z-index: 0;
          pointer-events: none;
        }

        .store-card {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 20px;
          padding: 1.2rem;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
        }
        
        .store-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
          border-color: rgba(0,0,0,0.1);
        }

        .btn-add {
          background: #111827;
          color: #fff;
          border: none;
          padding: 0.8rem;
          border-radius: 12px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.1s, background 0.2s;
          margin-top: auto;
        }
        .btn-add:active { transform: scale(0.97); }
        .btn-add:hover { background: #374151; }

        .btn-login {
          background: transparent;
          color: #111827;
          border: 2px solid #e5e7eb;
          padding: 0.5rem 1.2rem;
          border-radius: 100px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-login:hover { border-color: #111827; }
      `}</style>

      <main style={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
        <div className="multi-color-bg"></div>
        
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)" }}>
          
          {/* Store Navigation */}
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2rem 0" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.02em", color: "#111827" }}>
                Nilckson<span style={{ color: "#a18cd1" }}>Store.</span>
              </span>
            </Link>
            
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <button className="btn-login">Login</button>
              
              {/* Cart Icon with Badge */}
              <div style={{ position: "relative", cursor: "pointer", padding: "0.5rem" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {cart > 0 && (
                  <span style={{ position: "absolute", top: "0", right: "0", background: "#f87171", color: "#fff", fontSize: "0.7rem", fontWeight: "bold", width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    {cart}
                  </span>
                )}
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <header style={{ padding: "4rem 0", textAlign: "center" }}>
            <span style={{ display: "inline-block", background: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)", padding: "0.4rem 1rem", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 600, color: "#991b1b", fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: "1.5rem" }}>
              Premium Collection
            </span>
            <h1 style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              Upgrade Your <br />
              <span style={{ background: "linear-gradient(to right, #a18cd1 0%, #fbc2eb 100%)", WebkitBackgroundClip: "text", color: "transparent" }}>Hardware.</span>
            </h1>
          </header>

          {/* Product Grid */}
          <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem", paddingBottom: "6rem" }}>
            {products.map((p) => (
              <div key={p.id} className="store-card">
                
                {/* Premium Image Placeholder */}
                <div style={{ width: "100%", height: "240px", borderRadius: "14px", background: p.gradient, marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: "rgba(255,255,255,0.7)", fontSize: "1.5rem", mixBlendMode: "overlay" }}>
                    {p.name.split(" ")[0]}
                  </span>
                </div>
                
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                  {p.tag}
                </span>
                
                <h3 style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "1.25rem", margin: "0.5rem 0" }}>
                  {p.name}
                </h3>
                
                <p style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                  {p.desc}
                </p>
                
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", gap: "1rem" }}>
                  <span style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: "1.4rem" }}>
                    ${p.price.toFixed(2)}
                  </span>
                  <button onClick={addToCart} className="btn-add">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* Footer */}
          <footer style={{ borderTop: "1px solid #e5e7eb", padding: "2rem 0", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.85rem", color: "#6b7280" }}>
            <span style={{ fontWeight: 600, color: "#111827" }}>NILCKSON STORE</span>
            <span>© {new Date().getFullYear()}</span>
          </footer>
        </div>
      </main>
    </>
  );
}
