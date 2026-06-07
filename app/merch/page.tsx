"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// --- Types ---
interface Product {
  id: string;
  name: string;
  price: number;
  tag: string;
  gradient: string;
  desc: string;
  specs: string[];
}

// --- Data ---
const products: Product[] = [
  {
    id: "pc-02",
    name: "Quantum Core RTX 4090 Rig",
    price: 3499.00,
    tag: "Hardware",
    gradient: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
    desc: "Custom liquid-cooled gaming and rendering beast.",
    specs: ["Intel Core i9-14900K", "NVIDIA RTX 4090 24GB", "64GB DDR5 6000MHz RAM", "Custom Hardline Liquid Cooling Loop"]
  },
  {
    id: "pc-01",
    name: "EliteBook 840 G8 (CyberSec Edition)",
    price: 850.00,
    tag: "Hardware",
    gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    desc: "Fully optimized for network auditing and heavy workloads.",
    specs: ["11th Gen Intel Core i7", "32GB RAM / 1TB NVMe SSD", "Pre-configured dual-boot (Kali/Windows 11)", "Grade A Refurbished"]
  },
  {
    id: "sec-01",
    name: "Flipper Zero",
    price: 169.00,
    tag: "Offensive Sec",
    gradient: "linear-gradient(135deg, #ff8c00 0%, #ff0080 100%)",
    desc: "Portable multi-tool for pentesters and geeks.",
    specs: ["Sub-1 GHz Transceiver", "125kHz RFID & NFC", "Infrared Transmitter/Receiver", "Open-source firmware"]
  },
  {
    id: "sec-03",
    name: "O.MG Cable Elite",
    price: 180.00,
    tag: "Offensive Sec",
    gradient: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
    desc: "Looks like a charging cable, packs a hidden web server and payload engine.",
    specs: ["Covert web server", "Wi-Fi payload trigger", "Keystroke injection", "Standard USB-C appearance"]
  },
  {
    id: "sec-02",
    name: "Hak5 USB Rubber Ducky",
    price: 79.99,
    tag: "Offensive Sec",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    desc: "The ultimate keystroke injection tool.",
    specs: ["Disguised as standard USB drive", "DuckyScript compatible", "Multi-OS payload execution", "MicroSD storage"]
  },
  {
    id: "sec-04",
    name: "Hardware Data Diode",
    price: 250.00,
    tag: "Defensive Sec",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    desc: "Ensures one-way physical data transfer to protect highly isolated networks.",
    specs: ["Optical isolation", "1Gbps throughput", "No physical return path", "Anodized aluminum chassis"]
  },
  {
    id: "router-01",
    name: "Gigabit Dual-Band Wi-Fi 6 Router",
    price: 145.00,
    tag: "Networking",
    gradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
    desc: "Zero-latency mesh node for home labs and gaming.",
    specs: ["Wi-Fi 6 (802.11ax) Standard", "Up to 5400 Mbps Total Bandwidth", "WPA3 Security Protocol", "4x Gigabit LAN Ports"]
  },
  {
    id: "book-01",
    name: "Digital Souls (Hardcover)",
    price: 29.99,
    tag: "Books",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    desc: "A deep dive into how our online presence shapes our modern identities.",
    specs: ["First Edition Hardcover", "342 Pages", "Foreword by top cybersecurity experts", "Premium matte dust jacket"]
  },
  {
    id: "mouse-01",
    name: "Stealth Ergonomic Mouse",
    price: 65.00,
    tag: "Accessories",
    gradient: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    desc: "Ultra-quiet mechanical clicks, multi-device Bluetooth.",
    specs: ["PixArt optical sensor", "Omron silent switches", "Bluetooth & 2.4GHz Wireless", "USB-C fast charging"]
  },
  {
    id: "bag-01",
    name: "Faraday Tech Backpack",
    price: 85.00,
    tag: "Gear",
    gradient: "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)",
    desc: "Waterproof exterior with an RFID-blocking interior pocket.",
    specs: ["25L total capacity", "RFID-blocking main compartment", "Water-resistant YKK zippers", "Fits up to 16-inch laptops"]
  },
  {
    id: "hoodie-01",
    name: "Zero Trust Premium Hoodie",
    price: 45.00,
    tag: "Apparel",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    desc: "Heavyweight cotton. 'Never Trust, Always Verify' embroidered.",
    specs: ["400gsm Heavyweight Cotton", "Drop-shoulder streetwear fit", "Embroidered sleeve detailing", "Pre-shrunk"]
  },
  {
    id: "tee-01",
    name: "Localhost 127.0.0.1 Tee",
    price: 25.00,
    tag: "Apparel",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    desc: "Ultra-soft breathable fabric for deep work.",
    specs: ["100% Organic Cotton", "Pre-shrunk", "Tagless collar", "Highly breathable"]
  }
];

export default function Storefront() {
  const [cartCount, setCartCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showToast, setShowToast] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "unset";
  }, [selectedProduct]);

  const categories = ["All", ...Array.from(new Set(products.map(p => p.tag)))];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.tag === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3s
    setSelectedProduct(null); // Close modal after adding
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #F9FAFB; color: #111827; font-family: 'Plus Jakarta Sans', sans-serif; }
        
        .multi-color-bg {
          position: absolute; top: 0; left: 0; right: 0; height: 600px;
          background: radial-gradient(circle at 15% 50%, rgba(102, 126, 234, 0.08), transparent 25%),
                      radial-gradient(circle at 85% 30%, rgba(79, 172, 254, 0.08), transparent 25%),
                      radial-gradient(circle at 50% 80%, rgba(67, 233, 123, 0.08), transparent 25%);
          z-index: 0; pointer-events: none;
        }

        .store-card {
          background: #ffffff; border: 1px solid rgba(0,0,0,0.05);
          border-radius: 20px; padding: 1.5rem; cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          display: flex; flex-direction: column; height: 100%;
        }
        .store-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
          border-color: #667eea;
        }

        .search-input {
          width: 100%; max-width: 500px; padding: 1rem 1.5rem;
          border-radius: 100px; border: 1px solid #e5e7eb;
          font-family: inherit; font-size: 1rem;
          outline: none; transition: all 0.2s;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
        .search-input:focus { border-color: #667eea; box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1); }

        .category-pill {
          padding: 0.6rem 1.4rem; border-radius: 100px;
          font-weight: 600; font-size: 0.85rem;
          cursor: pointer; transition: all 0.2s;
          border: 1px solid #e5e7eb; background: white;
        }
        .category-pill.active { background: #111827; color: white; border-color: #111827; }

        .toast {
          position: fixed; bottom: 2rem; right: 2rem;
          background: #111827; color: white; padding: 1rem 1.5rem;
          border-radius: 12px; z-index: 1000;
          animation: slideUp 0.3s ease-out;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          display: flex; align-items: center; gap: 0.5rem;
        }

        @keyframes slideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Added to cart!
        </div>
      )}

      {/* Modal Overlay */}
      {selectedProduct && (
        <div className="modal-overlay" 
             style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
             onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" 
               style={{ background: "white", width: "100%", maxWidth: "800px", borderRadius: "24px", overflow: "hidden", position: "relative", animation: "slideUp 0.4s ease-out" }}
               onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedProduct(null)}
              style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "rgba(255,255,255,0.2)", border: "none", width: "32px", height: "32px", borderRadius: "50%", cursor: "pointer", zIndex: 10 }}
            >✕</button>
            
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 350px", background: selectedProduct.gradient, minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
                 <h2 style={{ color: "white", fontSize: "3rem", opacity: 0.8, fontFamily: 'Outfit' }}>{selectedProduct.name.split(' ')[0]}</h2>
              </div>
              <div style={{ flex: "1 1 350px", padding: "2.5rem" }}>
                <span style={{ color: "#667eea", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase" }}>{selectedProduct.tag}</span>
                <h2 style={{ fontSize: "2rem", margin: "0.5rem 0", fontFamily: 'Outfit' }}>{selectedProduct.name}</h2>
                <p style={{ color: "#4b5563", lineHeight: 1.6, marginBottom: "1.5rem" }}>{selectedProduct.desc}</p>
                
                <div style={{ marginBottom: "2rem" }}>
                  <p style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>TECH SPECS</p>
                  {selectedProduct.specs.map((s, i) => (
                    <div key={i} style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "0.3rem" }}>• {s}</div>
                  ))}
                </div>

                <button 
                  onClick={addToCart}
                  style={{ width: "100%", background: "#111827", color: "white", padding: "1rem", borderRadius: "12px", border: "none", fontWeight: 700, cursor: "pointer", fontSize: "1rem" }}
                >
                  Add to Cart — ${selectedProduct.price.toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main style={{ minHeight: "100vh", position: "relative", paddingBottom: "5rem" }}>
        <div className="multi-color-bg"></div>
        
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
          <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem 0" }}>
            <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: "1.5rem" }}>
              Nilckson<span style={{ color: "#667eea" }}>Store.</span>
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <button style={{ background: "none", border: "1px solid #e5e7eb", padding: "0.5rem 1.2rem", borderRadius: "100px", fontWeight: 600, cursor: "pointer" }}>Login</button>
              <div style={{ position: "relative" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                {cartCount > 0 && (
                  <span style={{ position: "absolute", top: -8, right: -8, background: "#ef4444", color: "white", fontSize: "0.7rem", width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>{cartCount}</span>
                )}
              </div>
            </div>
          </nav>

          <header style={{ textAlign: "center", padding: "4rem 0" }}>
            <h1 style={{ fontFamily: 'Outfit', fontSize: "clamp(2.5rem, 8vw, 4rem)", lineHeight: 1.1, fontWeight: 800, marginBottom: "1.5rem" }}>
              Upgrade Your <br/>
              <span style={{ background: "linear-gradient(90deg, #667eea, #764ba2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Hardware.</span>
            </h1>
            <input 
              className="search-input"
              placeholder="Search gear, hardware, or apparel..."
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
                    <span style={{ color: "white", fontWeight: 800, fontSize: "1.2rem", opacity: 0.5 }}>{product.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Outfit', fontSize: "1.2rem", marginBottom: "0.5rem" }}>{product.name}</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.9rem", flexGrow: 1, marginBottom: "1rem" }}>{product.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>${product.price.toFixed(2)}</span>
                    <button style={{ background: "#f3f4f6", border: "none", padding: "0.5rem 1rem", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}>View</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "4rem", color: "#9ca3af" }}>
              <p>No products found matching your search.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
                        }
