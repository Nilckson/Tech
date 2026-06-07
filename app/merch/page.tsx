"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
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
    id: "hoodie-02",
    name: "SysAdmin Zip-Up Hoodie",
    price: 55.00,
    tag: "Apparel",
    gradient: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
    desc: "Premium fleece zip-up. Features a subtle embroidered terminal prompt.",
    specs: ["Premium fleece blend", "YKK front zipper", "Split kangaroo pocket", "Ribbed cuffs and hem"]
  },
  {
    id: "hoodie-03",
    name: "Linux Core Heavy Hoodie",
    price: 50.00,
    tag: "Apparel",
    gradient: "linear-gradient(135deg, #0ba360 0%, #3cba92 100%)",
    desc: "Oversized street fit. Designed for ultimate comfort during long sessions.",
    specs: ["450gsm Cotton/Poly blend", "Oversized fit", "Dropped shoulders", "Deep kangaroo pocket"]
  },
  {
    id: "windbreaker-01",
    name: "Packet Sniffer Windbreaker",
    price: 65.00,
    tag: "Apparel",
    gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    desc: "Lightweight, water-resistant jacket with a reflective digital camo pattern.",
    specs: ["100% Polyester shell", "Water and wind resistant", "Breathable mesh lining", "Packable design"]
  },
  {
    id: "tee-01",
    name: "Localhost 127.0.0.1 Tee",
    price: 25.00,
    tag: "Apparel",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    desc: "Ultra-soft breathable fabric for deep work.",
    specs: ["100% Organic Cotton", "Pre-shrunk", "Tagless collar", "Highly breathable"]
  },
  {
    id: "mat-01",
    name: "OSI Model Desk Mat",
    price: 35.00,
    tag: "Workspace",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    desc: "Extra large, anti-fray mechanical keyboard mat.",
    specs: ["900mm x 400mm dimensions", "Non-slip rubber base", "Anti-fray stitched edges", "High-res OSI model diagram"]
  },
  {
    id: "mat-02",
    name: "Dark Mode Topo Desk Mat",
    price: 38.00,
    tag: "Workspace",
    gradient: "linear-gradient(135deg, #434343 0%, #000000 100%)",
    desc: "Ultra-smooth glide surface featuring a sleek, topographic map design.",
    specs: ["900mm x 400mm dimensions", "Micro-woven surface", "Anti-slip rubber base", "Stitched seamless edges"]
  },
  {
    id: "mug-01",
    name: "Sysadmin Tears Coffee Mug",
    price: 15.00,
    tag: "Accessories",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    desc: "Premium ceramic. Essential for late-night debugging sessions.",
    specs: ["15oz capacity", "High-quality ceramic", "Microwave safe", "Dishwasher safe matte black finish"]
  },
  {
    id: "flask-01",
    name: "Encrypted Thermos",
    price: 30.00,
    tag: "Drinkware",
    gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    desc: "Matte black stainless steel. Keeps your coffee hot for 12 hours.",
    specs: ["Double-wall vacuum insulation", "18/8 food-grade stainless steel", "24h cold / 12h hot", "Leakproof insulated lid"]
  },
  {
    id: "cap-01",
    name: "Root Access Snapback",
    price: 28.00,
    tag: "Headwear",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    desc: "Minimalist root hash symbol embroidered. Adjustable fit.",
    specs: ["100% Cotton twill", "Flat bill design", "Adjustable snap closure", "High-quality 3D embroidery"]
  },
  {
    id: "beanie-01",
    name: "Sudo Beanie",
    price: 22.00,
    tag: "Headwear",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    desc: "Warm knit beanie. Because sometimes you just need to force things to work.",
    specs: ["100% hypoallergenic acrylic", "Cuffed design", "One size fits all", "Woven front tag"]
  },
  {
    id: "stickers-01",
    name: "Terminal Sticker Pack",
    price: 12.00,
    tag: "Accessories",
    gradient: "linear-gradient(135deg, #0ba360 0%, #3cba92 100%)",
    desc: "15 high-quality vinyl stickers. Bash commands and code snippets.",
    specs: ["15 unique designs", "Die-cut vinyl", "Weather and UV proof", "Residue-free removal"]
  },
  {
    id: "lanyard-01",
    name: "USB/YubiKey Leather Lanyard",
    price: 18.00,
    tag: "Accessories",
    gradient: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
    desc: "Premium leather strap with a quick-release metal clasp for security keys.",
    specs: ["Premium full-grain leather", "Heavy-duty metal clasp", "Breakaway safety clip", "18-inch length"]
  },
  {
    id: "art-01",
    name: "Neon Metropolis Canvas",
    price: 120.00,
    tag: "Decor",
    gradient: "linear-gradient(135deg, #b224ef 0%, #7579ff 100%)",
    desc: "Premium framed canvas art piece featuring a futuristic cyberpunk cityscape.",
    specs: ["24x36 inch dimensions", "Fade-resistant archival ink", "1.5-inch deep wood frame", "Mounting hardware included"]
  }
];


export default function Storefront() {
  const [cart, setCart] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const addToCart = () => {
    setCart((prev) => prev + 1);
    setSelectedProduct(null); // Close modal after adding to cart
  };

  const categories = ["All", ...Array.from(new Set(products.map(p => p.tag)))];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.tag === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #F9FAFB; color: #111827; }
        
        .multi-color-bg {
          position: absolute; top: 0; left: 0; right: 0; height: 500px;
          background: radial-gradient(circle at 15% 50%, rgba(102, 126, 234, 0.15), transparent 25%),
                      radial-gradient(circle at 85% 30%, rgba(79, 172, 254, 0.15), transparent 25%),
                      radial-gradient(circle at 50% 80%, rgba(67, 233, 123, 0.15), transparent 25%);
          z-index: 0; pointer-events: none;
        }

        .store-card {
          background: #ffffff; border: 1px solid rgba(0,0,0,0.05);
          border-radius: 20px; padding: 1.2rem; cursor: pointer;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
          display: flex; flex-direction: column;
        }
        .store-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
          border-color: #667eea;
        }

        .btn-login {
          background: transparent; color: #111827;
          border: 2px solid #e5e7eb; padding: 0.5rem 1.2rem;
          border-radius: 100px; font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600; cursor: pointer; transition: all 0.2s;
        }
        .btn-login:hover { border-color: #111827; }

        .search-input {
          width: 100%; max-width: 400px; padding: 0.8rem 1.5rem;
          border-radius: 100px; border: 1px solid #e5e7eb;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem;
          outline: none; transition: border-color 0.2s, box-shadow 0.2s;
        }
        .search-input:focus { border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }

        .category-pill {
          padding: 0.5rem 1.2rem; border-radius: 100px;
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 0.85rem;
          cursor: pointer; transition: all 0.2s; border: 1px solid transparent;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(17, 24, 39, 0.6); backdrop-filter: blur(8px);
          z-index: 100; display: flex; align-items: center; justify-content: center;
          padding: 1.5rem; animation: fadeIn 0.2s ease;
        }
        .modal-content {
          background: #fff; width: 100%; max-width: 850px;
          border-radius: 24px; overflow: hidden; display: flex;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          position: relative; animation: slideUp 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .modal-split { display: flex; flex-direction: row; width: 100%; }
        .modal-image { width: 45%; display: flex; align-items: center; justify-content: center; padding: 2rem; }
        .modal-info { width: 55%; padding: 3rem 2.5rem; display: flex; flex-direction: column; }
        
        @media (max-width: 768px) {
          .modal-split { flex-direction: column; }
          .modal-image { width: 100%; height: 200px; }
          .modal-info { width: 100%; padding: 2rem; }
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Modal Overlay */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedProduct(null)}
              style={{ position: "absolute", top: "1rem", right: "1.5rem", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "#9ca3af", zIndex: 10 }}
            >
              ✕
            </button>
            
            <div className="modal-split">
              <div className="modal-image" style={{ background: selectedProduct.gradient }}>
                <span style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: "rgba(255,255,255,0.8)", fontSize: "2.5rem", mixBlendMode: "overlay", textAlign: "center" }}>
                  {selectedProduct.name.split(" ")[0]}
                </span>
              </div>
              
              <div className="modal-info">
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#667eea", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: "0.5rem" }}>
                  {selectedProduct.tag}
                </span>
                <h2 style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: "2rem", lineHeight: 1.1, marginBottom: "1rem", color: "#111827" }}>
                  {selectedProduct.name}
                </h2>
                <span style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: "1.8rem", color: "#111827", marginBottom: "1.5rem" }}>
                  ${selectedProduct.price.toFixed(2)}
                </span>
                
                <p style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "1rem", color: "#4b5563", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  {selectedProduct.desc}
                </p>

                <div style={{ marginBottom: "2rem" }}>
                  <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.9rem", color: "#111827", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Technical Specs</h4>
                  <ul style={{ listStylePosition: "inside", fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.9rem", color: "#4b5563", paddingLeft: "0" }}>
                    {selectedProduct.specs.map((spec, i) => (
                      <li key={i} style={{ marginBottom: "0.4rem" }}>• {spec}</li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={addToCart}
                  style={{ background: "#111827", color: "#fff", border: "none", padding: "1rem", borderRadius: "12px", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", cursor: "pointer", transition: "transform 0.1s, background 0.2s", marginTop: "auto", width: "100%" }}
                  onMouseOver={(e) => e.currentTarget.style.background = "#374151"}
                  onMouseOut={(e) => e.currentTarget.style.background = "#111827"}
                >
                  Add to Cart — ${selectedProduct.price.toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <main style={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
        <div className="multi-color-bg"></div>
        
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)" }}>
          
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2rem 0" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.02em", color: "#111827" }}>
                Nilckson<span style={{ color: "#667eea" }}>Store.</span>
              </span>
            </Link>
            
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <button className="btn-login">Login</button>
              
              <div style={{ position: "relative", cursor: "pointer", padding: "0.5rem" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {cart > 0 && (
                  <span style={{ position: "absolute", top: "-5px", right: "-5px", background: "#f87171", color: "#fff", fontSize: "0.75rem", fontWeight: "bold", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    {cart}
                  </span>
                )}
              </div>
            </div>
          </nav>

          <header style={{ padding: "4rem 0 2rem", textAlign: "center" }}>
            <h1 style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              Upgrade Your <br />
              <span style={{ background: "linear-gradient(to right, #667eea 0%, #4facfe 100%)", WebkitBackgroundClip: "text", color: "transparent" }}>Hardware.</span>
            </h1>
          </header>

          <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center", marginBottom: "3rem" }}>
            <input 
  type="text" 
  placeholder="Search gear, hardware, or apparel..." 
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      (e.target as HTMLInputElement).blur();
    }
  }}
  className="search-input"
/>

            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="category-pill"
                  style={{
                    background: activeCategory === cat ? "#111827" : "#ffffff",
                    color: activeCategory === cat ? "#ffffff" : "#4b5563",
                    borderColor: activeCategory === cat ? "#111827" : "#e5e7eb"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem", paddingBottom: "6rem" }}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <div key={p.id} className="store-card" onClick={() => setSelectedProduct(p)}>
                  <div style={{ width: "100%", height: "240px", borderRadius: "14px", background: p.gradient, marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: "rgba(255,255,255,0.7)", fontSize: "1.5rem", mixBlendMode: "overlay", textAlign: "center", padding: "0 1rem" }}>
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
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#667eea", fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                      View Details →
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "#6b7280", fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                No products found matching "{searchQuery}".
              </div>
            )}
          </section>

          <footer style={{ borderTop: "1px solid #e5e7eb", padding: "2rem 0", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.85rem", color: "#6b7280" }}>
            <span style={{ fontWeight: 600, color: "#111827" }}>NILCKSON STORE</span>
            <span>© {new Date().getFullYear()}</span>
          </footer>
        </div>
      </main>
    </>
  );
                  }
      
