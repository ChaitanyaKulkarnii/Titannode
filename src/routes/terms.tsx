import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service — TitanNode" }] }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <InfoPage
      title="Terms of Service"
      subtitle="Last Updated: 27th May 2026 — Please read these terms carefully before using TitanNode services."
    >
      <div className="space-y-8">
        <section>
          <p className="text-base leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) form a legally binding agreement between you (&quot;User&quot;, &quot;Customer&quot;, &quot;Client&quot;) and <strong>TitanNode</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms govern your access to and use of our website (<a href="https://titannode.fun" className="text-primary hover:underline">https://titannode.fun</a>), billing panel, APIs, servers, infrastructure, and all related services.
          </p>
          <p className="mt-3 text-base leading-relaxed">
            By registering, purchasing, or using our services, you agree to these Terms, our Privacy Policy, Acceptable Use Policy (AUP), and Refund Policy. If you do not agree, you must discontinue use immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">1. Eligibility</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>You must be at least 14 years old or the legal age in your jurisdiction.</li>
            <li>If acting on behalf of a business, you confirm you have authority to bind that entity.</li>
            <li>We may request identity verification at any time.</li>
            <li>Services may not be used in restricted jurisdictions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">2. Account Registration</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>You must provide accurate, complete, and current information.</li>
            <li>False identities or misleading details are strictly prohibited.</li>
            <li>Multiple accounts created to bypass limits may be terminated immediately.</li>
            <li>We reserve the right to suspend accounts pending identity verification.</li>
            <li>You are responsible for maintaining the security of your account and credentials.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">3. Services Provided</h2>
          <p className="text-muted-foreground mb-2">TitanNode provides:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Free hosting &amp; trials</li>
            <li>Shared web hosting</li>
            <li>Game hosting (Minecraft, Bot hosting, etc.)</li>
            <li>VPS &amp; RDP hosting</li>
            <li>Dedicated IP services &amp; custom add-ons</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">All services are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">4. Free Hosting Terms</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Free hosting is provided at our sole discretion.</li>
            <li>No uptime guarantees or automated backup guarantees apply to free plans.</li>
            <li>Resources may be limited, throttled, or modified at any time.</li>
            <li>Incomplete or inactive accounts may be deleted automatically after extended inactivity.</li>
            <li>Advertisements or TitanNode branding may be displayed on free services.</li>
            <li>Free plans strictly prohibit crypto mining, file storage abuse, proxy/VPN networks, pirated software, adult content, high CPU scripts, and automated bots.</li>
            <li>Free accounts violating any terms may be suspended immediately without notice.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">5. Paid Services</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>All paid services are billed in advance on a recurring subscription or one-time basis.</li>
            <li>Service provisioning begins after confirmed payment receipt.</li>
            <li>Resource limits must be respected at all times.</li>
            <li>Pricing is subject to change with reasonable prior notice.</li>
            <li>Paid services grant usage rights but do not transfer physical hardware ownership.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">6. VPS &amp; Root Access Responsibility</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>If your service includes root or administrative access, you are solely responsible for server security.</li>
            <li>You must maintain firewalls, security configurations, and operating system updates.</li>
            <li>Misconfigured servers causing network abuse or high load may be suspended.</li>
            <li>TitanNode does not provide unmanaged system administration unless custom support is purchased.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">7. Payments &amp; Billing</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>All services operate on a prepaid billing cycle.</li>
            <li>Invoices must be paid in full on or before the due date to avoid service interruption.</li>
            <li>Unpaid invoices result in automatic service suspension and subsequent data deletion.</li>
            <li>Suspended services may incur a reactivation fee.</li>
            <li>Applicable taxes (including GST) may be added to invoices.</li>
            <li>Payment chargebacks or PayPal disputes result in immediate account suspension and a permanent ban.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">8. User Responsibility for Billing &amp; Account Management</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>You are solely responsible for managing and monitoring your account, including active services, renewal dates, unpaid invoices, and credit balance.</li>
            <li>You agree to log in regularly to review active services, upcoming renewals, outstanding invoices, and account balances.</li>
            <li>TitanNode is not liable for suspension, termination, service interruption, or data loss caused by failure to check or pay invoices on time. Not logging into your account is not a valid excuse.</li>
            <li>You must maintain sufficient credit balance or valid payment methods to prevent service interruptions.</li>
            <li>While invoice reminder emails are sent automatically, you are responsible for ensuring your registered email address is valid and monitored. Failure to receive email notifications does not excuse missed payments.</li>
            <li>Hosted data may be permanently purged following suspension due to non-payment.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">9. Refund Policy Summary</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Refunds for eligible first-time purchases follow a tiered schedule: <strong>100% within 12 hours</strong>, <strong>90% within 24 hours</strong>, <strong>80% within 48 hours</strong>, and <strong>50% within 5 days</strong>.</li>
            <li>After 5 days (120 hours) from purchase, services are <strong>strictly non-refundable</strong> under any circumstances.</li>
            <li>Virtual Private Servers (VPS) and Dedicated RDP plans are strictly non-refundable due to instant dedicated resource reservation.</li>
            <li>Dedicated IPs, domains, setup fees, add-ons, and abuse-suspended accounts are non-refundable.</li>
            <li>Approved refunds are returned strictly to the original payment method.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">10. Resource Usage &amp; Fair Use</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Excessive CPU, RAM, disk I/O, or bandwidth usage affecting node stability may result in throttling or suspension.</li>
            <li>Infinite loops, malicious background scripts, or CPU stressers are strictly prohibited.</li>
            <li>Public file-sharing platforms are not allowed without prior authorization.</li>
            <li>Cryptocurrency mining is strictly banned across all standard hosting packages.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">11. Prohibited Activities</h2>
          <p className="text-muted-foreground mb-2">Strictly prohibited activities include:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Malware, ransomware, or virus distribution</li>
            <li>Phishing portals, fake login forms, or financial scams</li>
            <li>Hacking tools, botnet controllers, or DDoS-for-hire platforms</li>
            <li>Unsolicited bulk email (Spam) or mail relay abuse</li>
            <li>Copyright-infringing or pirated material hosting</li>
            <li>Terrorism-related content or hate speech</li>
            <li>Carding, stolen credit card processing, or identity theft</li>
            <li>Blackhat SEO manipulation or abusive web scraping</li>
          </ul>
          <p className="mt-2 text-sm text-amber-400 font-medium">Violations result in immediate service termination without refund and reporting to legal authorities.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">12. Abuse Complaints</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Abuse reports received by TitanNode must be resolved within 24 hours of notice.</li>
            <li>Failure to respond or resolve abuse tickets leads to immediate service suspension.</li>
            <li>Repeat violations result in permanent account termination.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">13. Staff Harassment Policy</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Harassment, threats, insults, profanity, or abusive conduct toward TitanNode staff via tickets, live chat, email, or Discord will result in immediate service termination without refund.</li>
            <li>We maintain a strict zero-tolerance policy against staff harassment.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">14. Data &amp; Backups</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>You are solely responsible for maintaining external off-site backups of your data.</li>
            <li>TitanNode does not guarantee data restoration or retention.</li>
            <li>We are not liable for data loss caused by hardware failure, cyberattacks, user misconfiguration, or non-payment deletion.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">15. Service Level Agreement (SLA)</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Paid services carry a 98% monthly network uptime guarantee.</li>
            <li>SLA credit claims must be submitted via support ticket within 7 days of the incident.</li>
            <li>Approved credits apply exclusively to future invoice renewals.</li>
            <li>Exclusions include scheduled maintenance, third-party outages, user misconfigurations, and DDoS attacks exceeding standard mitigation limits. Free plans are excluded.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">16. Dedicated IP Policy</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Assigned IP addresses remain the exclusive property of TitanNode or upstream providers.</li>
            <li>IP misuse leading to blacklisting results in immediate IP revocation without refund.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">17. Affiliate Program</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Self-referrals and fraudulent referral campaigns are strictly forbidden.</li>
            <li>Commissions are reversed if referred orders are refunded or disputed.</li>
            <li>TitanNode reserves the right to terminate affiliate accounts violating referral guidelines.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">18. Reseller Policy</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Reselling VPS or infrastructure requires explicit written reseller authorization.</li>
            <li>Unauthorized infrastructure reselling will lead to instant account termination.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">19. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All TitanNode branding, logos, software, control panels, and custom designs remain the sole intellectual property of TitanNode. Unauthorized copying or redistribution is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">20. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            To the maximum extent permitted by applicable law, TitanNode shall not be liable for any indirect, incidental, or consequential damages resulting from service usage or downtime. Total aggregate liability is strictly capped at the total amount paid by you to TitanNode in the preceding 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">21. Indemnification</h2>
          <p className="text-muted-foreground leading-relaxed">
            You agree to defend, indemnify, and hold harmless TitanNode and its operators from any claims, damages, liabilities, costs, or legal fees arising from your use of our services or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">22. Force Majeure</h2>
          <p className="text-muted-foreground leading-relaxed">
            TitanNode is not liable for performance delays or failures resulting from causes beyond reasonable control, including natural disasters, warfare, power grid outages, upstream fiber cuts, or government regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">23. Suspension &amp; Termination</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to suspend or terminate service access without notice for Terms violations, non-payment, fraud, security threats, or legal compliance demands. No refunds are granted for terminated accounts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">24. Severability</h2>
          <p className="text-muted-foreground leading-relaxed">
            If any provision of these Terms is held unenforceable or invalid, the remaining provisions will continue in full force and effect.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">25. Entire Agreement</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms of Service, along with our Privacy Policy, Acceptable Use Policy, and Refund Policy, constitute the complete agreement between you and TitanNode regarding your use of our services.
          </p>
        </section>
      </div>
    </InfoPage>
  );
}
