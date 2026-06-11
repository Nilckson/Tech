import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NilcksonTech",
  description: "Enterprise systems, cybersecurity, and tech education.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="glow-top-right" />
        <div className="glow-bottom-left" />
        <div className="grid-bg" />
        {children}
      </body>
    </html>
  );
}