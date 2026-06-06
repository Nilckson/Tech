import { articles } from "../../data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const lines = article.content.trim().split("\n");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #050b14; }
        .prose h2 {
          font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700;
          color: #e8f4ff; margin: 2rem 0 0.75rem; letter-spacing: -0.01em;
        }
        .prose p {
          font-family: 'DM Sans', sans-serif; font-size: 0.95rem;
          color: #4a6275; line-height: 1.8; margin-bottom: 1rem; font-weight: 300;
        }
        .prose strong { color: #8bafc7; font-weight: 500; }
        .prose ul, .prose ol { padding-left: 1.25rem; margin-bottom: 1rem; }
        .prose li {
          font-family: 'DM Sans', sans-serif; font-size: 0.95rem;
          color: #4a6275; line-height: 1.8; font-weight: 300;
        }
        .prose code {
          font-family: monospace; font-size: 0.85rem; color: #00f2fe;
          background: rgba(0,242,254,0.08); padding: 0.15rem 0.4rem; border-radius: 4px;
        }
      `}</style>

      <main style={{ minHeight: "100vh", background: "#050b14", color: "#fff", overflowX: "hidden" }}>
        <div style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(0,242,254,0.06) 0%, transparent 65%)",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", padding: "0 clamp(1rem,5vw,2rem)" }}>

          <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 0" }}><Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
  <img src="/favicon.png" style={{ width: "28px", height: "28px", borderRadius: "6px" }} />
  <span style={{
    fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "0.95rem",
    letterSpacing: "0.1em", color: "#00f2fe", textTransform: "uppercase",
  }}>NilcksonTech</span>
</Link>
            <Link href="/" style={{
              fontSize: "0.8rem", color: "#2d4a5e", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              ← Back
            </Link>
          </nav>

          <header style={{ padding: "2.5rem 0 2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <span style={{
                fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: article.tagColor,
                background: `${article.tagColor}15`, padding: "0.25rem 0.65rem",
                borderRadius: "100px", border: `1px solid ${article.tagColor}30`,
              }}>
                {article.tag}
              </span>
              <span style={{ fontSize: "0.72rem", color: "#2d4a5e", fontFamily: "'DM Sans', sans-serif" }}>
                {article.date} · {article.min}
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 900,
              fontSize: "clamp(1.8rem, 6vw, 2.5rem)",
              lineHeight: 1.15, letterSpacing: "-0.025em",
              color: "#e8f4ff", marginBottom: "1rem",
            }}>
              {article.title}
            </h1>

            <p style={{
              fontSize: "1rem", color: "#3d5a6e", lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
            }}>
              {article.excerpt}
            </p>

            <div style={{
              height: "1px",
              background: `linear-gradient(90deg, ${article.tagColor}40, transparent)`,
              margin: "2rem 0",
            }} />
          </header>

          <article className="prose" style={{ paddingBottom: "5rem" }}>
            {lines.map((line, i) => {
              if (line.startsWith("## "))
                return <h2 key={i}>{line.replace("## ", "")}</h2>;
              if (line.startsWith("- "))
                return (
                  <ul key={i}>
                    <li dangerouslySetInnerHTML={{
                      __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }} />
                  </ul>
                );
              if (line.match(/^\d\./))
                return (
                  <ol key={i}>
                    <li dangerouslySetInnerHTML={{
                      __html: line.replace(/^\d\.\s/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }} />
                  </ol>
                );
              if (line.trim() === "") return <div key={i} style={{ height: "0.5rem" }} />;
              return (
                <p key={i} dangerouslySetInnerHTML={{
                  __html: line
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/`(.*?)`/g, "<code>$1</code>"),
                }} />
              );
            })}
          </article>

        </div>
      </main>
    </>
  );
    }
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
