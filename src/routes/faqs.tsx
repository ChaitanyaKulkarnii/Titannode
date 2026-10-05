import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/faqs")({
  head: () => ({ meta: [{ title: "FAQs — TitanNode" }] }),
  component: () => (
    <InfoPage title="Frequently Asked Questions" subtitle="Quick answers to the questions we hear most.">
      <h3>How fast is deployment?</h3>
      <p>Most services deploy in under 60 seconds after payment confirmation.</p>
      <h3>Do you offer DDoS protection?</h3>
      <p>Yes — every plan includes 17 Tbps+ enterprise-grade DDoS mitigation at no extra cost.</p>
      <h3>What is your uptime guarantee?</h3>
      <p>99.9% uptime SLA backed by Tier 3+ data centers.</p>
      <h3>Can I upgrade later?</h3>
      <p>Absolutely — upgrade or downgrade any plan from your dashboard at any time.</p>
    </InfoPage>
  ),
});
