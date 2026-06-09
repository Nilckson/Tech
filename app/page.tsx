"use client";

import SocialBar from "./components/SocialIcons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { articles } from "./data/articles";

const services = [
  { href: "/systems", icon: "⬡", accent: "#06b6d4", label: "Systems", sub: "Architecture & deployment" },
  { href: "/security", icon: "◈", accent: "#8b5cf6", label: "Security", sub: "Threat hunting & defense" },
  { href: "/courses", icon: "◉", accent: "#10b981", label: "Courses", sub: "Learn at your own pace" },
  { href: "/merch", icon: "◆", accent: "#f59e0b", label: "Merch", sub: "Tech-inspired gear" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function ArticleCard({ a, i }: { a: (typeof articles)[0]; i: number }) {
  const [hov, setHov] = useState(false);
  const { ref, visible } = useInView();
  const router = useRouter();

  return (
    <div
      ref={ref}
      onClick={() => router.push(`/articles/${a.slug}`)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(255,255,255,0.03)" : "transparent",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "1.5rem 1rem",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
        transform: visible ? (hov ? "translateX(8px)" : "translateX(0)") : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transitionDelay: visible ? `${i * 0.1}s` : "0s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
          <span style={{
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: a.tagColor, fontFamily: "'Space Grotesk', sans-serif"
          }}>
            {a.tag}
          </span>
          <span style={{ fontSize: "0.8rem", color: "#52525b", fontFamily: "'Outfit', sans-serif" }}>
            {a.min}
          </span>
        </div>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
          fontSize: "1.2rem", color: hov ? "#fff" : "#e4e4e7", lineHeight: 1.3,
          transition: "color 0.3s"
        }}>
          {a.title}
        </h3>
      </div>
      <div style={{
        color: a.tagColor, opacity: hov ? 1 : 0, transform: hov ? "translateX(0)" : "translateX(-10px)",
        transition: "all 0.3s ease", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700
      }}>
        →
      </div>
    </div>
  );
}

function ServicePill({ s }: { s: (typeof services)[0] }) {
  const [hov, setHov] = useState(false);
  const inner = (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: "1rem",
        padding: "1.5rem",
        background: hov ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.01)",
        border: `1px solid ${hov ? s.accent + "50" : "rgba(255,255,255,0.05)"}`,
        borderRadius: "16px",
        transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
        cursor: "pointer",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hov ? `0 10px 30px -10px ${s.accent}20` : "none"
      }}
    >
      <div style={{ 
        fontSize: "1.5rem", color: s.accent, lineHeight: 1, 
        background: `${s.accent}15`, padding: "0.8rem", borderRadius: "12px" 
      }}>
        {s.icon}
      </div>
      <div>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
          fontSize: "1.1rem", color: "#f4f4f5", marginBottom: "0.2rem"
        }}>
          {s.label}
        </div>
        <div style={{ fontSize: "0.85rem", color: "#a1a1aa", fontFamily: "'Outfit', sans-serif" }}>
          {s.sub}
        </div>
      </div>
    </div>
  );
  if (s.href) return <a href={s.href} style={{ textDecoration: "none", display: "block" }}>{inner}</a>;
  return inner;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Outfit:wght@300;400;500;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #050505; }
        
        .grid-bg {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, black 20%, transparent 80%);
        }

        .glow-bg {
          position: fixed; top: -20%; left: -10%; width: 50vw; height: 50vh;
          background: radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%);
          z-index: 0; pointer-events: none; filter: blur(60px);
        }

        .glow-bg-2 {
          position: fixed; bottom: -20%; right: -10%; width: 50vw; height: 50vh;
          background: radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%);
          z-index: 0; pointer-events: none; filter: blur(60px);
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }
        
        .hero-in { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero-in-1 { animation-delay: 0.1s; }
        .hero-in-2 { animation-delay: 0.2s; }
        .hero-in-3 { animation-delay: 0.3s; }
        
        @media (max-width:768px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .cta-row { flex-direction: column !important; }
        }
      `}</style>

      <main style={{ minHeight: "100vh", background: "#050505", color: "#fff", overflowX: "hidden" }}>
        
        <div className="grid-bg" />
        <div className="glow-bg" />
        <div className="glow-bg-2" />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "840px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)" }}>

          {/* Navigation */}
          <nav style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "2rem 0", opacity: mounted ? 1 : 0, transition: "opacity .5s",
          }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "8px",
                background: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#050505" }}>N</span>
              </div>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.1rem",
                letterSpacing: "0.05em", color: "#fff"
              }}>
                Nilckson<span style={{ color: "#a1a1aa" }}>Tech</span>
              </span>
            </Link>
            <a href="/courses" style={{
              fontSize: "0.9rem", color: "#a1a1aa", textDecoration: "none",
              fontFamily: "'Outfit', sans-serif", fontWeight: 500, transition: "color .2s",
            }} onMouseEnter={e => (e.currentTarget.style.color = "#fff")} onMouseLeave={e => (e.currentTarget.style.color = "#a1a1aa")}>
              Browse courses →
            </a>
          </nav>

          {/* Hero Section */}
          <section style={{ padding: "5rem 0 4rem" }}>
            <div className="hero-in hero-in-1" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "100px", padding: "0.4rem 1rem", marginBottom: "2rem",
              fontSize: "0.75rem", letterSpacing: "0.1em", color: "#e4e4e7",
              textTransform: "uppercase", fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif"
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#06b6d4" }} />
              Digital Innovation Hub
            </div>

            <h1 className="hero-in hero-in-2" style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
              fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.1,
              letterSpacing: "-0.03em", marginBottom: "1.5rem", color: "#fff"
            }}>
              Architecting the <br />
              <span style={{ background: "linear-gradient(to right, #06b6d4, #8b5cf6)", WebkitBackgroundClip: "text", color: "transparent" }}>
                Next Generation.
              </span>
            </h1>

            <p className="hero-in hero-in-3" style={{
              fontSize: "1.1rem", color: "#a1a1aa", maxWidth: "500px", 
              lineHeight: 1.6, fontWeight: 400, marginBottom: "3rem", 
              fontFamily: "'Outfit', sans-serif"
            }}>
              Enterprise systems, cybersecurity, and tech education — built for modern digital professionals.
            </p>

            <div className="hero-in hero-in-3 cta-row" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="/courses" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "1rem 2rem", background: "#fff", borderRadius: "8px", 
                color: "#050505", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none",
                fontFamily: "'Space Grotesk', sans-serif", transition: "transform .2s",
              }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"} onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                Start Learning
              </a>
              <a href="/systems" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "1rem 2rem", background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "8px", color: "#fff", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none",
                transition: "all .2s", fontFamily: "'Space Grotesk', sans-serif",
              }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                View Systems
              </a>
            </div>
          </section>

          {/* Separator */}
          <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)", margin: "2rem 0 4rem" }} />

          {/* Services Section */}
          <section style={{ marginBottom: "5rem" }}>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", 
              fontWeight: 700, color: "#fff", marginBottom: "2rem"
            }}>
              Core Systems
            </h2>
            <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1rem" }}>
              {services.map(s => <ServicePill key={s.label} s={s} />)}
            </div>
          </section>

          {/* Articles Section */}
          <section style={{ marginBottom: "6rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" }}>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", 
                fontWeight: 700, color: "#fff"
              }}>
                Latest Intel
              </h2>
              <a href="/articles" style={{
                fontSize: "0.9rem", color: "#a1a1aa", textDecoration: "none",
                fontFamily: "'Outfit', sans-serif", fontWeight: 500, transition: "color .2s",
              }} onMouseEnter={e => (e.currentTarget.style.color = "#fff")} onMouseLeave={e => (e.currentTarget.style.color = "#a1a1aa")}>
                View archive →
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {articles.map((a, i) => <ArticleCard key={a.slug} a={a} i={i} />)}
            </div>
          </section>

          <SocialBar />
          
          <footer style={{
            borderTop: "1px solid rgba(255,255,255,0.1)", padding: "2rem 0 3rem",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "1rem", marginTop: "2rem"
          }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.9rem",
              letterSpacing: "0.05em", color: "#fff"
            }}>
              NILCKSONTECH
            </span>
            <span style={{ fontSize: "0.85rem", color: "#52525b", fontFamily: "'Outfit', sans-serif" }}>
              © {new Date().getFullYear()} · All systems operational.
            </span>
          </footer>

        </div>
      </main>
    </>
  );
      }
                
