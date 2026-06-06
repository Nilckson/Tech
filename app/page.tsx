"use client";

import { useEffect, useRef, useState } from "react";

const neonCardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(0, 242, 254, 0.15)",
  borderRadius: "16px",
  padding: "2rem",
  backdropFilter: "blur(12px)",
  transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  textDecoration: "none",
  display: "block",
  color: "inherit",
};

const cards = [
  {
    href: "/systems",
    title: "System Architecture",
    desc: "Enterprise-grade design and deployment.",
    icon: "⬡",
    accent: "#00f2fe",
  },
  {
    href: null,
    title: "Cybersecurity",
    desc: "Advanced threat hunting and defense.",
    icon: "◈",
    accent: "#a78bfa",
  },
  {
    href: "/courses",
    title: "Tech Courses",
    desc: "Learn networking, coding, and design.",
    icon: "◉",
    accent: "#34d399",
  },
  {
    href: null,
    title: "Merchandise Store",
    desc: "Tech-inspired apparel and gear.",
    icon: "◆",
    accent: "#fb923c",
  },
];

function NeonCard({ card }: { card: (typeof cards)[0] }) {
  const [hovered, setHovered] = useState(false);

  const style: React.CSSProperties = {
    ...neonCardStyle,
    border: hovered
      ? `1px solid ${card.accent}55`
      : "1px solid rgba(0, 242, 254, 0.12)",
    boxShadow: hovered
      ? `0 0 40px ${card.accent}22, 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 ${card.accent}22`
      : "0 4px 24px rgba(0,0,0,0.3)",
    transform: hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
    background: hovered ? `rgba(255,255,255,0.055)` : "rgba(255,255,255,0.025)",
  };

  const inner = (
    <div
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${card.accent}18 0%, transparent 70%)`,
          transition: "opacity 0.35s",
          opacity: hovered ? 1 : 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          fontSize: "1.8rem",
          marginBottom: "1rem",
          color: card.accent,
          lineHeight: 1,
          transition: "transform 0.3s",
          transform: hovered ? "scale(1.15) rotate(8deg)" : "scale(1) rotate(0)",
          display: "inline-block",
        }}
      >
        {card.icon}
      </div>
      <h3
        style={{
          color: "#f0f6ff",
          fontSize: "1.15rem",
          fontWeight: "700",
          marginBottom: "0.5rem",
          letterSpacing: "0.01em",
          fontFamily: "'Syne', sans-serif",
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          color: "#7a8fa6",
          fontSize: "0.9rem",
          lineHeight: "1.6",
          fontFamily: "'DM Sans', sans-serif",
          margin: 0,
        }}
      >
        {card.desc}
      </p>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          width: hovered ? "100%" : "0%",
          background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
          transition: "width 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />
    </div>
  );

  if (card.href) {
    return (
      <a href={card.href} style={{ textDecoration: "none", display: "block" }}>
        {inner}
      </a>
    );
  }
  return inner;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 0.85; transform: scale(1.08); }
        }
        .grid-card { animation: fadeUp 0.6s ease both; }
        .grid-card:nth-child(1) { animation-delay: 0.35s; }
        .grid-card:nth-child(2) { animation-delay: 0.45s; }
        .grid-card:nth-child(3) { animation-delay: 0.55s; }
        .grid-card:nth-child(4) { animation-delay: 0.65s; }
      `}</style>

      <main
        style={{
          minHeight: "100vh",
          background: "#050b14",
          color: "#fff",
          fontFamily: "'DM Sans', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background mesh */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,242,254,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(167,139,250,0.06) 0%, transparent 60%)",
          }}
        />

        {/* Dot grid */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            backgroundImage: "radial-gradient(rgba(0,242,254,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 5%",
          }}
        >
          {/* Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "2rem 0 0",
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.5s",
            }}
          >
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 900,
                fontSize: "1.1rem",
                letterSpacing: "0.08em",
                color: "#00f2fe",
                textTransform: "uppercase",
              }}
            >
              NilcksonTech
            </span>
            <div style={{ display: "flex", gap: "2rem", fontSize: "0.85rem" }}>
              {["Systems", "Courses", "Store"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  style={{
                    color: "#4e6070",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#00f2fe")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#4e6070")
                  }
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          {/* Hero */}
          <header
            style={{
              textAlign: "center",
              padding: "7rem 0 5rem",
              animation: mounted ? "fadeUp 0.7s ease both" : "none",
              animationDelay: "0.1s",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(0,242,254,0.07)",
                border: "1px solid rgba(0,242,254,0.2)",
                borderRadius: "100px",
                padding: "0.35rem 1rem",
                marginBottom: "2.5rem",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                color: "#00f2fe",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#00f2fe",
                  boxShadow: "0 0 8px #00f2fe",
                  animation: "pulseGlow 2s ease infinite",
                  display: "inline-block",
                }}
              />
              Live · Digital Innovation Hub
            </div>

            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
                background: "linear-gradient(135deg, #ffffff 0%, #b8d4e8 50%, #00f2fe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              NilcksonTech
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                color: "#5c7a8f",
                maxWidth: "500px",
                margin: "0 auto 3rem",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              Innovating the future of digital infrastructure — one system at a time.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="/systems"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 2rem",
                  background: "linear-gradient(135deg, #00f2fe, #0075ff)",
                  borderRadius: "100px",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  boxShadow: "0 0 30px rgba(0,242,254,0.25), 0 4px 16px rgba(0,0,0,0.4)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  fontFamily: "'Syne', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 50px rgba(0,242,254,0.4), 0 8px 24px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 30px rgba(0,242,254,0.25), 0 4px 16px rgba(0,0,0,0.4)";
                }}
              >
                Explore Systems →
              </a>
              <a
                href="/courses"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.85rem 2rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "100px",
                  color: "#94a3b8",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                }}
              >
                Browse Courses
              </a>
            </div>
          </header>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(0,242,254,0.2), transparent)",
              marginBottom: "4rem",
            }}
          />

          {/* Ecosystem label */}
          <p
            style={{
              textAlign: "center",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              color: "#2d4a5e",
              textTransform: "uppercase",
              marginBottom: "2rem",
              fontWeight: 500,
            }}
          >
            Ecosystem
          </p>

          {/* Grid */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
              paddingBottom: "6rem",
            }}
          >
            {cards.map((card) => (
              <div key={card.title} className="grid-card">
                <NeonCard card={card} />
              </div>
            ))}
          </section>

          {/* Footer */}
          <footer
            style={{
              borderTop: "1px solid rgba(255,255,255,0.05)",
              padding: "2rem 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                color: "#1e3040",
                textTransform: "uppercase",
              }}
            >
              NilcksonTech
            </span>
            <span style={{ fontSize: "0.78rem", color: "#1e3040" }}>
              © {new Date().getFullYear()} · All rights reserved
            </span>
          </footer>
        </div>
      </main>
    </>
  );
          }
