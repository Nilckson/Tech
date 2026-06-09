"use client";

import { useState, useEffect, useRef } from "react";

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

    // Extend rendering context to hold stars
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
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />;
}

export default function HeroPreview() {
  const [hov1, setHov1] = useState(false);
  const [hov2, setHov2] = useState(false);

  return (
    <div style={{ background: "#04050a", minHeight: "100vh", overflow: "hidden", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0%,100% { opacity:1; box-shadow: 0 0 6px #22d3ee; }
          50%      { opacity:0.5; box-shadow: 0 0 16px #22d3ee; }
        }
        .fu1{animation:fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.1s both;}
        .fu2{animation:fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.25s both;}
        .fu3{animation:fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.4s both;}
        .fu4{animation:fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.55s both;}
        .fu5{animation:fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.7s both;}
        .nav-a{font-size:0.82rem;color:#52525b;text-decoration:none;font-family:'DM Sans',sans-serif;font-weight:500;transition:color 0.2s;}
        .nav-a:hover{color:#e4e4e7;}
      `}</style>

      {/* Deep space base */}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 130% 80% at 50% -5%, #0d1420 0%, #04050a 65%)" }} />

      {/* Aurora */}
      <div style={{ position:"absolute", inset:0 }}><Aurora /></div>

      {/* Grid */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(255,255,255,0.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.016) 1px,transparent 1px)",
        backgroundSize:"52px 52px",
        maskImage:"radial-gradient(ellipse 100% 70% at 50% 0%, black 20%, transparent 100%)",
      }} />

      {/* Bottom fade */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"30%", background:"linear-gradient(to top,#04050a,transparent)", pointerEvents:"none", zIndex:1 }} />

      {/* Content */}
      <div style={{ position:"relative", zIndex:2, maxWidth:"900px", margin:"0 auto", padding:"0 clamp(1.5rem,5vw,3rem)", minHeight:"100vh", display:"flex", flexDirection:"column" }}>

        {/* Nav */}
        <nav className="fu1" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"2rem 0" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
            <div style={{ width:"34px", height:"34px", borderRadius:"9px", background:"linear-gradient(135deg,#fff 0%,#d4d4d8 100%)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 2px 16px rgba(56,189,248,0.2)" }}>
              <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1rem", color:"#04050a" }}>N</span>
            </div>
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.05rem", letterSpacing:"0.02em", color:"#fff" }}>
              Nilckson<span style={{ color:"#3f3f46" }}>Tech</span>
            </span>
          </div>
          <a href="#" className="nav-a">Browse courses →</a>
        </nav>

        {/* Hero */}
        <div style={{ flex:1, display:"flex", alignItems:"center", paddingBottom:"6rem" }}>
          <div>

            {/* Badge */}
            <div className="fu2" style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", marginBottom:"2.5rem", padding:"0.3rem 1rem 0.3rem 0.4rem", borderRadius:"100px", border:"1px solid rgba(56,189,248,0.18)", background:"rgba(56,189,248,0.04)", backdropFilter:"blur(12px)" }}>
              <span style={{ display:"inline-flex", alignItems:"center", gap:"0.35rem", background:"rgba(34,211,238,0.1)", borderRadius:"100px", padding:"0.18rem 0.65rem", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", fontWeight:500, letterSpacing:"0.06em", color:"#22d3ee", textTransform:"uppercase" }}>
                <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#22d3ee", display:"inline-block", animation:"pulseDot 2s ease-in-out infinite" }} />
                Online
              </span>
              <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.78rem", color:"#6b7280", fontWeight:400 }}>
                Digital Innovation Hub
              </span>
            </div>

            {/* Headline */}
            <h1 className="fu3" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(3rem,8vw,5.2rem)", lineHeight:1.0, letterSpacing:"-0.04em", marginBottom:"0.2rem", color:"#fff" }}>
              Deep tech.
            </h1>
            <h1 className="fu3" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(3rem,8vw,5.2rem)", lineHeight:1.0, letterSpacing:"-0.04em", marginBottom:"2rem", background:"linear-gradient(110deg,#38bdf8 0%,#818cf8 45%,#a78bfa 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              No shortcuts.
            </h1>

            {/* Subtext */}
            <p className="fu4" style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"1.05rem", color:"#6b7280", maxWidth:"460px", lineHeight:1.7, fontWeight:300, marginBottom:"3rem" }}>
              Enterprise systems, cybersecurity, and real-world tech —{" "}
              <span style={{ color:"#9ca3af", fontWeight:400 }}>built for engineers who mean business.</span>
            </p>

            {/* CTAs */}
            <div className="fu5" style={{ display:"flex", gap:"0.85rem", flexWrap:"wrap", alignItems:"center" }}>
              <a href="#"
                onMouseEnter={() => setHov1(true)}
                onMouseLeave={() => setHov1(false)}
                style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.9rem 2rem", background:"#fff", borderRadius:"10px", color:"#04050a", fontWeight:700, fontSize:"0.88rem", textDecoration:"none", fontFamily:"'Syne',sans-serif", letterSpacing:"0.01em", transition:"transform 0.25s cubic-bezier(0.23,1,0.32,1),box-shadow 0.25s", transform:hov1?"translateY(-4px)":"translateY(0)", boxShadow:hov1?"0 16px 40px -8px rgba(56,189,248,0.3)":"none" }}>
                See what's inside <span>→</span>
              </a>
              <a href="#"
                onMouseEnter={() => setHov2(true)}
                onMouseLeave={() => setHov2(false)}
                style={{ display:"inline-flex", alignItems:"center", padding:"0.9rem 2rem", background:hov2?"rgba(255,255,255,0.06)":"rgba(255,255,255,0.03)", border:`1px solid ${hov2?"rgba(56,189,248,0.3)":"rgba(255,255,255,0.08)"}`, borderRadius:"10px", color:hov2?"#fff":"#9ca3af", fontWeight:500, fontSize:"0.88rem", textDecoration:"none", fontFamily:"'DM Sans',sans-serif", transition:"all 0.25s cubic-bezier(0.23,1,0.32,1)", transform:hov2?"translateY(-4px)":"translateY(0)" }}>
                View Systems
              </a>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", color:"#374151", letterSpacing:"0.04em" }}>
                // no account needed
              </span>
            </div>

            {/* Stats */}
            <div className="fu5" style={{ display:"flex", gap:"2.5rem", marginTop:"4rem", flexWrap:"wrap" }}>
              {[{val:"12K+",label:"Engineers"},{val:"340+",label:"Hours"},{val:"4.9★",label:"Rating"},{val:"98%",label:"Uptime"}].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.4rem", color:"#fff", letterSpacing:"-0.03em" }}>{s.val}</div>
                  <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.7rem", color:"#4b5563", marginTop:"0.1rem", letterSpacing:"0.06em", textTransform:"uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
      }
            
