export const articles = [
  {
    slug: "zero-trust-networks",
    tag: "Architecture",
    tagColor: "#00f2fe",
    title: "Building Zero-Trust Networks from Scratch",
    excerpt: "How modern enterprises eliminate implicit trust and verify every request — no matter the source.",
    min: "6 min read",
    date: "Jun 2, 2026",
    content: `
Zero trust is a security model based on the principle of "never trust, always verify."

## What Is Zero Trust?

Traditional networks operated on a castle-and-moat model — once inside, you were trusted. Zero trust eliminates that assumption entirely.

## Core Principles

**Verify explicitly.** Always authenticate and authorize based on all available data points — identity, location, device health, and more.

**Use least privilege access.** Limit user access with just-in-time and just-enough-access policies.

**Assume breach.** Minimize blast radius. Segment access, encrypt everything, use analytics to detect anomalies.

## Getting Started

1. Map your sensitive data and where it lives
2. Map the flows of that data across your network
3. Architect a zero-trust network around those flows
4. Create a zero-trust policy for every user and resource
5. Monitor, maintain, and continuously improve
    `,
  },
  {
    slug: "threat-hunting",
    tag: "Cybersecurity",
    tagColor: "#a78bfa",
    title: "Threat Hunting: Finding Attackers Before They Strike",
    excerpt: "Proactive detection strategies that shift security teams from reactive to offensive.",
    min: "8 min read",
    date: "May 28, 2026",
    content: `
Threat hunting flips the script — instead of waiting for alerts, you actively search for signs of compromise.

## Why Threat Hunting Matters

Most breaches go undetected for over 200 days. Automated tools catch known threats, but skilled attackers evade them. Human-led hunting fills that gap.

## The Hunt Process

**Form a hypothesis.** Start with threat intelligence — what TTPs (tactics, techniques, procedures) are attackers using right now?

**Collect and process data.** Logs, endpoint telemetry, network flows — the more visibility, the better.

**Investigate.** Use tools like Splunk, Elastic, or Velociraptor to dig into anomalies.

**Resolve and document.** If you find something, contain it. Either way, document what you learned.

## Key Tools

- **Velociraptor** — endpoint visibility and live forensics
- **Zeek** — network traffic analysis
- **YARA** — malware pattern matching
    `,
  },
  {
    slug: "developers-learn-networking",
    tag: "Dev",
    tagColor: "#34d399",
    title: "Why Every Developer Should Learn Networking",
    excerpt: "TCP/IP isn't just for sysadmins. Understanding packets makes you a 10x engineer.",
    min: "5 min read",
    date: "May 20, 2026",
    content: `
Most developers treat the network as a black box. That's a mistake.

## It Makes You a Better Debugger

When your API call fails, do you know how to tell if it's a DNS issue, a routing problem, or a firewall rule? Network knowledge turns mysterious failures into diagnosable problems.

## Core Concepts Every Dev Should Know

**DNS.** How your domain name resolves to an IP. Understand TTLs, A records, CNAMEs.

**TCP vs UDP.** TCP guarantees delivery and order. UDP is faster but unreliable. Know when to use which.

**HTTP/2 and HTTP/3.** How multiplexing works. Why QUIC matters for performance.

**TLS.** What actually happens in a TLS handshake. Why certificate errors happen.

## Practical Skills

- Read \`curl -v\` output
- Use \`dig\` and \`nslookup\`
- Interpret Wireshark captures
- Understand CIDR notation and subnetting
    `,
  },
];
