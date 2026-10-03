import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — TitanNodes" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      subtitle="Last Updated: 27th May 2026 — How TitanNodes protects and processes your personal data."
    >
      <div className="space-y-8">
        <section>
          <p className="text-base leading-relaxed">
            <strong>TitanNodes</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy and handling your personal data in a transparent and secure manner. This Privacy Policy explains how we collect, use, store, disclose, and safeguard your information when you access our website (<a href="https://titannodes.fun" className="text-primary hover:underline">https://titannodes.fun</a>), client portal, control panels, APIs, and hosting services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">1. Scope of This Policy</h2>
          <p className="text-muted-foreground mb-2">This policy applies to:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Visitors to our website and web applications</li>
            <li>Registered account holders and active customers</li>
            <li>Users of our free and paid hosting services</li>
            <li>Affiliates, partners, and support ticket submitters</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">It does not apply to third-party services not owned or operated directly by TitanNodes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">2. Information We Collect</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="text-base font-semibold text-white mb-1">2.1 Information You Provide Directly</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Full legal name and business name</li>
                <li>Email address and phone contact</li>
                <li>Billing address and country of residence</li>
                <li>Government-issued identification (if requested for fraud prevention)</li>
                <li>Support ticket correspondence, email messages, and Discord support logs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address, login timestamps, and geolocation metadata</li>
                <li>Browser specification, operating system, and screen resolution</li>
                <li>Referring URLs, page navigation pathways, and session durations</li>
                <li>Bandwidth utilization, HTTP request headers, and firewall security logs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">2.3 Infrastructure &amp; Service Metrics</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Server resource metrics (CPU load, RAM usage, storage space, bandwidth throughput)</li>
                <li>Automated firewall triggers, DDoS mitigation event logs, and abuse monitoring logs</li>
              </ul>
              <p className="mt-1 text-xs text-muted-foreground italic">Note: We do not monitor or inspect the private file contents of your hosted applications unless required for active security investigations or formal legal compliance requests.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">3. Legal Basis for Processing</h2>
          <p className="text-muted-foreground mb-2">We process personal data based on the following legal grounds:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li><strong>Performance of Contract:</strong> Delivering hosting services, managing accounts, and fulfilling billing obligations.</li>
            <li><strong>Legal Compliance:</strong> Maintaining tax records, fulfilling fraud prevention mandates, and satisfying statutory requirements.</li>
            <li><strong>Legitimate Business Interests:</strong> Securing our network infrastructure, preventing DDoS attacks, and enhancing service performance.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">4. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Account setup, identity verification, and client portal authentication</li>
            <li>Invoice generation, payment processing, and billing management</li>
            <li>Service provisioning, automated server deployments, and technical support</li>
            <li>Detection, prevention, and mitigation of fraudulent orders, network abuse, or cyberattacks</li>
            <li>Sending essential service notifications, maintenance windows, and invoice alerts</li>
          </ul>
          <p className="mt-3 font-semibold text-primary">We NEVER sell, trade, or rent your personal information to third-party advertisers.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">5. Payment Processing</h2>
          <p className="text-muted-foreground leading-relaxed">
            All financial transactions are processed securely viaPCI-compliant third-party gateways (such as Stripe, PayPal, Razorpay, or UPI gateways). TitanNodes never stores or retains complete credit card numbers or banking passwords on its servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">6. Data Retention Policy</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li><strong>Active Accounts:</strong> Account and service data are retained while your subscription remains active.</li>
            <li><strong>Inactive/Terminated Accounts:</strong> Hosted data is deleted after account termination or extended non-payment.</li>
            <li><strong>Financial &amp; Tax Records:</strong> Billing history and invoice logs are retained for statutory tax compliance periods.</li>
            <li><strong>Abuse Records:</strong> Abuse event logs and IP blacklists may be stored indefinitely to protect system integrity.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">7. Data Sharing &amp; Third-Party Integrations</h2>
          <p className="text-muted-foreground mb-2">We share limited data with necessary infrastructure and software partners exclusively to operate our services:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Payment gateways (Stripe, PayPal, Razorpay)</li>
            <li>Control panel vendors (Pterodactyl, cPanel, WHMCS)</li>
            <li>Datacenter &amp; DDoS mitigation providers (Cloudflare, Path, OVH)</li>
            <li>Legal and tax authorities when mandated by valid law enforcement requests</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">8. Security Safeguards</h2>
          <p className="text-muted-foreground leading-relaxed">
            We employ modern security best practices including SSL/TLS transit encryption, hardware firewalls, strict role-based employee access controls, two-factor authentication support, and continuous threat monitoring to safeguard stored data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">9. User Data Rights</h2>
          <p className="text-muted-foreground mb-2">Depending on your jurisdiction, you maintain the following rights:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Right to access personal data stored in your account</li>
            <li>Right to rectify inaccurate or outdated profile information</li>
            <li>Right to request account closure and data erasure (subject to tax/legal retention mandates)</li>
            <li>Right to lodge a privacy query via our support ticket system</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">10. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            For privacy inquiries or data rights requests, please open a support ticket in your TitanNodes client dashboard or contact our privacy compliance team via official support channels.
          </p>
        </section>
      </div>
    </InfoPage>
  );
}
