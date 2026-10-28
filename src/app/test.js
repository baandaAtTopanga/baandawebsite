// src/app/page.js
import { Suspense } from "react";
import { businessDatabase } from "./mockDb";
import Navigation from "@/components/Navigation";
import PresentationDashboard from "@/components/PresentationDashboard"; // Import Dashboard
import styles from "./page.module.css";

async function getCachedLayout(currentCity) {
  "use cache";
  // (Keep this internal lookup data mapping loop exactly as it was)
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
            <a
              href={`${reactAppUrl}/store?businessId=${store.id}`}
              style={{ color: "#4f46e5", fontWeight: "bold" }}
            >
              Access Secure Terminal &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

async function DirectoryResults({ searchParamsPromise }) {
  const resolvedParams = await searchParamsPromise;
  const currentCity = resolvedParams.city || "";
  return await getCachedLayout(currentCity);
}

export default function Page({ searchParams }) {
  return (
    <div className={styles.container}>
      <Navigation />

      <header className={styles.hero}>
        <h1>The Baanda Management Ecosystem</h1>
        <p>
          A unified, end-to-end full-stack business platform built to empower
          small business sovereignty.
        </p>
      </header>

      {/* THE UPDATED DEMO DASHBOARD INTERFACE */}
      <PresentationDashboard />

      <section className={styles.searchSection}>
        <h2>Locate Registered Marketplace Services</h2>
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
      </section>
    </div>
  );
}
