export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #020617; /* Deep space black */
            background-image: 
              /* Top Right Orange/Gold Flare */
              radial-gradient(ellipse at 100% 0%, rgba(245, 158, 11, 0.25) 0%, transparent 50%),
              /* Bottom Right Warm Flare */
              radial-gradient(ellipse at 80% 100%, rgba(234, 88, 12, 0.25) 0%, transparent 60%),
              /* Center/Left Cyan Flare */
              radial-gradient(ellipse at 0% 40%, rgba(56, 189, 248, 0.2) 0%, transparent 50%),
              /* Sweeping light beam effect */
              linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.03) 45%, transparent 50%),
              /* Fine tech dot grid */
              radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
            background-size: 100% 100%, 100% 100%, 100% 100%, 200% 200%, 20px 20px;
            animation: sweep 8s linear infinite;
            color: #f8fafc;
            font-family: 'Inter', system-ui, sans-serif;
            min-height: 100vh;
          }
          
          @keyframes sweep {
            0% { background-position: 0% 0%, 0% 0%, 0% 0%, 200% 0%, 0 0; }
            100% { background-position: 0% 0%, 0% 0%, 0% 0%, -200% 0%, 0 0; }
          }

          .neon-card {
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            /* Matching the orange and blue accents on the cards */
            border-top: 1px solid rgba(245, 158, 11, 0.3);
            border-left: 1px solid rgba(56, 189, 248, 0.3);
            border-radius: 12px;
            padding: 2.5rem;
            transition: all 0.4s ease;
            text-decoration: none;
            color: inherit;
            display: block;
          }
          
          .neon-card:hover {
            transform: translateY(-5px) scale(1.02);
            border-color: rgba(245, 158, 11, 0.5);
            box-shadow: 0 10px 30px -10px rgba(245, 158, 11, 0.2), inset 0 0 15px rgba(56, 189, 248, 0.15);
          }
          
          .neon-text {
            background: linear-gradient(to right, #ffffff, #38bdf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
