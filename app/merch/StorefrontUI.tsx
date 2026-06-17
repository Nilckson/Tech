 "use client";


import { useState, useEffect } from "react";

import Link from "next/link"; 
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  tag: string;
  gradient: string;
  specs: string[];
}

export default function StorefrontUI({ products }: { products: Product[] }) {
  const [cartCount, setCartCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "unset";
  }, [selectedProduct]);

  const categories = ["All", ...Array.from(new Set(products.map(p => p.tag)))];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.tag === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setSelectedProduct(null);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #04050a; color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; }
        
        .multi-color-bg {
          position: absolute; top: 0; left: 0; right: 0; height: 600px;
          background: radial-gradient(circle at 15% 50%, rgba(34, 211, 238, 0.08), transparent 25%),
                      radial-gradient(circle at 85% 30%, rgba(167, 139, 250, 0.08), transparent 25%),
                      radial-gradient(circle at 50% 80%, rgba(251, 191, 36, 0.08), transparent 25%);
          z-index: 0; pointer-events: none;
        }

        .store-card {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px; padding: 1.5rem; cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          display: flex; flex-direction: column; height: 100%;
        }
        .store-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
        }

        .search-input {
          width: 100%; max-width: 500px; padding: 1rem 1.5rem;
          border-radius: 100px; border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03); color: #fff;
          font-family: inherit; font-size: 1rem;
          outline: none; transition: all 0.2s;
        }
        .search-input:focus { border-color: #22d3ee; box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.1); }

        .category-pill {
          padding: 0.6rem 1.4rem; border-radius: 100px;
          font-weight: 600; font-size: 0.85rem; color: #a1a1aa;
          cursor: pointer; transition: all 0.2s;
          border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);
        }
        .category-pill.active { background: #fff; color: #04050a; border-color: #fff; }
        .category-pill:hover:not(.active) { color: #fff; border-color: rgba(255,255,255,0.2); }

        .toast {
          position: fixed; bottom: 2rem; right: 2rem;
          background: #fff; color: #04050a; padding: 1rem 1.5rem;
          border-radius: 12px; z-index: 1000;
          animation: slideUp 0.3s ease-out;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          display: flex; align-items: center; gap: 0.5rem; font-weight: 600;
        }

        @keyframes slideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}} />

      {showToast && (
        <div className="toast">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          System updated: Item secured.
        </div>
      )}

      {selectedProduct && (
        <div className="modal-overlay" 
             style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
             onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" 
               style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", width: "100%", maxWidth: "800px", borderRadius: "24px", overflow: "hidden", position: "relative", animation: "slideUp 0.4s ease-out" }}
               onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedProduct(null)}
              style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "rgba(255,255,255,0.1)", color: "#fff", border: "none", width: "32px", height: "32px", borderRadius: "50%", cursor: "pointer", zIndex: 10, transition: "background 0.2s" }}
            >✕</button>
            
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 350px", background: selectedProduct.gradient, minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
                 <h2 style={{ color: "white", fontSize: "3rem", opacity: 0.8, fontFamily: 'Outfit', textAlign: "center" }}>{selectedProduct.name.split(' ')[0]}</h2>
              </div>
              <div style={{ flex: "1 1 350px", padding: "2.5rem" }}>
                <span style={{ color: "#a78bfa", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{selectedProduct.tag}</span>
                <h2 style={{ fontSize: "2rem", margin: "0.5rem 0", fontFamily: 'Outfit', color: "#fff" }}>{selectedProduct.name}</h2>
                <p style={{ color: "#a1a1aa", lineHeight: 1.6, marginBottom: "1.5rem" }}>{selectedProduct.description}</p>
                
                <div style={{ marginBottom: "2rem" }}>
                  <p style={{ fontWeight: 700, fontSize: "0.8rem", marginBottom: "0.5rem", color: "#52525b", letterSpacing: "0.1em" }}>SYSTEM SPECS</p>
                  {selectedProduct.specs.map((s, i) => (
                    <div key={i} style={{ fontSize: "0.9rem", color: "#d4d4d8", marginBottom: "0.4rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#22d3ee" }}></span> {s}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={addToCart}
                  style={{ width: "100%", background: "#fff", color: "#04050a", padding: "1rem", borderRadius: "12px", border: "none", fontWeight: 800, cursor: "pointer", fontSize: "1rem", transition: "transform 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  Deploy to Cart — ${selectedProduct.price.toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ paddingBottom: "5rem" }}>
        <div className="multi-color-bg"></div>
        
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
          <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem 0" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: "1.5rem", color: "#fff" }}>
                Nilckson<span style={{ color: "#a1a1aa" }}>Store.</span>
              </span>
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ position: "relative", cursor: "pointer" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                {cartCount > 0 && (
                  <span style={{ position: "absolute", top: -8, right: -8, background: "#22d3ee", color: "#04050a", fontSize: "0.7rem", width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>{cartCount}</span>
                )}
              </div>
            </div>
          </nav>

          <header style={{ textAlign: "center", padding: "4rem 0" }}>
            <h1 style={{ fontFamily: 'Outfit', fontSize: "clamp(2.5rem, 8vw, 4rem)", lineHeight: 1.1, fontWeight: 800, marginBottom: "1.5rem" }}>
              Acquire Premium <br/>
              <span style={{ background: "linear-gradient(90deg, #22d3ee, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Hardware.</span>
            </h1>
            <input 
              className="search-input"
              placeholder="Query systems, defensive gear, or apparel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </header>

          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >{cat}</button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {filteredProducts.map(product => (
                <div key={product.id} className="store-card" onClick={() => setSelectedProduct(product)}>
                  <div style={{ height: "180px", borderRadius: "12px", background: product.gradient, marginBottom: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "white", fontWeight: 800, fontSize: "1.2rem", opacity: 0.5, letterSpacing: "0.1em", textTransform: "uppercase" }}>{product.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Outfit', fontSize: "1.2rem", marginBottom: "0.5rem" }}>{product.name}</h3>
                  <p style={{ color: "#a1a1aa", fontSize: "0.9rem", flexGrow: 1, marginBottom: "1rem" }}>{product.description}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#22d3ee" }}>${product.price.toFixed(2)}</span>
                    <button style={{ background: "rgba(255,255,255,0.05)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", padding: "0.5rem 1rem", borderRadius: "8px", fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}>Inspect</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "4rem", color: "#52525b" }}>
              <p>No query matches found in the database.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}