// src/app/solution/page.js
import Navigation from "@/components/Navigation";
import Link from "next/link";
import styles from "../page.module.css";

export default function SolutionPage() {
  const poemSnippet = `All things, to all things
perfectly indifferent,
perfectly working together
in discord for a Good beyond
good, for a Being more
timeless in transience, more
eternal in its dwindling than
God there in heaven.`;

  return (
    <div className={styles.container}>
      <Navigation /> {/* Tabs show here too! */}
      {/* <nav style={{ padding: "1rem 0", display: "flex", gap: "2rem" }}>
        <Link href="/" style={{ color: "#0070f3" }}>
          &larr; Home
        </Link>
        <Link href="/library" style={{ color: "#333" }}>
          Media Library
        </Link>
      </nav> */}
      <header
        className={styles.hero}
        // style={{ background: "linear-gradient(135deg, #0288d1, #0070f3)" }}
      >
        <h1>The Baanda Solution Architecture</h1>
        <p>
          Software Platform as a Service (SPaaS) for sovereign local commerce.
        </p>
      </header>
      <section style={{ margin: "2rem 0", lineHeight: "1.8" }}>
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
          Baanda platform <b>does the marketing for you</b> for free. It's Ai
          driven representative will{" "}
          <b>converse with your customer in humanoid way</b>, you when you are
          not doing business, 24/7. It will collect the name and asks of your
          customer if you ask (configure) the agent to do so. All your customer
          will have their own portals.
        </p>
        <p>Baanda has been developed adopting philosophy and sentiment of Aldux Huxley's Island </p>
        {/* The style attribute here preserves the poem's layout */}
        <p
          style={{
            whiteSpace: "pre-wrap",
            fontStyle: "italic",
            fontSize: ".8rem",
            margin: "5px 0",
          }}
        >
          {poemSnippet}
        </p>
        <p>
          When a transaction takes place via cash, check, ACH, credit card (via
          card reader for over the counter or type in for e-commerce) on Baanda,
          our real-time accounting framework automatically updates your tax
          sheets, balances your inventory, and prepares metered neighborhood
          marketing campaigns instantly. It provides real-time account summary
          at a pont of time.
        </p>
        <p>
          As a business owner, you can campaign via newsletter, stories in comic strips, images, or videos like stramings of Netflix or other such providers. Communication via story telling is the most potent communication method in human society. 
        </p>
      </section>
    </div>
  );
}
