"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  {
    icon: "◈",
    accent: "#a78bfa",
    title: "Threat Hunting",
    desc: "Proactively search for attackers hiding in your network before they cause damage.",
  },
  {
    icon: "⬡",
    accent: "#00f2fe",
    title: "Network Auditing",
    desc: "Full assessment of your network infrastructure to identify vulnerabilities and misconfigurations.",
  },
  {
    icon: "◉",
    accent: "#34d399",
    title: "Penetration Testing",
    desc: "Simulated attacks on your systems to find weaknesses before real attackers do.",
  },
  {
    icon: "◆",
    accent: "#fb923c",
    title: "Incident Response",
    desc: "Rapid containment and recovery when a breach occurs — minimizing damage and downtime.",
  },
];

export default function Security() {
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
        .hero-in { animation: fadeUp .6s ease both; }
        .d1 { animation-delay:.05s; }
        .d2 { animation-delay:.15s; }
        .d3 { animation-delay:.25s; }
      `}</style>

      <main style={{
        minHeight: "100vh", background: "#050b14",
        color: "#fff", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden",
      }}>
        <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(0,242,254,0.04) 0%, transparent 60%)" }} />
        <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(0,242,254,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)" }} />

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
            <Link href="/" style={{ fontSize: "0.8rem", color: "#6a8fa8", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", transition: "color .2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00f2fe")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6a8fa8")}
            >
              ← Home
            </Link>
          </nav>

          <header style={{ padding: "3rem 0 2.5rem" }}>
            <div className="hero-in d1" style={{
              display: "inline-flex", alignItems: "center", gap: "0.45rem",
              background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)",
              borderRadius: "100px", padding: "0.3rem 0.9rem", marginBottom: "1.5rem",
              fontSize: "0.7rem", letterSpacing: "0.12em", color: "#a78bfa",
              textTransform: "uppercase", fontWeight: 500,
            }}>
              <span style={{
                width: "5px", height: "5px", borderRadius: "50%",
                background: "#a78bfa", boxShadow: "0 0 7px #a78bfa",
                animation: "pulse 2s ease infinite", display: "inline-block",
              }} />
              Cybersecurity
            </div>

            <h1 className="hero-in d2" style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 900,
              fontSize: "clamp(2.2rem, 8vw, 3.5rem)",
              lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1rem",
              background: "linear-gradient(135deg, #fff 0%, #c4b5fd 55%, #a78bfa 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Advanced Threat Hunting & Defense
            </h1>

            <p className="hero-in d3" style={{
              fontSize: "clamp(0.9rem, 3vw, 1rem)", color: "#8fafc7",
              maxWidth: "480px", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem",
            }}>
              Proactive cybersecurity services that shift your posture from reactive to offensive — finding attackers before they find you.
            </p>

            <div className="hero-in d3" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/articles/threat-hunting" style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.8rem 1.75rem",
                background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                borderRadius: "100px", color: "#fff", fontWeight: 700,
                fontSize: "0.85rem", textDecoration: "none",
                letterSpacing: "0.03em", fontFamily: "'Syne', sans-serif",
                boxShadow: "0 0 28px rgba(167,139,250,0.25), 0 4px 16px rgba(0,0,0,0.4)",
                transition: "transform .2s, box-shadow .2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Read Threat Hunting Guide →
              </Link>
            </div>
          </header>

          <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(167,139,250,0.2),transparent)", margin: "0 0 2.5rem" }} />

          <section style={{ marginBottom: "5rem" }}>
            <p style={{
              fontSize: "0.68rem", letterSpacing: "0.18em", color: "#4a7a96",
              textTransform: "uppercase", fontWeight: 600, marginBottom: "1.25rem",
            }}>Services</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {services.map((s, i) => {
                const [hov, setHov] = useState(false);
                return (
                  <div key={s.title}
                    onMouseEnter={() => setHov(true)}
                    onMouseLeave={() => setHov(false)}
                    style={{
                      background: hov ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)",
                      border: `1px solid ${hov ? s.accent + "45" : "rgba(255,255,255,0.07)"}`,
                      borderRadius: "14px", padding: "1.5rem",
                      transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
                      transform: hov ? "translateY(-3px)" : "translateY(0)",
                      position: "relative", overflow: "hidden",
                    }}
                  >
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                      background: `linear-gradient(90deg, ${s.accent}, transparent)`,
                      opacity: hov ? 1 : 0.3, transition: "opacity 0.3s",
                    }} />
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <span style={{ fontSize: "1.3rem", color: s.accent }}>{s.icon}</span>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#e8f4ff" }}>
                        {s.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "#8fafc7", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <footer style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            padding: "1.75rem 0 2.5rem",
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem",
          }}>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.1em", color: "#3a6478", textTransform: "uppercase" }}>NilcksonTech</span>
            <span style={{ fontSize: "0.72rem", color: "#3a6478", fontFamily: "'DM Sans', sans-serif" }}>
              © {new Date().getFullYear()} · All rights reserved
            </span>
          </footer>

        </div>
      </main>
    </>
  );
                }
