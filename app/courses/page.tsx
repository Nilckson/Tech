"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const courses = [
  {
    id: "cybersecurity",
    icon: "◈",
    accent: "#a78bfa",
    title: "Cybersecurity & Ethical Hacking",
    desc: "Master offensive security, network auditing, Kali Linux environments, and advanced threat hunting techniques.",
    tags: ["Kali Linux", "Pentesting", "Threat Hunting"],
    articleHref: "/articles/threat-hunting",
    videoSoon: true,
  },
  {
    id: "java",
    icon: "◉",
    accent: "#34d399",
    title: "Java Programming",
    desc: "Learn core object-oriented programming concepts, data structures, and robust application development using Java.",
    tags: ["OOP", "Data Structures", "Spring Boot"],
    articleHref: "#",
    videoSoon: true,
  },
  {
    id: "sql",
    icon: "⬡",
    accent: "#00f2fe",
    title: "Database Management & SQL",
    desc: "Master relational database design, complex querying, schema structuring, and secure data management.",
    tags: ["SQL", "Schema Design", "PostgreSQL"],
    articleHref: "#",
    videoSoon: true,
  },
  {
    id: "web",
    icon: "◆",
    accent: "#fb923c",
    title: "Modern Web Engineering",
    desc: "Build responsive, dynamic web applications using modern frameworks like React, Next.js, and Tailwind CSS.",
    tags: ["React", "Next.js", "Tailwind"],
    articleHref: "/articles/developers-learn-networking",
    videoSoon: true,
  },
  {
    id: "design",
    icon: "◇",
    accent: "#f472b6",
    title: "Graphic Design & UI/UX",
    desc: "Develop an eye for design. Learn digital branding, layout structuring, and modern user interface principles.",
    tags: ["Figma", "Branding", "UI Systems"],
    articleHref: "#",
    videoSoon: true,
  },
];

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

function CourseCard({ course, index }: { course: typeof courses[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)",
        border: `1px solid ${hov ? course.accent + "45" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "16px",
        padding: "1.75rem",
        transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
        transform: visible
          ? hov ? "translateY(-5px)" : "translateY(0)"
          : "translateY(28px)",
        opacity: visible ? 1 : 0,
        transitionDelay: visible ? `${index * 0.08}s` : "0s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: `linear-gradient(90deg, ${course.accent}, transparent)`,
        opacity: hov ? 1 : 0.3, transition: "opacity 0.35s",
      }} />

      <div style={{
        position: "absolute", top: "-30px", right: "-30px",
        width: "100px", height: "100px", borderRadius: "50%",
        background: `radial-gradient(circle, ${course.accent}18 0%, transparent 70%)`,
        opacity: hov ? 1 : 0, transition: "opacity 0.35s", pointerEvents: "none",
      }} />

      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{
          fontSize: "1.5rem", color: course.accent, lineHeight: 1,
          transition: "transform 0.3s",
          transform: hov ? "scale(1.15) rotate(8deg)" : "scale(1) rotate(0)",
          flexShrink: 0, marginTop: "2px",
        }}>
          {course.icon}
        </div>
        <h3 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 700,
          fontSize: "1.05rem", color: "#e8f4ff", lineHeight: 1.3,
          letterSpacing: "-0.01em", margin: 0,
        }}>
          {course.title}
        </h3>
      </div>

      <p style={{
        fontSize: "0.85rem", color: "#4a6275", lineHeight: 1.7,
        fontFamily: "'DM Sans', sans-serif", marginBottom: "1.25rem",
      }}>
        {course.desc}
      </p>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        {course.tags.map(tag => (
          <span key={tag} style={{
            fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: course.accent,
            background: `${course.accent}12`, padding: "0.2rem 0.6rem",
            borderRadius: "100px", border: `1px solid ${course.accent}25`,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          padding: "0.6rem 1.1rem",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px", cursor: "not-allowed", opacity: 0.5,
        }}>
          <span style={{ fontSize: "0.75rem" }}>▶</span>
          <span style={{
            fontSize: "0.78rem", color: "#6a8090",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
          }}>
            Video · Coming Soon
          </span>
        </div>

        <Link
          href={course.articleHref}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            padding: "0.6rem 1.1rem",
            background: `${course.accent}12`,
            border: `1px solid ${course.accent}35`,
            borderRadius: "8px", textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `${course.accent}22`;
            e.currentTarget.style.borderColor = `${course.accent}60`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = `${course.accent}12`;
            e.currentTarget.style.borderColor = `${course.accent}35`;
          }}
        >
          <span style={{ fontSize: "0.75rem" }}>📄</span>
          <span style={{
            fontSize: "0.78rem", color: course.accent,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
            letterSpacing: "0.02em",
          }}>
            Read Article
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function Courses() {
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
        .d1 { animation-delay: .05s; }
        .d2 { animation-delay: .15s; }
        .d3 { animation-delay: .25s; }
      `}</style>

      <main style={{
        minHeight: "100vh", background: "#050b14",
        color: "#fff", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden",
      }}>
        <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(167,139,250,0.07) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(0,242,254,0.05) 0%, transparent 60%)" }} />
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
            <Link href="/" style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "0.95rem",
              letterSpacing: "0.1em", color: "#00f2fe", textTransform: "uppercase",
              textDecoration: "none",
            }}>
              NilcksonTech
            </Link>
            <Link href="/" style={{
              fontSize: "0.8rem", color: "#2d4a5e", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif", transition: "color .2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00f2fe")}
              onMouseLeave={e => (e.currentTarget.style.color = "#2d4a5e")}
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
              5 Courses Available
            </div>

            <h1 className="hero-in d2" style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 900,
              fontSize: "clamp(2.2rem, 8vw, 3.5rem)",
              lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1rem",
              background: "linear-gradient(135deg, #fff 0%, #b8d4e8 55%, #a78bfa 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Tech Courses & Training
            </h1>

            <p className="hero-in d3" style={{
              fontSize: "clamp(0.9rem, 3vw, 1rem)", color: "#4a6275",
              maxWidth: "480px", lineHeight: 1.75, fontWeight: 300,
            }}>
              Comprehensive ICT training covering networking, offensive security, full-stack development, database management, and software engineering.
            </p>
          </header>

          <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(167,139,250,0.2),transparent)", margin: "0 0 2.5rem" }} />

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3,1fr)",
            gap: "1px", background: "rgba(255,255,255,0.06)",
            borderRadius: "12px", overflow: "hidden", marginBottom: "2.5rem",
          }}>
            {[
              { val: "5", label: "Courses" },
              { val: "Free", label: "To Read" },
              { val: "Soon", label: "Videos" },
            ].map(stat => (
              <div key={stat.label} style={{ background: "#050b14", padding: "1rem", textAlign: "center" }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: "1.3rem", color: "#e8f4ff", marginBottom: "0.2rem",
                }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: "0.7rem", color: "#2d4a5e", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <section style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "5rem" }}>
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
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
