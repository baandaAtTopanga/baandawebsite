// src/app/solution/page.js
import Navigation from "@/components/Navigation";
import Link from "next/link";
import styles from "../page.module.css";

export default function SolutionPage() {
  return (
    <div className={styles.container}>
      <Navigation /> {/* Tabs show here too! */}
      <nav style={{ padding: "1rem 0", display: "flex", gap: "2rem" }}>
        <Link href="/" style={{ color: "#0070f3" }}>
          &larr; Home
        </Link>
        <Link href="/library" style={{ color: "#333" }}>
          Media Library
        </Link>
      </nav>
      <header
        className={styles.hero}
        style={{ background: "linear-gradient(135deg, #0288d1, #0070f3)" }}
      >
        <h1>The Baanda Solution Architecture</h1>
        <p>
          Software Platform as a Service (SPaaS) for sovereign local commerce.
        </p>
      </header>
      <section style={{ margin: "3rem 0", lineHeight: "1.8" }}>
        <h2>A Unified Local Marketplace Bazaar</h2>
        <p>
          Traditional architectures treat every business tool as an isolated
          island. Merchants use one service for credit card terminals, another
          for scheduling calendars, and a completely separate software package
          for accounting ledgers. Baanda removes this friction by introducing an
          integrated layer managed by background services called{" "}
          <strong>Leprechauns</strong>.
        </p>
        <p>
          When a transaction takes place via cash, check, or ACH on Baanda, our
          real-time accounting framework automatically updates your tax sheets,
          balances your inventory, and prepares metered neighborhood marketing
          campaigns instantly.
        </p>
      </section>
    </div>
  );
}
