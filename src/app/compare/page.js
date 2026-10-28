// src/app/compare/page.js
import Navigation from "@/components/Navigation";
import Link from "next/link";
import styles from "../page.module.css";

export default function ComparePage() {
  return (
    <div className={styles.container}>
      <Navigation /> {/* Tabs show here too! */}
      <nav style={{ padding: "1rem 0", display: "flex", gap: "2rem" }}>
        <Link
          href="/"
          style={{ color: "#333", fontWeight: "bold", textDecoration: "none" }}
        >
          &larr; Baanda.com
        </Link>
        <Link href="/directory" style={{ color: "#666" }}>
          Bazaar Registry Index
        </Link>
      </nav>
      <header className={styles.hero} style={{ background: "#0f172a" }}>
        <h1>Stop App Store Subscription Bloat</h1>
        <p>
          Compare Baanda vs. Shopify and Squarespace for Unified Local Commerce.
        </p>
      </header>
      <section style={{ margin: "3rem 0", lineHeight: "1.8" }}>
        <h2>The Real Cost of Building a Storefront Today</h2>
        <p>
          Shopify advertising suggests your startup costs are small. However, to
          track your <strong>real-time accounting</strong>, manage physical
          over-the-counter inventory, schedule customer service times, and
          launch text marketing campaigns, you are forced to install multiple
          third-party apps that charge independent monthly subscription tiers.
        </p>

        <p>
          <strong>
            Baanda is a SPaaS platform (Software Platform as a Service).
          </strong>{" "}
          We bundle tracking terminals, billing ledgers, cash/check transaction
          entry logging, shipping labels, and metered outreach tools natively
          inside a flat
          <strong> $27/month package</strong>. No plugin configuration
          conflicts, no multi-invoice app software tracking fees.
        </p>
      </section>
      {/* Semantic Table Layout for high-relevance Google keyword indexing */}
      <section style={{ margin: "3rem 0" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "1.5rem",
            textAlign: "left",
          }}
        >
          <thead>
            <tr
              style={{ borderBottom: "2px solid #333", background: "#f8fafc" }}
            >
              <th style={{ padding: "0.75rem" }}>Capability Feature</th>
              <th style={{ padding: "0.75rem" }}>Shopify Setup</th>
              <th style={{ padding: "0.75rem", color: "#0070f3" }}>
                Baanda Suite
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Base Software Fee</strong>
              </td>
              <td style={{ padding: "0.75rem" }}>$39 / month minimum</td>
              <td
                style={{
                  padding: "0.75rem",
                  fontWeight: "bold",
                  color: "#0070f3",
                }}
              >
                $27 / month flat
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Real-Time Bookkeeping</strong>
              </td>
              <td style={{ padding: "0.75rem" }}>
                Requires external QuickBooks Sync ($30+/mo)
              </td>
              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                Included (Built-in Core)
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Cash / Check Sales</strong>
              </td>
              <td style={{ padding: "0.75rem" }}>
                Often penalized with gateway transaction add-ons
              </td>
              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                0% Add-On Processing (Flat 2%)
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Marketing Tools</strong>
              </td>
              <td style={{ padding: "0.75rem" }}>
                Fixed tier pricing platforms (MailChimp)
              </td>
              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                Metered (Pay only for what goes out)
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
