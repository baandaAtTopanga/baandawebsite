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
      <header className={styles.hero} style={{ background: "#fff" }}>
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

              <th style={{ padding: "0.75rem", color: "#0070f3" }}>
                Baanda Suite
              </th>
              <th style={{ padding: "0.75rem" }}>Shopify</th>
              <th style={{ padding: "0.75rem" }}>Squarespace</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Base Software Fee</strong>
              </td>
              <td
                style={{
                  padding: "0.75rem",
                  fontWeight: "bold",
                  color: "#0070f3",
                }}
              >
                $27 / month flat
              </td>

              <td style={{ padding: "0.75rem" }}>$39 - $299/ month</td>
              <td style={{ padding: "0.75rem" }}>$36 - $139/ month </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Real-Time Bookkeeping</strong>
              </td>

              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                Included (Built-in Core) transparently and seamlessly integrated
                with real-time financial summary report.
              </td>
              <td style={{ padding: "0.75rem" }}>
                Requires external QuickBooks Sync ($30+/mo)
              </td>
              <td style={{ padding: "0.75rem" }}>
                Requires dual step add on like Amaka (up to +$49/mo) +
                QuickBooks (+$30/mo)
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Cash / Check Sales</strong>
              </td>

              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                0% Add-On Processing (Flat 2% + Process fee of 2.9%)
              </td>
              <td style={{ padding: "0.75rem" }}>
                Often penalized with gateway transaction add-ons (2.5% to 5.3%)
              </td>
              <td style={{ padding: "0.75rem" }}>
                Transaction add-ons (2.8% to 5.2%)
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Marketing Tools</strong>
              </td>
              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                <b>Metered</b> (Pay only for what, and when, goes out. No
                separate retainer). Built in for Newsletter, Slider / comic
                strips / videos. The only platform that allows campaign via
                story telling via episodes, seasons, and epic like Netflix,
                followed by conversation with an actor of the story.
                <b>
                  {" "}
                  Markets your business by making it visible in Google search.
                </b>
              </td>
              <td style={{ padding: "0.75rem" }}>
                Fixed tier pricing platforms (MailChimp, up to $350 / month)
              </td>
              <td style={{ padding: "0.75rem" }}>
                Inbuilt only for (+ $5/mo tp $68/mo). It can show one time comic
                strip or a video.
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Payments</strong>
              </td>
              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                <b>Strongest</b> Payment via cash, check, credit card (both type
                in for e-comm and card reader) and ACH attcahed to financial
                process like expense, payable, receivable etc. They directly
                update accounting ledgers.
              </td>
              <td style={{ padding: "0.75rem" }}>
                Payment via cash, check, credit card (both type in for e-comm
                and card reader) and ACH attcahed to internal reporting but do
                not update ledgers handled by Quckbooks and similar solutions.
                For Subscription payment and one-time checkout, the consuits are
                different. A user needs to build a separate bridge application
                if they want to one-point checkout.
              </td>
              <td style={{ padding: "0.75rem" }}>
                Accepts cash, credit card (reader and type in) and ACH (not
                check). Does not have the ability to update payable, receivable,
                expense, or accounting ledgers. Restricted Subscription
                processes.
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Processing</strong>
              </td>
              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                <b>Seamless</b> The storefront has same look and feel whether it
                is e-commerce or POS. Conducive to single of small (0-5)
                business team.
              </td>
              <td style={{ padding: "0.75rem" }}>
                If e-commerce, then store front will be using browser based app.
                Same can be done in POS but differently. Also can use common
                Sales Channel. Problamatic for small team to manage the
                different types.
              </td>
              <td style={{ padding: "0.75rem" }}>
                Completely separate interface for POS and e-comm. It is
                significantly less chohesive in comparison to Shopify or Baanda.
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Website Need</strong>
              </td>
              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                <b>No website is needed.</b> If you have a website as a
                billboard, it can be directly connected to your store in Baanda
                Bazaar. You get all the benefits whether you have a website or
                not.
              </td>
              <td style={{ padding: "0.75rem" }}>
                You can work with starter $5-$15 without website (shared space).
                However, it will have higher transaction fee (5%+), no custome
                email domain, and you cannot integrate with other 3rd party apps
                for accounting, inventory, campaign etc.
              </td>
              <td style={{ padding: "0.75rem" }}>
                Does not have a no-website plan.
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Inventory Management</strong>
              </td>
              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                <b>Strongest</b> (for small businesses) :Comes in the package
                for one-warehouse, inveontory priceing as asset, manufacuring
                with auto load of new goods and reduction of used invemtory.
              </td>
              <td style={{ padding: "0.75rem" }}>
                <b>Strong</b> (for medium size businesses) Available to $39 or
                over. Allows up to 10 storage location. No manufaturing
                inventory management of auto-account for manufactruring is
                avaibale.
              </td>
              <td style={{ padding: "0.75rem" }}>
                <b>Weakest</b> Does not have in entory plan beyound in-and-out
                products.
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Delivery</strong>
              </td>
              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                Over the counter, pickup at certain location, and Shipping
              </td>
              <td style={{ padding: "0.75rem" }}>
                Over the counter, pickup at certain location, and Shipping
              </td>
              <td style={{ padding: "0.75rem" }}>
                <b>Weakest</b> Does not have in entory plan beyound in-and-out
                products.
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Custom Services</strong>
              </td>
              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                Feature dedicated client interface for quoting, terms,
                conditions, and startoff. It has manual billing that appears in
                client portal as payable with built in payment process. Can
                trach milestones and timelines. Online contracts with signoff by
                client. The service provider is triggered by cleint seeking such
                service from the online store.
              </td>
              <td style={{ padding: "0.75rem" }}>
                No native tools. Manual draft order. Email invoice as attachment
                (manual)
              </td>
              <td style={{ padding: "0.75rem" }}>
                Feature dedicated client dashboard for quoting, terms,
                conditions, and startoff. It has manual billing that appears in
                client portal as payable with built in payment process. Can
                trach milestones and timelines. Generate beautiful, styled
                contracts and estimates directly tied to project files.
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>Scheduled Services</strong>
              </td>
              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                Has beautiful scheduled product pages for customer to select a
                time and book. Got built in staff calendar. No client Calendar.
                Owner can view aggregate of all teacher slots. Every individual,
                teacher and student has their personal calendar in Baanda
                platform that will be updated. Has request for gig workers, or
                external workforce, to confirm requested allocation for
                scheduling. Out of the box.
              </td>
              <td style={{ padding: "0.75rem" }}>
                Require integration with 3rd party like 'Easy Appointment
                ($15-$99/mo)', "Booking (Commission 10% to 25%)", or "Sesami
                ($19-$299/mo)"
              </td>
              <td style={{ padding: "0.75rem" }}>
                Has beautiful scheduled product pages for customer to select a
                time and book. Got built in staff calendar. No client Calendar.
                Owner can view aggregate of all teacher slots. Synch with
                tracher's calendar at Google Calendar, Apple iCloud, or Outlook
                (need marginal configuration). Do not allow gig workers and
                request for time allocation confirmation. The assumption is the
                workforce is internal employee. Out of the box.
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "0.75rem" }}>
                <strong>AI Rep (Coming Soon)</strong>
              </td>
              <td style={{ padding: "0.75rem", color: "#0070f3" }}>
                Baanda will enable AI centric representative, capable of representing small businesses, via humanoid conversation, to connect prospective customers to business owners, with in-depth information about the prospects needs, urgency etc., assisting small businesses to be seen. They will also allow owners to schedule posting on Social Media like Instagram, TikTok so small business owners do not need to spend hours daily to update. 
              </td>
              <td style={{ padding: "0.75rem" }}>
                Not planned or in their architecture
              </td>
              <td style={{ padding: "0.75rem" }}>
                Not planned in their architecture
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
