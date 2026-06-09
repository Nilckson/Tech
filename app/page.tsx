"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SocialBar from "./components/SocialIcons";
import { articles } from "./data/articles";

const services = [
  { href: "/systems",  icon: "⬡", accent: "#22d3ee", label: "Infrastructure", sub: "Network architecture & deployment" },
  { href: "/security", icon: "◈", accent: "#a78bfa", label: "Security",       sub: "Offensive security & threat auditing" },
  { href: "/courses",  icon: "◉", accent: "#34d399", label: "Education",      sub: "Technical courses & resources" },
  { href: "/merch",    icon: "◆", accent: "#fbbf24", label: "Hardware",       sub: "Premium tech gear & apparel" },
];

function Aurora() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let raf: number, t = 0;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const W = canvas.width, H = canvas.height;

    interface CustomCanvasRenderingContext2D extends CanvasRenderingContext2D {
      _stars?: Array<{ x: number; y: number; r: number; phase: number }>;
    }
    const customCtx = ctx as CustomCanvasRenderingContext2D;

    function draw() {
      customCtx.clearRect(0, 0, W, H);

      const bands = [
        { y: H * 0.3,  color1: "rgba(56,189,248,0.18)",  color2: "rgba(99,102,241,0.12)",  speed: 0.008, amp: 60, freq: 2.1 },
        { y: H * 0.45, color1: "rgba(139,92,246,0.15)",  color2: "rgba(34,211,238,0.1)",   speed: 0.011, amp: 45, freq: 1.7 },
        { y: H * 0.25, color1: "rgba(34,211,238,0.1)",   color2: "rgba(167,139,250,0.08)", speed: 0.006, amp: 70, freq: 2.8 },
        { y: H * 0.55, color1: "rgba(99,102,241,0.08)",  color2: "rgba(56,189,248,0.06)",  speed: 0.014, amp: 35, freq: 1.4 },
      ];

      bands.forEach(b => {
        customCtx.beginPath();
        const steps = 200;
        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * W;
          const y = b.y + Math.sin(i * 0.03 * b.freq + t * b.speed) * b.amp + Math.sin(i * 0.05 * b.freq - t * b.speed * 1.3) * (b.amp * 0.4);
          i === 0 ? customCtx.moveTo(x, y) : customCtx.lineTo(x, y);
        }
        for (let i = steps; i >= 0; i--) {
          const x = (i / steps) * W;
          const y = b.y + Math.sin(i * 0.03 * b.freq + t * b.speed) * b.amp + Math.sin(i * 0.05 * b.freq - t * b.speed * 1.3) * (b.amp * 0.4) + 80;
          customCtx.lineTo(x, y);
        }
        customCtx.closePath();
        const grad = customCtx.createLinearGradient(0, b.y - b.amp, 0, b.y + b.amp + 80);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.3, b.color1);
        grad.addColorStop(0.7, b.color2);
        grad.addColorStop(1, "transparent");
        customCtx.fillStyle = grad;
        customCtx.fill();
      });

      if (!customCtx._stars) {
        customCtx._stars = Array.from({ length: 140 }, () => ({
          x: Math.random() * W, y: Math.random() * H * 0.75,
          r: Math.random() * 1.3 + 0.2, phase: Math.random() * Math.PI * 2,
        }));
      }
      customCtx._stars.forEach(s => {
        const alpha = 0.2 + Math.sin(t * 0.018 + s.phase) * 0.2;
        customCtx.beginPath();
        customCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        customCtx.fillStyle = `rgba(255,255,255,${alpha})`;
        customCtx.fill();
      });

      t++;
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}

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
        transform: visible ? (hov ? "translateX(10px)" : "translateX(0)") : "translateY(24px)",
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
      <div style={{
        position: "absolute", left: 0, top: "50%",
        transform: hov ? "translateY(-50%) scaleY(1)" : "translateY(-50%) scaleY(0)",
        width: "2px", height: "60%", background: a.tagColor,
        borderRadius: "2px", transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1)",
        transformOrigin: "center",
      }} />

      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.55rem" }}>
          <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: a.tagColor, fontFamily: "'Space Grotesk', sans-serif" }}>
            {a.tag}
          </span>
          <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
          <span style={{ fontSize: "0.78rem", color: "#52525b", fontFamily: "'Outfit', sans-serif" }}>
            {a.min}
          </span>
        </div>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1.15rem", color: hov ? "#fff" : "#d4d4d8", lineHeight: 1.35, transition: "color 0.3s", letterSpacing: "-0.01em" }}>
          {a.title}
        </h3>
      </div>

      <div style={{ color: a.tagColor, opacity: hov ? 1 : 0, transform: hov ? "translateX(0)" : "translateX(-8px)", transition: "all 0.3s ease", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.1rem", flexShrink: 0 }}>
        →
      </div>
    </div>
  );
}

function ServicePill({ s, index }: { s: (typeof services)[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const { ref, visible } = useInView(0.1);

  const inner = (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: "1.1rem", padding: "1.6rem",
        background: hov ? `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, ${s.accent}08 100%)` : "rgba(255,255,255,0.015)",
        border: `1px solid ${hov ? s.accent + "40" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "16px", transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)", cursor: "pointer",
        transform: visible ? (hov ? "translateY(-6px)" : "translateY(0)") : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transitionDelay: visible ? `${index * 0.07}s` : "0s",
        boxShadow: hov ? `0 16px 40px -12px ${s.accent}25, inset 0 1px 0 rgba(255,255,255,0.05)` : "inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <div style={{ fontSize: "1.3rem", color: s.accent, lineHeight: 1, background: `${s.accent}18`, padding: "0.75rem", borderRadius: "12px", flexShrink: 0 }}>
        {s.icon}
      </div>
      <div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: hov ? "#fff" : "#e4e4e7", marginBottom: "0.3rem", letterSpacing: "-0.01em", transition: "color 0.3s" }}>
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

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <main style={{ minHeight: "100vh", position: "relative", overflowX: "hidden", background: "#04050a", color: "#fff" }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Outfit:wght@300;400;500;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .d1 { animation-delay: 0.1s; } .d2 { animation-delay: 0.2s; }
        .d3 { animation-delay: 0.3s; } .d4 { animation-delay: 0.4s; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .btn-primary {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.9rem 2rem; background: #fff; border-radius: 8px; 
          color: #050505; font-weight: 700; font-size: 0.95rem; text-decoration: none;
          font-family: 'Space Grotesk', sans-serif; transition: transform .2s;
        }
        .btn-primary:hover { transform: translateY(-3px); }
        .btn-ghost {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.9rem 2rem; background: transparent; border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px; color: #fff; font-weight: 600; font-size: 0.95rem; text-decoration: none;
          transition: all .2s; font-family: 'Space Grotesk', sans-serif;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.05); }
        .nav-link { font-size: 0.85rem; color: #a1a1aa; text-decoration: none; font-family: 'Outfit', sans-serif; transition: color 0.2s; }
        .nav-link:hover { color: #fff; }
        .section-eyebrow { font-size: 0.7rem; letter-spacing: 0.15em; color: #52525b; text-transform: uppercase; font-weight: 700; margin-bottom: 0.5rem; font-family: 'Space Grotesk', sans-serif; }
        .services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        @media (max-width: 768px) { .services-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Deep Space Backgrounds */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 130% 80% at 50% -5%, #0d1420 0%, #04050a 65%)", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}><Aurora /></div>
      <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.016) 1px,transparent 1px)", backgroundSize: "52px 52px", maskImage: "radial-gradient(ellipse 100% 70% at 50% 0%, black 20%, transparent 100%)" }} />

      <div style={{ position: "relative", zIndex: 3, maxWidth: "860px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)" }}>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2rem 0", opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "linear-gradient(135deg, #fff 0%, #d4d4d8 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 12px rgba(255,255,255,0.1)" }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#080808" }}>N</span>
            </div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.04em", color: "#fff" }}>
              Nilckson<span style={{ color: "#52525b", fontWeight: 500 }}>Tech</span>
            </span>
          </Link>
          <a href="/merch" className="nav-link">Storefront →</a>
        </nav>

        {/* Hero */}
        <section style={{ padding: "5rem 0 6rem" }}>
          <div className="fade-up d1" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "2.25rem", padding: "0.35rem 1rem 0.35rem 0.5rem", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", background: "rgba(34,211,238,0.15)", borderRadius: "100px", padding: "0.2rem 0.6rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", color: "#22d3ee", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 6px #22d3ee", display: "inline-block" }} />
              System Status: Online
            </span>
            <span style={{ fontSize: "0.78rem", color: "#a1a1aa", fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}>Active Protocols</span>
          </div>

          <h1 className="fade-up d2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2.6rem, 7vw, 4.2rem)", lineHeight: 1.08, letterSpacing: "-0.04em", marginBottom: "1.5rem", color: "#fff" }}>
            Engineering Digital <br />
            <span style={{ background: "linear-gradient(100deg, #22d3ee 0%, #818cf8 50%, #a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Resilience.
            </span>
          </h1>

          <p className="fade-up d3" style={{ fontSize: "1.05rem", color: "#71717a", maxWidth: "480px", lineHeight: 1.65, fontWeight: 400, marginBottom: "3rem", fontFamily: "'Outfit', sans-serif" }}>
            Specializing in secure network architecture, offensive security, and full-stack system development.
          </p>

          <div className="fade-up d4 cta-row" style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", alignItems: "center" }}>
            <a href="/systems" className="btn-primary">View Infrastructure</a>
            <a href="/articles" className="btn-ghost">Access Intel</a>
          </div>
        </section>

        {/* Services */}
        <section className="fade-up d4" style={{ marginBottom: "5.5rem" }}>
          <p className="section-eyebrow">Capabilities</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.3rem, 3vw, 1.6rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", marginBottom: "1.75rem" }}>
            Core Focus Areas
          </h2>
          <div className="services-grid">
            {services.map((s, i) => <ServicePill key={s.label} s={s} index={i} />)}
          </div>
        </section>

        {/* Articles */}
        <section style={{ marginBottom: "6rem" }}>
          <p className="section-eyebrow">Intelligence feed</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1rem" }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.3rem, 3vw, 1.6rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>Security & Systems Log</h2>
            <a href="/articles" className="nav-link" style={{ fontSize: "0.85rem" }}>View archive →</a>
          </div>
          <div>
            {articles.map((a, i) => <ArticleCard key={a.slug} a={a} i={i} />)}
          </div>
        </section>

        <SocialBar />

        {/* Footer */}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "2rem 0 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.08em", color: "#3f3f46" }}>
            NILCKSONTECH
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", color: "#52525b", fontFamily: "'Outfit', sans-serif" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#34d399", boxShadow: "0 0 6px #34d399", display: "inline-block" }} />
              All systems operational
            </span>
            <span style={{ fontSize: "0.78rem", color: "#27272a", fontFamily: "'Outfit', sans-serif" }}>
              © {new Date().getFullYear()}
            </span>
          </div>
        </footer>

      </div>
    </main>
  );
                                   }
                      
