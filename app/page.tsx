"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { articles } from "./data/articles";

const services = [
  { href: "/systems", icon: "⬡", accent: "#00f2fe", label: "Systems", sub: "Architecture & deployment" },
  { href: null, icon: "◈", accent: "#a78bfa", label: "Security", sub: "Threat hunting & defense" },
  { href: "/courses", icon: "◉", accent: "#34d399", label: "Courses", sub: "Learn at your own pace" },
  { href: null, icon: "◆", accent: "#fb923c", label: "Merch", sub: "Tech-inspired gear" },
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
        background: hov ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)",
        border: `1px solid ${hov ? a.tagColor + "40" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "14px",
        padding: "1.5rem",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
        transform: visible ? (hov ? "translateY(-4px)" : "translateY(0)") : "translateY(24px)",
        opacity: visible ? 1 : 0,
        transitionDelay: visible ? `${i * 0.1}s` : "0s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: `linear-gradient(90deg, ${a.tagColor}, transparent)`,
        opacity: hov ? 1 : 0, transition: "opacity 0.3s",
      }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem" }}>
        <span style={{
          fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em",
          textTransform: "uppercase", color: a.tagColor,
          background: `${a.tagColor}15`, padding: "0.25rem 0.65rem",
          borderRadius: "100px", border: `1px solid ${a.tagColor}30`,
        }}>
          {a.tag}
        </span>
        <span style={{ fontSize: "0.72rem", color: "#2d4a5e", fontFamily: "'DM Sans', sans-serif" }}>
          {a.min}
        </span>
      </div>
      <h3 style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 700,
        fontSize: "1rem", color: "#e8f4ff", lineHeight: 1.4,
        marginBottom: "0.6rem", letterSpacing: "-0.01em",
      }}>
        {a.title}
      </h3>
      <p style={{
        fontSize: "0.83rem", color: "#4a6275", lineHeight: 1.65,
        fontFamily: "'DM Sans', sans-serif", margin: 0,
      }}>
        {a.excerpt}
      </p>
      <div style={{
        marginTop: "1.1rem", fontSize: "0.78rem", fontWeight: 600,
        color: a.tagColor, opacity: hov ? 1 : 0.4,
        transition: "opacity 0.3s", fontFamily: "'Syne', sans-serif",
        letterSpacing: "0.04em",
      }}>
        Read article →
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
        display: "flex", alignItems: "center", gap: "0.75rem",
        padding: "0.85rem 1.1rem",
        background: hov ? `${s.accent}12` : "rgba(255,255,255,0.03)",
        border: `1px solid ${hov ? s.accent + "40" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "12px",
        transition: "all 0.25s ease",
        cursor: "pointer",
      }}
    >
      <span style={{ fontSize: "1.3rem", color: s.accent, lineHeight: 1 }}>{s.icon}</span>
      <div>
        <div style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 700,
          fontSize: "0.88rem", color: "#e8f4ff", letterSpacing: "0.01em",
        }}>
          {s.label}
        </div>
        <div style={{ fontSize: "0.72rem", color: "#3a5468", fontFamily: "'DM Sans', sans-serif" }}>
          {s.sub}
        </div>
      </div>
      <span style={{
        marginLeft: "auto", color: s.accent, opacity: hov ? 1 : 0.3,
        transition: "opacity 0.25s", fontSize: "0.85rem",
      }}>→</span>
    </div>
  );
  if (s.href) return <a href={s.href} style={{ textDecoration: "none", display: "block" }}>{inner}</a>;
  return inner;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #050b14; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes pulse {
          0%,100% { opacity:.5; transform:scale(1); }
          50%      { opacity:1; transform:scale(1.15); }
        }
        .hero-in { animation: fadeUp .7s ease both; }
        .hero-in-1 { animation-delay:.05s; }
        .hero-in-2 { animation-delay:.15s; }
        .hero-in-3 { animation-delay:.25s; }
        .hero-in-4 { animation-delay:.38s; }
        @media (max-width:600px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .cta-row { flex-direction: column !important; }
          .cta-row a { width: 100% !important; justify-content: center !important; }
        }
      `}</style>

      <main style={{
        minHeight: "100vh", background: "#050b14",
        color: "#fff", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden",
      }}>
        <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(0,242,254,0.07) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 90% 90%, rgba(167,139,250,0.05) 0%, transparent 60%)" }} />
        <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(0,242,254,0.09) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", padding: "0 clamp(1rem,5vw,2rem)" }}>

          <nav style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "1.5rem 0",
            opacity: mounted ? 1 : 0, transition: "opacity .5s",
          }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
  <img src="/favicon.png" alt="NilcksonTech" style={{ width: "28px", height: "28px", borderRadius: "6px" }} />
  <span style={{
    fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "0.95rem",
    letterSpacing: "0.1em", color: "#00f2fe", textTransform: "uppercase",
  }}>NilcksonTech</span>
</Link>
            <a href="/courses" style={{
              fontSize: "0.8rem", color: "#2d4a5e", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif", transition: "color .2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00f2fe")}
              onMouseLeave={e => (e.currentTarget.style.color = "#2d4a5e")}
            >
              Browse courses →
            </a>
          </nav>

          <section style={{ padding: "3.5rem 0 3rem" }}>
            <div className="hero-in hero-in-1" style={{
              display: "inline-flex", alignItems: "center", gap: "0.45rem",
              background: "rgba(0,242,254,0.07)", border: "1px solid rgba(0,242,254,0.18)",
              borderRadius: "100px", padding: "0.3rem 0.9rem", marginBottom: "1.75rem",
              fontSize: "0.7rem", letterSpacing: "0.12em", color: "#00f2fe",
              textTransform: "uppercase", fontWeight: 500,
            }}>
              <span style={{
                width: "5px", height: "5px", borderRadius: "50%",
                background: "#00f2fe", boxShadow: "0 0 7px #00f2fe",
                animation: "pulse 2s ease infinite", display: "inline-block",
              }} />
              Digital Innovation Hub
            </div>


            <p className="hero-in hero-in-3" style={{
              fontSize: "clamp(0.95rem, 3vw, 1.1rem)", color: "#4a6275",
              maxWidth: "440px", lineHeight: 1.75, fontWeight: 300,
              marginBottom: "2.25rem", letterSpacing: "0.005em",
            }}>
              Enterprise systems, cybersecurity, and tech education — built for the next generation of digital professionals.
            </p>

            <div className="hero-in hero-in-4 cta-row" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="/courses" style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.8rem 1.75rem",
                background: "linear-gradient(135deg, #00f2fe, #006fff)",
                borderRadius: "100px", color: "#fff", fontWeight: 700,
                fontSize: "0.85rem", textDecoration: "none",
                letterSpacing: "0.03em", fontFamily: "'Syne', sans-serif",
                boxShadow: "0 0 28px rgba(0,242,254,0.22), 0 4px 16px rgba(0,0,0,0.4)",
                transition: "transform .2s, box-shadow .2s",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 0 44px rgba(0,242,254,0.38), 0 8px 24px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0 28px rgba(0,242,254,0.22), 0 4px 16px rgba(0,0,0,0.4)";
                }}
              >
                Start Learning →
              </a>
              <a href="/systems" style={{
                display: "inline-flex", alignItems: "center",
                padding: "0.8rem 1.75rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "100px", color: "#6a8090",
                fontWeight: 500, fontSize: "0.85rem", textDecoration: "none",
                transition: "all .2s", fontFamily: "'DM Sans', sans-serif",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.color = "#6a8090"; }}
              >
                View Systems
              </a>
            </div>
          </section>

          <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(0,242,254,0.15),transparent)", margin: "0.5rem 0 3rem" }} />

          <section style={{ marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "0.68rem", letterSpacing: "0.18em", color: "#1e3a50",
              textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem",
            }}>What we do</p>
            <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "0.65rem" }}>
              {services.map(s => <ServicePill key={s.label} s={s} />)}
            </div>
          </section>

          <section style={{ marginBottom: "5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.25rem" }}>
              <p style={{
                fontSize: "0.68rem", letterSpacing: "0.18em", color: "#1e3a50",
                textTransform: "uppercase", fontWeight: 600,
              }}>Latest articles</p>
              <a href="/articles" style={{
                fontSize: "0.75rem", color: "#2d4a5e", textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif", transition: "color .2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00f2fe")}
                onMouseLeave={e => (e.currentTarget.style.color = "#2d4a5e")}
              >
                All articles →
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {articles.map((a, i) => <ArticleCard key={a.slug} a={a} i={i} />)}
            </div>
          </section>

          <footer style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            padding: "1.75rem 0 2.5rem",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "0.75rem",
          }}>
            <span style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.8rem",
              letterSpacing: "0.1em", color: "#162535", textTransform: "uppercase",
            }}>NilcksonTech</span>
            <span style={{ fontSize: "0.72rem", color: "#162535", fontFamily: "'DM Sans', sans-serif" }}>
              © {new Date().getFullYear()} · All rights reserved
            </span>
          </footer>

        </div>
      </main>
    </>
  );
}
