"use client";

import SocialBar from "./components/SocialIcons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { articles } from "./data/articles";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  { href: "/systems",  icon: "⬡", accent: "#22d3ee", label: "Systems",  sub: "Architecture & deployment" },
  { href: "/security", icon: "◈", accent: "#a78bfa", label: "Security", sub: "Threat hunting & defense"  },
  { href: "/courses",  icon: "◉", accent: "#34d399", label: "Courses",  sub: "Learn at your own pace"    },
  { href: "/merch",    icon: "◆", accent: "#fbbf24", label: "Merch",    sub: "Tech-inspired gear"        },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
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

// ─── Article Card ─────────────────────────────────────────────────────────────

function ArticleCard({ a, i }: { a: (typeof articles)[0]; i: number }) {
  const [hov, setHov] = useState(false);
  const { ref, visible } = useInView();
  const router = useRouter();

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={() => router.push(`/articles/${a.slug}`)}
      onKeyDown={(e) => e.key === "Enter" && router.push(`/articles/${a.slug}`)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        background: hov ? "rgba(255,255,255,0.025)" : "transparent",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "1.75rem 1.25rem",
        cursor: "pointer",
        transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
        transform: visible
          ? hov ? "translateX(10px)" : "translateX(0)"
          : "translateY(24px)",
        opacity: visible ? 1 : 0,
        transitionDelay: visible ? `${i * 0.08}s` : "0s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        borderRadius: "4px",
        outline: "none",
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position: "absolute",
        left: 0, top: "50%",
        transform: hov ? "translateY(-50%) scaleY(1)" : "translateY(-50%) scaleY(0)",
        width: "2px", height: "60%",
        background: a.tagColor,
        borderRadius: "2px",
        transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1)",
        transformOrigin: "center",
      }} />

      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.55rem" }}>
          <span style={{
            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: a.tagColor,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            {a.tag}
          </span>
          <span style={{
            width: "3px", height: "3px", borderRadius: "50%",
            background: "rgba(255,255,255,0.2)", display: "inline-block",
          }} />
          <span style={{ fontSize: "0.78rem", color: "#52525b", fontFamily: "'Outfit', sans-serif" }}>
            {a.min}
          </span>
        </div>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: "1.15rem",
          color: hov ? "#fff" : "#d4d4d8",
          lineHeight: 1.35,
          transition: "color 0.3s",
          letterSpacing: "-0.01em",
        }}>
          {a.title}
        </h3>
      </div>

      <div style={{
        color: a.tagColor,
        opacity: hov ? 1 : 0,
        transform: hov ? "translateX(0)" : "translateX(-8px)",
        transition: "all 0.3s ease",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: "1.1rem",
        flexShrink: 0,
      }}>
        →
      </div>
    </div>
  );
}

// ─── Service Pill ─────────────────────────────────────────────────────────────

function ServicePill({ s, index }: { s: (typeof services)[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const { ref, visible } = useInView(0.1);

  const inner = (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "1.1rem",
        padding: "1.6rem",
        background: hov
          ? `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, ${s.accent}08 100%)`
          : "rgba(255,255,255,0.015)",
        border: `1px solid ${hov ? s.accent + "40" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "16px",
        transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
        cursor: "pointer",
        transform: visible
          ? hov ? "translateY(-6px)" : "translateY(0)"
          : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transitionDelay: visible ? `${index * 0.07}s` : "0s",
        boxShadow: hov ? `0 16px 40px -12px ${s.accent}25, inset 0 1px 0 rgba(255,255,255,0.05)` : "inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <div style={{
        fontSize: "1.3rem",
        color: s.accent,
        lineHeight: 1,
        background: `${s.accent}18`,
        padding: "0.75rem",
        borderRadius: "12px",
        flexShrink: 0,
        transition: "background 0.3s",
      }}>
        {s.icon}
      </div>
      <div>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "1.05rem",
          color: hov ? "#fff" : "#e4e4e7",
          marginBottom: "0.3rem",
          letterSpacing: "-0.01em",
          transition: "color 0.3s",
        }}>
          {s.label}
        </div>
        <div style={{ fontSize: "0.83rem", color: "#71717a", fontFamily: "'Outfit', sans-serif", lineHeight: 1.4 }}>
          {s.sub}
        </div>
      </div>
    </div>
  );

  if (s.href) return <a href={s.href} style={{ textDecoration: "none", display: "block" }}>{inner}</a>;
  return inner;
}

// ─── Noise Overlay ────────────────────────────────────────────────────────────

function NoiseOverlay() {
  return (
    <svg
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none", opacity: 0.025 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; -webkit-font-smoothing: antialiased; }

        .grid-bg {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%);
        }

        .glow-tl {
          position: fixed; top: -15%; left: -5%; width: 55vw; height: 55vh;
          background: radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 65%);
          z-index: 0; pointer-events: none; filter: blur(80px);
          animation: breathe 8s ease-in-out infinite;
        }
        .glow-br {
          position: fixed; bottom: -20%; right: -10%; width: 55vw; height: 55vh;
          background: radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 65%);
          z-index: 0; pointer-events: none; filter: blur(80px);
          animation: breathe 10s ease-in-out infinite reverse;
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.7; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.18s; }
        .d3 { animation-delay: 0.32s; }
        .d4 { animation-delay: 0.45s; }

        .section-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #52525b; margin-bottom: 0.6rem;
        }

        .btn-primary {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.9rem 2rem;
          background: #fff; border-radius: 10px;
          color: #080808; font-weight: 700; font-size: 0.9rem;
          text-decoration: none; font-family: 'Space Grotesk', sans-serif;
          transition: transform 0.25s cubic-bezier(0.23,1,0.32,1), box-shadow 0.25s;
          box-shadow: 0 0 0 0 rgba(255,255,255,0);
          letter-spacing: -0.01em;
        }
        .btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -8px rgba(255,255,255,0.15);
        }

        .btn-ghost {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.9rem 2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px; color: #d4d4d8;
          font-weight: 600; font-size: 0.9rem;
          text-decoration: none; font-family: 'Space Grotesk', sans-serif;
          transition: all 0.25s cubic-bezier(0.23,1,0.32,1);
          letter-spacing: -0.01em;
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.18);
          color: #fff;
          transform: translateY(-4px);
        }

        .nav-link {
          font-size: 0.88rem; color: #71717a; text-decoration: none;
          font-family: 'Outfit', sans-serif; font-weight: 500;
          transition: color 0.2s; letter-spacing: 0.01em;
        }
        .nav-link:hover { color: #e4e4e7; }

        .services-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 0.85rem; }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
          .cta-row { flex-direction: column; }
          .cta-row a { text-align: center; }
        }

        *:focus-visible { outline: 2px solid #22d3ee; outline-offset: 4px; border-radius: 6px; }
        ::-webkit-scrollbar { width: 6px; background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 6px; }
      `}</style>

      <main style={{ minHeight: "100vh", background: "#080808", color: "#fff", overflowX: "hidden" }}>

        <div className="grid-bg" />
        <div className="glow-tl" />
        <div className="glow-br" />
        <NoiseOverlay />

        <div style={{
          position: "relative", zIndex: 1,
          maxWidth: "860px", margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 3rem)",
        }}>

          {/* Navigation */}
          <nav style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "2rem 0",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "9px",
                background: "linear-gradient(135deg, #fff 0%, #d4d4d8 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 12px rgba(255,255,255,0.1)",
              }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#080808" }}>N</span>
              </div>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: "1.05rem", letterSpacing: "0.04em", color: "#fff",
              }}>
                Nilckson<span style={{ color: "#52525b", fontWeight: 500 }}>Tech</span>
              </span>
            </Link>
            <a href="/courses" className="nav-link">Browse courses →</a>
          </nav>

          {/* Hero */}
          <section style={{ padding: "5rem 0 4.5rem" }}>
            <div className="fade-up d1" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              marginBottom: "2.25rem",
              padding: "0.35rem 1rem 0.35rem 0.5rem",
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(8px)",
            }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                background: "rgba(34,211,238,0.15)",
                borderRadius: "100px", padding: "0.2rem 0.6rem",
                fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em",
                color: "#22d3ee", textTransform: "uppercase",
                fontFamily: "'Space Grotesk', sans-serif",
              }}>
                <span style={{
                  width: "5px", height: "5px", borderRadius: "50%",
                  background: "#22d3ee", boxShadow: "0 0 6px #22d3ee",
                  display: "inline-block", animation: "breathe 2s ease-in-out infinite",
                }} />
                Live
              </span>
              <span style={{
                fontSize: "0.78rem", color: "#a1a1aa",
                fontFamily: "'Outfit', sans-serif", fontWeight: 400,
              }}>
                Digital Innovation Hub
              </span>
            </div>

            <h1 className="fade-up d2" style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.6rem, 7vw, 4.2rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
              color: "#fff",
            }}>
              Architecting the{" "}
              <br />
              <span style={{
                background: "linear-gradient(100deg, #22d3ee 0%, #818cf8 50%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Next Generation.
              </span>
            </h1>

            <p className="fade-up d3" style={{
              fontSize: "1.05rem", color: "#71717a", maxWidth: "480px",
              lineHeight: 1.65, fontWeight: 400, marginBottom: "3rem",
              fontFamily: "'Outfit', sans-serif",
            }}>
              Enterprise systems, cybersecurity, and tech education —{" "}
              <span style={{ color: "#a1a1aa" }}>built for modern digital professionals.</span>
            </p>

            <div className="fade-up d4 cta-row" style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", alignItems: "center" }}>
              <a href="/courses" className="btn-primary">Start Learning</a>
              <a href="/systems" className="btn-ghost">View Systems</a>
              <span style={{
                fontSize: "0.8rem", color: "#3f3f46",
                fontFamily: "'Outfit', sans-serif", marginLeft: "0.25rem",
              }}>
                No account needed
              </span>
            </div>
          </section>

          {/* Stats strip */}
          <div className="fade-up d4" style={{
            display: "flex", gap: "0", flexWrap: "wrap",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            marginBottom: "5rem",
          }}>
            {[
              { val: "12K+", label: "Students enrolled" },
              { val: "98%",  label: "Uptime SLA"        },
              { val: "340+", label: "Hours of content"   },
              { val: "4.9★", label: "Average rating"     },
            ].map((stat, i) => (
              <div key={stat.label} style={{
                flex: "1 1 25%", minWidth: "120px",
                padding: "1.5rem 1.25rem",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: "1.5rem",
                  color: "#fff", letterSpacing: "-0.03em", marginBottom: "0.25rem",
                }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#52525b", fontFamily: "'Outfit', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Services */}
          <section style={{ marginBottom: "5.5rem" }}>
            <p className="section-eyebrow">What we build</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1.75rem" }}>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
                fontWeight: 700, color: "#fff", letterSpacing: "-0.02em",
              }}>
                Core Systems
              </h2>
            </div>
            <div className="services-grid">
              {services.map((s, i) => <ServicePill key={s.label} s={s} index={i} />)}
            </div>
          </section>

          {/* Articles */}
          <section style={{ marginBottom: "6rem" }}>
            <p className="section-eyebrow">Intelligence feed</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "0.5rem" }}>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
                fontWeight: 700, color: "#fff", letterSpacing: "-0.02em",
              }}>
                Latest Intel
              </h2>
              <a href="/articles" className="nav-link" style={{ fontSize: "0.85rem" }}>
                View archive →
              </a>
            </div>
            <div style={{ marginTop: "1rem" }}>
              {articles.map((a, i) => <ArticleCard key={a.slug} a={a} i={i} />)}
            </div>
          </section>

          <SocialBar />

          {/* Footer */}
          <footer style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "2rem 0 3rem",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "1rem", marginTop: "2rem",
          }}>
            
