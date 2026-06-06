export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #0b1121;
            /* Dotted futuristic mesh background with glowing orbs */
            background-image: 
              radial-gradient(ellipse at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 100% 100%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 100% 100%, 100% 100%, 24px 24px;
            color: #f8fafc;
            font-family: 'Inter', system-ui, sans-serif;
            min-height: 100vh;
          }
          .neon-card {
            background: rgba(30, 41, 59, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(56, 189, 248, 0.2);
            border-radius: 12px;
            padding: 2.5rem;
            transition: all 0.3s ease;
            text-decoration: none;
            color: inherit;
            display: block;
          }
          .neon-card:hover {
            border-color: #38bdf8;
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.3), inset 0 0 10px rgba(56, 189, 248, 0.1);
            transform: translateY(-5px);
          }
          .neon-text {
            text-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
