"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    icon: "⬡",
    accent: "#00f2fe",
    title: "Web Application Development",
    desc: "Leveraging modern frameworks like Next.js and React to deliver responsive, dynamic, and highly secure user experiences built for scale.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: "◈",
    accent: "#a78bfa",
    title: "Infrastructure & Networking",
    desc: "Designing distributed systems and secure network topologies to ensure maximum uptime, fault tolerance, and data integrity.",
    tags: ["TCP/IP", "DNS", "Load Balancing"],
  },
  {
    icon: "◉",
    accent: "#34d399",
    title: "Cloud Architecture",
    desc: "Scalable cloud-native solutions designed for performance and reliability — from serverless functions to containerized deployments.",
    tags: ["Docker", "CI/CD", "Serverless"],
  },
  {
    icon: "◆",
    accent: "#fb923c",
    title: "Database Engineering",
    desc: "Robust data layer design using relational and non-relational databases, optimized for speed, security, and maintainability.",
    tags: ["PostgreSQL", "Redis", "Schema Design"],
  },
];

const stats = [
  { val: "99.9%", label: "Uptime" },
  { val: "Scale", label: "Ready" },
  { val: "Full", label: "Stack" },
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)",
        border: `1px solid ${hov ? s.accent + "45" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "16px", padding: "1.75rem",
        transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
        transform: visible ? (hov ? "translateY(-5px)" : "translateY(0)") : "translateY(28px)",
        opacity: visible ? 1 : 0,
        transitionDelay: visible ? `${index * 0.08}s` : "0s",
        position: "relative", overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: `linear-gradient(90deg, ${s.accent}, transparent)`,
        opacity: hov ? 1 : 0.3, transition: "opacity 0.35s",
      }} />
      <div style={{
        position: "absolute", top: "-30px", right: "-30px",
        width: "100px", height: "100px", borderRadius: "50%",
        background: `radial-gradient(circle, ${s.accent}18 0%, transparent 70%)`,
        opacity: hov ? 1 : 0, transition: "opacity 0.35s", pointerEvents: "none",
      }} />
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{
          fontSize: "1.5rem", color: s.accent, lineHeight: 1, flexShrink: 0, marginTop: "2px",
          transition: "transform 0.3s",
          transform: hov ? "scale(1.15) rotate(8deg)" : "scale(1) rotate(0)",
        }}>
          {s.icon}
        </div>
        <h3 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 700,
          fontSize: "1.05rem", color: "#e8f4ff", lineHeight: 1.3,
          letterSpacing: "-0.01em", margin: 0,
        }}>
          {s.title}
        </h3>
      </div>
      <p style={{
        fontSize: "0.85rem", color: "#8fafc7", lineHeight: 1.7,
        fontFamily: "'DM Sans', sans-serif", marginBottom: "1.25rem",
      }}>
        {s.desc}
      </p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {s.tags.map(tag => (
          <span key={tag} style={{
            fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: s.accent,
            background: `${s.accent}12`, padding: "0.2rem 0.6rem",
            borderRadius: "100px", border: `1px solid ${s.accent}25`,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Systems() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #050b14; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes pulse {
          0%,100% { opacity:.5; transform:scale(1); }
          50%      { opacity:1; transform:scale(1.15); }
        }
        @keyframes borderSpin {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-in { animation: fadeUp .6s ease both; }
        .d1 { animation-delay:.05s; }
        .d2 { animation-delay:.15s; }
        .d3 { animation-delay:.25s; }
      `}</style>

      <main style={{
        minHeight: "100vh", background: "#050b14",
        color: "#fff", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden",
      }}>
        <div style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(0,242,254,0.07) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 90% 90%, rgba(167,139,250,0.05) 0%, transparent 60%)",
        }} />
        <div style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(0,242,254,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", padding: "0 clamp(1rem,5vw,2rem)" }}>

          <nav style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "1.5rem 0",
            opacity: mounted ? 1 : 0, transition: "opacity .5s",
          }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "6px",
                background: "linear-gradient(135deg, #00f2fe, #006fff)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 0 12px rgba(0,242,254,0.4)",
              }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "0.85rem", color: "#050b14" }}>N</span>
              </div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "0.95rem", letterSpacing: "0.1em", color: "#00f2fe", textTransform: "uppercase" }}>
                NilcksonTech
              </span>
            </Link>
            <Link href="/" style={{ fontSize: "0.8rem", color: "#6a8fa8", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00f2fe")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6a8fa8")}
            >
              ← Home
            </Link>
          </nav>

          <header style={{ padding: "3rem 0 2.5rem" }}>
            <div className="hero-in d1" style={{
              display: "inline-flex", alignItems: "center", gap: "0.45rem",
              background: "rgba(0,242,254,0.07)", border: "1px solid rgba(0,242,254,0.18)",
              borderRadius: "100px", padding: "0.3rem 0.9rem", marginBottom: "1.5rem",
              fontSize: "0.7rem", letterSpacing: "0.12em", color: "#00f2fe",
              textTransform: "uppercase", fontWeight: 500,
            }}>
              <span style={{
                width: "5px", height: "5px", borderRadius: "50%",
                background: "#00f2fe", boxShadow: "0 0 7px #00f2fe",
                animation: "pulse 2s ease infinite", display: "inline-block",
              }} />
              System Architecture
            </div>

            <h1 className="hero-in d2" style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 900,
              fontSize: "clamp(2.2rem, 8vw, 3.5rem)",
              lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1rem",
              background: "linear-gradient(135deg, #fff 0%, #b8d4e8 55%, #00f2fe 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Enterprise-Grade System Architecture
            </h1>

            <p className="hero-in d3" style={{
              fontSize: "clamp(0.9rem, 3vw, 1rem)", color: "#8fafc7",
              maxWidth: "480px", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem",
            }}>
              We design, build, and deploy high-performance web applications and resilient network infrastructures tailored for scale.
            </p>

            <div className="hero-in d3" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <div style={{ position: "relative", display: "inline-flex" }}>
                <div style={{
                  position: "absolute", inset: "-2px", borderRadius: "100px",
                  background: "linear-gradient(135deg, #00f2fe, #006fff, #a78bfa, #00f2fe)",
                  backgroundSize: "300% 300%",
                  animation: "borderSpin 3s linear infinite",
                  zIndex: 0,
                }} />
                <a href="mailto:your@email.com" style={{
                  position: "relative", zIndex: 1,
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.8rem 1.75rem",
                  background: "#050b14", borderRadius: "100px",
                  color: "#00f2fe", fontWeight: 700, fontSize: "0.85rem",
                  textDecoration: "none", letterSpacing: "0.03em",
                  fontFamily: "'Syne', sans-serif", transition: "color .2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#00f2fe")}
                >
                  ✉ Request a Build
                </a>
              </div>

              <Link href="/articles/zero-trust-networks" style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.8rem 1.75rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "100px", color: "#6a8090",
                fontWeight: 500, fontSize: "0.85rem", textDecoration: "none",
                transition: "all .3s", fontFamily: "'DM Sans', sans-serif",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(0,242,254,0.35)";
                  e.currentTarget.style.color = "#00f2fe";
                  e.currentTarget.style.background = "rgba(0,242,254,0.06)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                  e.currentTarget.style.color = "#6a8090";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <span style={{ fontSize: "0.8rem" }}>◎</span>
                Read Architecture Guide
              </Link>
            </div>
          </header>

          <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(0,242,254,0.15),transparent)", margin: "0 0 2.5rem" }} />

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3,1fr)",
            gap: "1px", background: "rgba(255,255,255,0.06)",
            borderRadius: "12px", overflow: "hidden", marginBottom: "2.5rem",
          }}>
            {stats.map(stat => (
              <div key={stat.label} style={{ background: "#050b14", padding: "1rem", textAlign: "center" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#e8f4ff", marginBottom: "0.2rem" }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: "0.7rem", color: "#4a7a96", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <section style={{ marginBottom: "5rem" }}>
            <p style={{
              fontSize: "0.68rem", letterSpacing: "0.18em", color: "#4a7a96",
              textTransform: "uppercase", fontWeight: 600, marginBottom: "1.25rem",
            }}>
              What we build
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {services.map((s, i) => (
                <ServiceCard key={s.title} s={s} index={i} />
              ))}
            </div>
          </section>

          <footer style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            padding: "1.75rem 0 2.5rem",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "0.75rem",
          }}>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.1em", color: "#3a6478", textTransform: "uppercase" }}>
              NilcksonTech
            </span>
            <span style={{ fontSize: "0.72rem", color: "#3a6478", fontFamily: "'DM Sans', sans-serif" }}>
              © {new Date().getFullYear()} · All rights reserved
            </span>
            function SocialBar() {
  const socials = [
    {
      label: "Terminal",
      href: "https://github.com/Nilckson",
      accent: "#00f2fe",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:your@email.com",
      accent: "#34d399",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@nilckson",
      accent: "#f87171",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/nilckson",
      accent: "#f472b6",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://facebook.com/nilckson",
      accent: "#60a5fa",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
  ];

  return (
    <div style={{
      display: "flex", justifyContent: "center", gap: "0.5rem",
      padding: "2rem 0 1rem", flexWrap: "wrap",
    }}>
      {socials.map(s => {
        const [hov, setHov] = useState(false);
        return (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            title={s.label}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "44px", height: "44px", borderRadius: "12px",
              background: hov ? `${s.accent}18` : "rgba(255,255,255,0.03)",
              border: `1px solid ${hov ? s.accent + "50" : "rgba(255,255,255,0.07)"}`,
              color: hov ? s.accent : "#3a5468",
              textDecoration: "none",
              transition: "all 0.25s cubic-bezier(0.23,1,0.32,1)",
              transform: hov ? "translateY(-3px)" : "translateY(0)",
              boxShadow: hov ? `0 4px 20px ${s.accent}25` : "none",
            }}
          >
            {s.icon}
          </a>
        );
      })}
    </div>
  );
            }
          </footer>

        </div>
      </main>
    </>
  );
}
