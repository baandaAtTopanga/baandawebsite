// src/app/page.js
import { Suspense } from "react";
import { cacheTag } from "next/cache";
import { businessDatabase } from "./mockDb"; // Imported your core dataset array
import Navigation from "@/components/Navigation";
import PresentationDashboard from "@/components/PresentationDashboard";
import styles from "./page.module.css";

// =========================================================================
// 1. CACHED CONTENT LAYER
// Runs under global Next.js cache footprint to compile layout fragments fast
// =========================================================================
async function getCachedLayout(currentCity) {
  "use cache";
  cacheTag(`bazaar-city-${currentCity || "all"}`);

  // FIX: Run a clean, standard vanilla JavaScript filter against our database array
  const searchResults = currentCity
    ? businessDatabase.filter(
        (b) => b.city.toLowerCase() === currentCity.toLowerCase(),
      )
    : [];

  const reactAppUrl =
    process.env.NEXT_PUBLIC_REACT_APP_URL || "https://baanda.com";

  if (!currentCity) return null;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Local Listings for &ldquo;{currentCity}&rdquo;</h3>
      {searchResults.length === 0 ? (
        <p>No verified local businesses found in this territory yet.</p>
      ) : (
        <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
          {searchResults.map((store) => (
            <div
              key={store.id}
              style={{
                border: "1px solid #cbd5e1",
                padding: "1rem",
                borderRadius: "6px",
                background: "#fff",
              }}
            >
              <h4>{store.name}</h4>
              <p style={{ fontSize: "0.85rem", color: "#666" }}>
                Territory Segment: {store.city}, {store.state}
              </p>
              <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>
                {store.description}
              </p>
              <a
                href={`${reactAppUrl}/store?businessId=${store.id}`}
                style={{ color: "#4f46e5", fontWeight: "bold" }}
              >
                Access Secure Terminal &rarr;
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// =========================================================================
// 2. DYNAMIC LOOKUP WORKER
// Resolves the dynamic searchParams input safely inside the streaming boundary
// =========================================================================
async function DirectoryResults({ searchParamsPromise }) {
  const resolvedParams = await searchParamsPromise;
  const currentCity = resolvedParams.city || "";

  return await getCachedLayout(currentCity);
}

// =========================================================================
// 3. MAIN STATIC LANDING PAGE
// =========================================================================
export default function Page({ searchParams }) {
  return (
    <div className={styles.container}>
      {/* Global Tab Menu Header for Humans */}
      <Navigation />

      <header className={styles.hero}>
        <h1>The Baanda Bazaar Ecosystem</h1>
        <p>
          A unified, end-to-end full-stack business platform built to empower
          small business sovereignty.
        </p>
      </header>

      <PresentationDashboard />

      {/* Presentation Panel: Video and AI Agent Placement Holders */}
      {/* <section className={styles.actionPanel}>
        <div className={styles.mediaPlaceholder}>
          <span>🎬 [Baanda Platform Overview Video]</span>
        </div>

        <div className={styles.aiPlaceholder}>
          <span>🤖 [Humanoid Conversational Discovery Agent]</span>
        </div>
      </section> */}

      {/* Geocentric Search Core Section */}
      <section className={styles.centeredSection}>
        <h2 className={styles.mainTitle}>
          Baanda is your friend humbly at your service
        </h2>
        <h3 className={styles.subTitle}>
          Small businesses owners and entrepreneurs, Baanda is the 'Equilizar' to
          compete & flourish against large money businesses.{" "}
        </h3>
        <h3 className={styles.subTitleTwo}>
          It provides you all the tools, seamlessly integrated, at your disposal. Np third party solution required.
        </h3>
        <h3 className={styles.subTitleTwo}>
          <b>$0 starting fee</b> for three months & <b>least flat rate after
          that</b>. Baanda brings your customers to you for free.
        </h3>
      </section>
      {/* <section className={styles.searchSection}>
        <h2>Locate Registered Marketplace Services</h2>
        <p>
          Search across your localized town grid or evaluate matching options
          nationwide.
        </p>

        <form method="GET" action="/" className={styles.searchForm}>
          <input
            type="text"
            name="city"
            placeholder="Enter city (e.g. Los Angeles)..."
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            Query Registry
          </button>
        </form>

        <Suspense
          fallback={
            <div style={{ marginTop: "2rem", color: "#666" }}>
              Scanning Baanda Registry Segments...
            </div>
          }
        >
          <DirectoryResults searchParamsPromise={searchParams} />
        </Suspense>
      </section> */}

      <section style={{ lineHeight: "1.8", margin: "1rem 0" }}>
        <h2>Why Baanda Implodes the Traditional SaaS Model</h2>
        <p>
          Unlike legacy singleton options that force small local merchants to
          purchase five different billing subscriptions, manage disconnected
          third-party accounting applications, and handle unstable booking
          plugins, Baanda unifies your operation. We deliver integrated
          accounting, multi-mode transaction tracking (cash, check, credit card,
          ACH), and neighborhood marketing modules directly inside a single
          terminal environment.
        </p>
      </section>
    </div>
  );
}
