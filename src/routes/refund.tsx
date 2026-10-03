import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/refund")({
  head: () => ({ meta: [{ title: "Refund Policy — TitanNodes" }] }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <InfoPage
      title="Refund Policy"
      subtitle="Last Updated: October 2026 — Tiered money-back guarantee conditions and billing rules."
    >
      <div className="space-y-8">
        <section>
          <p className="text-base leading-relaxed text-muted-foreground">
            This Refund Policy outlines the terms and conditions under which refunds may or may not be issued for services purchased from <strong>TitanNodes</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By placing an order or subscribing to any TitanNodes service, you acknowledge and agree to this policy.
          </p>
        </section>

        {/* SECTION 1: TIERED REFUND SCHEDULE */}
        <section>
          <h2 className="font-space-grotesk text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 mb-3">
            1. Tiered Refund Schedule &amp; Percentages
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-3 font-normal">
            Refunds for eligible first-time service purchases are calculated based on the elapsed time between your initial invoice payment confirmation and the submission of your formal billing ticket:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-muted-foreground font-normal">
            <li>
              <u><strong>Within 12 Hours:</strong></u> Eligible for a <u><strong>100% full refund</strong></u> of the initial purchase amount.
            </li>
            <li>
              <u><strong>Within 24 Hours (12 to 24 Hours):</strong></u> Eligible for a <u><strong>90% refund</strong></u> of the purchase amount.
            </li>
            <li>
              <u><strong>Within 48 Hours (24 to 48 Hours):</strong></u> Eligible for an <u><strong>80% refund</strong></u> of the purchase amount.
            </li>
            <li>
              <u><strong>Within 5 Days (48 Hours to 5 Days):</strong></u> Eligible for a <u><strong>50% refund</strong></u> of the purchase amount.
            </li>
            <li>
              <u><strong>After 5 Days (120 Hours):</strong></u> <u><strong>Strictly no refund will be provided</strong></u> under any circumstances. All services are deemed accepted and non-refundable.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-space-grotesk text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 mb-3">
            2. General Refund Eligibility
          </h2>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-muted-foreground font-normal">
            <li>Refund requests must be formally submitted within <u><strong>5 days (120 hours)</strong></u> of initial invoice payment via a support ticket.</li>
            <li>Refunds are strictly reserved for <u><strong>first-time customers</strong></u>. If you have previously purchased or used any TitanNodes service under the same account, payment details, or email, subsequent orders are non-refundable.</li>
            <li>Recurring subscription renewal payments are <u><strong>strictly non-refundable</strong></u>.</li>
            <li>Refunds are not automatically issued upon cancellation; you must open a support ticket with the Billing Department to formally request a refund.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-space-grotesk text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 mb-3">
            3. Strictly Non-Refundable Services
          </h2>
          <p className="text-muted-foreground mb-2 text-sm sm:text-base font-normal">
            The following products, services, and fees are strictly non-refundable under any circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-muted-foreground font-normal">
            <li><u><strong>Virtual Private Servers (VPS) &amp; Dedicated RDP:</strong></u> Due to immediate hardware resource reservation and IP allocation, all VPS &amp; RDP plans are strictly non-refundable.</li>
            <li><u><strong>Dedicated IP Addresses:</strong></u> IP assignments are final upon order provisioning.</li>
            <li><u><strong>Domain Registrations &amp; Transfers:</strong></u> Domain registration fees are immediately paid to registry registries and cannot be reversed.</li>
            <li><u><strong>Setup &amp; Customization Fees:</strong></u> One-time setup, migration, or administration fees.</li>
            <li><u><strong>Add-ons &amp; Upgrades:</strong></u> Additional storage, extra RAM, or custom software licenses.</li>
            <li><u><strong>Suspended Accounts:</strong></u> Any account or service suspended due to Acceptable Use Policy (AUP) or Terms of Service violations forfeit all refund rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-space-grotesk text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 mb-3">
            4. Refund Conditions &amp; Approval
          </h2>
          <p className="text-muted-foreground mb-2 text-sm sm:text-base font-normal">
            Refund requests will be denied if:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-muted-foreground font-normal">
            <li>The service was utilized for abusive, illegal, or high-load operations (e.g. DDoS attacks, spam, torrenting).</li>
            <li>The request is submitted after the <u><strong>5-day (120-hour)</strong></u> initial payment window has expired.</li>
            <li>A payment dispute or chargeback has already been opened with a bank or payment gateway.</li>
            <li>The request lacks a valid technical or service-related justification. Simply changing your mind after active usage does not constitute a valid refund claim.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-space-grotesk text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 mb-3">
            5. Chargebacks &amp; Payment Disputes
          </h2>
          <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-200 space-y-2">
            <p className="font-bold text-red-400">Warning Regarding Unauthorized Disputes:</p>
            <p className="text-sm leading-relaxed">
              Filing a chargeback or payment dispute with your bank, credit card issuer, or PayPal without contacting TitanNodes support first will result in immediate suspension of all active services, account termination, permanent IP ban, and forfeiture of all stored data.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-space-grotesk text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 mb-3">
            6. Processing Approved Refunds
          </h2>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-muted-foreground font-normal">
            <li>Approved refunds will be processed back to the original payment method used during checkout.</li>
            <li>Refund processing may take 3-7 business days depending on payment processor settlement cycles.</li>
            <li>Non-refundable payment gateway transaction fees may be deducted from the refunded sum.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-space-grotesk text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 mb-3">
            7. Service Level Agreement (SLA) Credits
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-normal">
            Downtime compensation under our SLA is provided exclusively as <u><strong>account service credits</strong></u> for future renewals. SLA compensation is never issued as cash refunds. See our <a href="/sla" className="text-primary hover:underline font-semibold">Service Level Agreement</a> for details.
          </p>
        </section>
      </div>
    </InfoPage>
  );
}
