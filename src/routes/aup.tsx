import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/aup")({
  head: () => ({ meta: [{ title: "Acceptable Use Policy — TitanNode" }] }),
  component: AupPage,
});

export function AupPage() {
  return (
    <InfoPage
      title="Acceptable Use Policy"
      subtitle="Acceptable use guidelines, prohibited content rules, and security enforcement."
    >
      <div className="space-y-8">
        <section>
          <p className="text-base leading-relaxed">
            This Acceptable Use Policy (&quot;AUP&quot;) governs the use of all services provided by <strong>TitanNode</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). This policy applies to all clients utilizing web hosting, game hosting, VPS, dedicated servers, dedicated IPs, bot hosting, and network infrastructure. Violations result in immediate service suspension or permanent account termination without refund.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">1. General Principles</h2>
          <p className="text-muted-foreground mb-2">You agree to utilize TitanNode infrastructure responsibly, lawfully, and in a manner that does not compromise network security or degrade performance for other tenants. You maintain full responsibility for all content hosted under your account credentials.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">2. Strictly Prohibited Content (All Services)</h2>
          <p className="text-muted-foreground mb-2">The following content is strictly forbidden across all TitanNode services:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Malware, ransomware, spyware, keyloggers, or trojan distribution</li>
            <li>Phishing portals, spoofed banking pages, or credential harvesting forms</li>
            <li>Carding operations, stolen payment processing, or financial fraud tools</li>
            <li>Copyright-infringing media, pirated software, cracked scripts, or warez</li>
            <li>Extremist material, terror-related content, or illegal hate propaganda</li>
            <li>Child sexual abuse material (CSAM) — <em>reported immediately to law enforcement authorities</em></li>
            <li>Deepfake fraud scripts or non-consensual graphic material</li>
            <li>Unlicensed gambling platforms operating in violation of local laws</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">3. Web &amp; Shared Hosting Safeguards</h2>
          <p className="text-muted-foreground mb-2">For web hosting and reseller accounts, clients may NOT:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Operate public file storage or backup mirrors unrelated to hosted websites</li>
            <li>Run cryptocurrency mining scripts or background CPU loops</li>
            <li>Operate public torrent trackers, seedboxes, or P2P indexing nodes</li>
            <li>Execute automated scraping bots causing excessive CPU or I/O load</li>
            <li>Abuse PHP mail functions or send unsolicited bulk marketing emails</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">4. Game Server Abuse Rules</h2>
          <p className="text-muted-foreground mb-2">For game servers (Minecraft, Bot hosting, etc.), clients may NOT:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Deploy crash clients, exploit tools, or memory corruption utilities</li>
            <li>Launch outbound network floods or DDoS attacks from game panels</li>
            <li>Distribute pirated game plugins or unauthorized cracked game binaries</li>
            <li>Operate mass alt-farming bots or automated abuse farms targeting third-party networks</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">5. VPS &amp; Server Infrastructure Restrictions</h2>
          <p className="text-muted-foreground mb-2">Root access VPS and dedicated environments may NOT be used for:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Botnet command &amp; control (C2) servers</li>
            <li>DDoS-for-hire, stresser, or booter platforms</li>
            <li>Open mail relays or spam campaign infrastructure</li>
            <li>Crypto mining pools or unauthorized hardware stress testing</li>
            <li>Abusive proxy/VPN networks masking malicious activities</li>
            <li>Brute-force password cracking tools targeting external networks</li>
            <li>Unauthorized port scanning or vulnerability probing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">6. Dedicated IP Reputation</h2>
          <p className="text-muted-foreground leading-relaxed">
            Assigned IP addresses remain the property of TitanNode. Using IPs for spam campaigns, blackhat SEO, open proxies, or illicit activities causing IP reputation blacklisting will result in immediate IP revocation without refund.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">7. Network Abuse Security Monitoring</h2>
          <p className="text-muted-foreground mb-2">Network activity is monitored automatically to protect hardware integrity. Outbound DDoS attacks, ARP spoofing, packet sniffing, or network flood attempts trigger automated network port isolation and instant service suspension.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">8. Abuse Notice Resolution</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Standard abuse complaints sent to TitanNode must be investigated and resolved by the client within <strong>24 hours</strong> of notice.</li>
            <li>Failure to respond to abuse tickets within 24 hours results in automatic account suspension.</li>
            <li>Zero-tolerance violations (malware, phishing, CSAM, DDoS attacks) result in immediate termination without advance notice.</li>
          </ul>
        </section>
      </div>
    </InfoPage>
  );
}
