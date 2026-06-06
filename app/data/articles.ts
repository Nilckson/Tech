export const articles = [
  {
    slug: "zero-trust-networks",
    tag: "Architecture",
    tagColor: "#00f2fe",
    title: "Building Zero-Trust Networks from Scratch",
    excerpt: "How modern enterprises eliminate implicit trust and verify every request — no matter the source.",
    min: "3 min read",
    date: "Jun 2, 2026",
    content: `Zero trust is not a single product you can buy. It is an architectural shift based on a simple premise: never trust, always verify.

## The Death of the VPN

Traditional networks used a "castle and moat" approach. You use a VPN to cross the moat, and once inside the castle, you have the keys to the kingdom. 

If an attacker compromises one employee's laptop, they can pivot laterally across the entire internal network. Zero trust eliminates the moat. Every internal service is treated as if it sits on the public internet.

## The Three Pillars of Zero Trust

**1. Identity as the Perimeter**
IP addresses mean nothing. Access is granted based on verified user identity. This requires mandatory Multi-Factor Authentication (MFA) and Single Sign-On (SSO).

**2. Device Posture**
Even if the user is verified, is their device safe? A zero-trust proxy checks if the laptop has the latest OS updates and active antivirus before granting access.

**3. Micro-Segmentation**
Networks are chopped into tiny, isolated segments. A compromised web server cannot talk to the database server unless a strict policy explicitly allows it.

## Practical Implementation: Access Policies

Instead of broad firewall rules, zero-trust uses dynamic access policies. Here is an example of what a zero-trust policy structure looks like in JSON:

\`\`\`json
{
  "policy_name": "Restrict_DB_Access",
  "action": "allow",
  "principals": ["role:database_admin"],
  "conditions": {
    "device_compliant": true,
    "location": ["KE", "ZA"],
    "mfa_recently_verified": true
  },
  "resource": "arn:internal:db:customer_data"
}
\`\`\`

## Getting Started in Your Environment

1. **Map the flows:** Understand exactly which applications need to talk to each other.
2. **Implement an Identity Provider:** Centralize authentication (e.g., Okta, Entra ID).
3. **Deploy an Identity-Aware Proxy:** Put a gateway in front of internal apps so users authenticate before the network connection is even made.`
  },

    {
    slug: "threat-hunting",
    tag: "Cybersecurity",
    tagColor: "#a78bfa",
    title: "Threat Hunting: Finding Attackers Before They Strike",
    excerpt: "Proactive detection strategies that shift security teams from reactive to offensive.",
    min: "3 min read",
    date: "May 28, 2026",
    content: `Threat hunting flips the script — instead of waiting for passive firewall alerts, you actively search your network for signs of compromise. 

## Why Passive Defense Fails

Most breaches go undetected for over 200 days. Automated tools like standard SIEMs catch known malware signatures, but skilled attackers using "living off the land" techniques (like abusing PowerShell or legitimate admin tools) evade them easily. Human-led hunting fills that gap.

## The Threat Hunting Lifecycle

**1. Form a Hypothesis**
You don't just look around randomly. You start with threat intelligence. For example: "A new APT group is exploiting a specific zero-day in web servers to drop web shells."

**2. Collect and Process Data**
You need high-fidelity telemetry. This includes endpoint logs (Windows Event Logs, Sysmon), network flows (PCAP data), and identity logs. 

**3. Investigate the Environment**
Time to dive into the data. Let's say you suspect an attacker is doing internal reconnaissance. You might query your logs for abnormal network scanning. 

### Practical Scenario: Hunting for Internal Recon

Imagine you are using a Linux environment to audit network logs. An attacker who breached a workstation might use Nmap to map your internal subnets.

You can hunt for this by analyzing Zeek connection logs. A simple command-line hunt might look like this:

\`\`\`bash
# Look for a single internal IP connecting to many different hosts on port 445 (SMB)
cat conn.log | awk '{print $3, $5, $6}' | grep "445" | sort | uniq -c | sort -nr | head -n 10
\`\`\`

If you see one IP address attempting to connect to 200 different machines on port 445 in a span of five minutes, you haven't just found an anomaly — you've likely found an active lateral movement attempt.

## Key Hunting Tools

- **Zeek:** Unmatched for network traffic analysis and extracting protocol metadata.
- **Velociraptor:** Incredible for endpoint visibility and live forensics. You can query thousands of endpoints simultaneously.
- **YARA:** The "pattern matching Swiss army knife" for identifying malware families based on hex strings and text patterns.

## Conclusion

A successful hunt doesn't always end with finding an attacker. Often, a hunt reveals misconfigurations or blind spots in your logging. Document everything you find, patch the holes, and refine your hypothesis for the next hunt.`
  },

  {
    slug: "developers-learn-networking",
    tag: "Dev",
    tagColor: "#34d399",
    title: "Why Every Developer Should Learn Networking",
    excerpt: "TCP/IP isn't just for sysadmins. Understanding packets makes you a 10x engineer.",
    min: "3 min read",
    date: "May 20, 2026",
    content: `Most developers treat the network as a black box. You send an API request, and data magically comes back. 

But when a distributed system breaks, the network is often the culprit. Developers who understand networking resolve bugs in minutes that take others days.

## It Makes You a Better Debugger

When your frontend cannot reach the backend, do you know how to isolate the issue? 
* Is it a DNS resolution failure?
* Is a firewall dropping the packets?
* Is it a CORS preflight failure?

Understanding the OSI model turns mysterious timeouts into diagnosable system errors.

## Core Concepts You Must Know

**1. DNS (Domain Name System)**
Learn how domains map to IPs. Understand the difference between an A record and a CNAME, and why TTL (Time To Live) dictates how long DNS changes take to propagate.

**2. TCP vs. UDP**
* **TCP:** Guarantees delivery and order. Used for web traffic and APIs. It requires a 3-way handshake.
* **UDP:** Fast but unreliable. Packets can drop. Used for gaming and live video streaming.

**3. The TLS Handshake**
Understand what happens before an HTTPS connection is secured. Knowing this helps you debug certificate mismatch errors instantly.

## Practical Skills: Command Line Debugging

You don't need a heavy GUI tool to debug network calls. The terminal is your best friend. If you run a Linux environment, you already have the tools.

**Check DNS Resolution with Dig:**
Find out exactly where a domain is pointing.
\`\`\`bash
dig +short api.nilckson.tech
\`\`\`

**Trace an API Call with cURL:**
Use the verbose flag to see the exact headers, handshake, and response times.
\`\`\`bash
curl -v -X GET https://api.nilckson.tech/health
\`\`\`

Mastering these basics bridges the gap between writing code and deploying resilient, high-performance infrastructure.`
  }

];
