// src/app/library/page.js
import Navigation from "@/components/Navigation";
import { cacheTag } from "next/cache";
import Link from "next/link";
import { getLibraryAssets } from "../mockDb";
import styles from "../page.module.css";

export default async function LibraryPage() {
  // Opt this component into the global Next.js cache footprint
  "use cache";
  cacheTag("baanda-library");

  const assets = await getLibraryAssets();

  return (
    <div className={styles.container}>
      <Navigation /> {/* Tabs show here too! */}
      {/* <nav style={{ padding: "1rem 0", display: "flex", gap: "2rem" }}>
        <Link href="/" style={{ color: "#333" }}>
          &larr; Home
        </Link>
        <Link href="/solution" style={{ color: "#0070f3" }}>
          Our Solution
        </Link>
      </nav> */}
      <header className={styles.hero} style={{ background: "#fff" }}>
        <h1>Resource & Media Library</h1>
        <p>
          Access our technical blueprints, dynamic presentations, and system
          guidelines.
        </p>
      </header>
      <section style={{ margin: "2rem 0" }}>
        <div style={{ display: "grid", gap: "1.5rem", marginTop: "1.5rem" }}>
          {assets.map((asset) => (
            <div
              key={asset.id}
              style={{
                border: "1px solid #e2e8f0",
                padding: "1.5rem",
                borderRadius: "8px",
                background: "#fff",
              }}
            >
              <span
                style={{
                  background:
                    asset.type === "PDF"
                      ? "#ef4444"
                      : asset.type === "Video"
                        ? "#3b82f6"
                        : "#10b981",
                  color: "#fff",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "4px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                {asset.type}
              </span>
              <h3 style={{ margin: "0.5rem 0 0.25rem 0" }}>{asset.title}</h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                }}
              >
                {asset.description}
              </p>

              <a
                href={asset.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0070f3",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Open Asset Link &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
