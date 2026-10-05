import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/sla")({
  head: () => ({ meta: [{ title: "Service Level Agreement — TitanNode" }] }),
  component: SlaPage,
});

function SlaPage() {
  return (
    <InfoPage
      title="Service Level Agreement (SLA)"
      subtitle="Last Updated: 27th May 2026 — Our 98% network uptime commitment and credit guarantee."
    >
      <div className="space-y-8">
        <section>
          <p className="text-base leading-relaxed">
            This Service Level Agreement (&quot;SLA&quot;) details the performance commitments and network availability standards that <strong>TitanNode</strong> (&quot;We&quot;, &quot;Us&quot;, &quot;Our&quot;) guarantees to our customers. It outlines uptime commitments, service credit calculations, maintenance windows, and claim procedures.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">1. Uptime Commitment</h2>
          <p className="text-muted-foreground leading-relaxed">
            TitanNode guarantees a minimum of <strong>98.0% network availability</strong> during any calendar monthly billing cycle across our core routing and bare-metal server infrastructure, while actively striving for &gt;99.5% uptime.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">2. SLA Service Credit Schedule</h2>
          <p className="text-muted-foreground mb-4">
            If monthly network availability falls below the 98% threshold due to verifiable unscheduled outages within TitanNode control, eligible customers are entitled to receive account service credits based on the schedule below:
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-card/60">
            <table className="w-full text-left text-sm text-foreground/90">
              <thead className="border-b border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-wider text-white">
                <tr>
                  <th className="px-6 py-3.5">Monthly Uptime Percentage</th>
                  <th className="px-6 py-3.5">SLA Service Credit Granted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-emerald-400">98.0% – 100.0%</td>
                  <td className="px-6 py-4 text-muted-foreground">Standard Operation (No Credit)</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-yellow-400">94.0% – 97.9%</td>
                  <td className="px-6 py-4 text-yellow-200">10% Credit on Monthly Fee</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-amber-400">89.0% – 93.9%</td>
                  <td className="px-6 py-4 text-amber-200">25% Credit on Monthly Fee</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-rose-400">Below 89.0%</td>
                  <td className="px-6 py-4 text-rose-200">50% Credit on Monthly Fee (Maximum Cap)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="mt-4 list-disc pl-6 space-y-1.5 text-xs text-muted-foreground">
            <li>Service credits are capped at a maximum of 50% of the affected service&apos;s monthly fee.</li>
            <li>Credits are applied exclusively to future billing invoice renewals and cannot be withdrawn as cash.</li>
            <li>Free hosting plans and promotional trial tiers are excluded from SLA credits.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">3. Scheduled Maintenance</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Routine infrastructure maintenance is essential to maintain security and peak hardware performance.</li>
            <li>TitanNode will provide at least 24 hours advance notice for scheduled maintenance via email or status page announcements.</li>
            <li>Emergency security patches (such as critical OS kernel or zero-day vulnerability fixes) may be applied immediately without advance notice.</li>
            <li>Downtime resulting from scheduled maintenance does not count against SLA calculations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">4. Limitations &amp; SLA Exclusions</h2>
          <p className="text-muted-foreground mb-2">The SLA guarantee does not cover service disruptions resulting from:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>Force Majeure events (natural disasters, warfare, power grid blackouts, or government actions)</li>
            <li>DDoS attacks that exceed standard mitigation capacity</li>
            <li>Client-side software misconfiguration, custom script crashes, or resource exhaustion</li>
            <li>Suspension or termination resulting from Terms of Service or AUP violations</li>
            <li>Outages caused by third-party external DNS providers or domain registrar issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-3">5. How to Claim SLA Credits</h2>
          <p className="text-muted-foreground mb-2">To submit an SLA credit claim:</p>
          <ol className="list-decimal pl-6 space-y-1.5 text-muted-foreground">
            <li>Open a support ticket with the Billing Department within <strong>7 days</strong> of the outage incident.</li>
            <li>Include &quot;SLA Credit Claim&quot; in the ticket subject line.</li>
            <li>Provide dates, timestamps, and impacted IP/server details.</li>
          </ol>
          <p className="mt-3 text-sm text-muted-foreground">Once verified by our network monitoring logs, approved credits will be credited to your TitanNode client balance.</p>
        </section>
      </div>
    </InfoPage>
  );
}
