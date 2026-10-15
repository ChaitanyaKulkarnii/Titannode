import { InfoPage } from "@/components/InfoPage";

export default function FreeHostingPage() {
  return (
    <InfoPage
      title="Free Hosting"
      subtitle="Try TitanNode risk-free. Spin up a small project, test, learn — at zero cost."
    >
      <ul>
        <li>1 GB NVMe storage</li>
        <li>1 free subdomain</li>
        <li>Free SSL certificate</li>
        <li>Community support</li>
      </ul>
      <p>Upgrade any time to remove limits. No credit card required to start.</p>
    </InfoPage>
  );
}
