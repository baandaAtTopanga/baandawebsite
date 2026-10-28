// src/app/directory/page.js
import Navigation from "@/components/Navigation";
import { Suspense } from "react";
import { cacheTag } from "next/cache";
import { headers } from "next/headers";
import { getAllDirectoryRecords } from "../mockDb";
import styles from "../page.module.css";

// =========================================================================
// 1. ISOLATED CACHE LAYER
// Handles database slicing and wraps inside the stable "use cache" pipeline.
// =========================================================================
async function getRenderedRegistryContent(startIndex, itemsPerPage) {
  "use cache";
  cacheTag("bazaar-global-registry");

  const allRecords = await getAllDirectoryRecords();
  const paginatedRecords = allRecords.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  const productionNetworkUrl = "https://baanda.net";

  return (
    <div>
      {paginatedRecords.map((business) => {
        const targetNetLink = `${productionNetworkUrl}?businessId=${business.id}`;

        const agentSchemaMarkup = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: business.name,
          description: business.description,
          url: targetNetLink,
          address: {
            "@type": "PostalAddress",
            addressLocality: business.city,
            addressRegion: business.state,
          },
          knowsAbout: business.keywords,
        };

        return (
          <div
            key={business.id}
            style={{
              marginBottom: "1rem",
              borderBottom: "1px dashed #ccc",
              paddingBottom: "1rem",
            }}
          >
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(agentSchemaMarkup),
              }}
            />
            <strong>{business.name}</strong> [{business.category} /{" "}
            {business.subcategory}] — {business.city}, {business.state}
            <br />
            <span>Description: {business.description}</span>
            <br />
            <a href={targetNetLink} target="_blank" rel="noopener noreferrer">
              {targetNetLink}
            </a>
          </div>
        );
      })}
    </div>
  );
}

// =========================================================================
// 2. DETACHED WORKER LAYER (Inside Suspense Boundary)
// Resolves promises safely without breaking the static shell pre-compiler.
// =========================================================================
async function DirectoryResolver({ searchParamsPromise }) {
  // Resolve dynamic inputs safely inside the Suspense runtime boundary
  const params = await searchParamsPromise;
  const currentPage = parseInt(params.page || "1", 10);
  const itemsPerPage = 100;
  const startIndex = (currentPage - 1) * itemsPerPage;

  const headerList = await headers();
  const userAgent = (headerList.get("user-agent") || "").toLowerCase();

  const isBot =
    userAgent.includes("googlebot") ||
    userAgent.includes("bingbot") ||
    userAgent.includes("gptbot") ||
    userAgent.includes("applebot");

  // const isAdmin = params.adminToken === "your-secret-key";
  const isAdmin = params.adminToken === process.env.BAANDA_ADMIN_SECRET;

  // Human view mask
  if (!isBot && !isAdmin) {
    return (
      <div className={styles.container}>
        <Navigation /> {/* Tabs show here too! */}
        <h1>Baanda Directory Index</h1>
        <p>
          This directory segment is optimized exclusively for automated machine
          lookup and search infrastructure mapping. This is to pick up the comparitive study of Baanda with similar solutions. Baanda is the only one with ancient Bazaar, or marketplace, philosophy. 
        </p>
      </div>
    );
  }

  // If Admin or Bot, stream the cached data and navigation controls
  const registryListHtml = await getRenderedRegistryContent(
    startIndex,
    itemsPerPage,
  );
  const allRecords = await getAllDirectoryRecords();

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "monospace",
        fontSize: "12px",
        background: "#fafafa",
        color: "#111",
      }}
    >
      <h2>BAANDA REGISTRY SECTOR INDEX - PAGE {currentPage}</h2>
      <hr style={{ marginBottom: "2rem" }} />

      {registryListHtml}

      <div style={{ marginTop: "2rem", padding: "1rem 0", fontWeight: "bold" }}>
        {currentPage > 1 && (
          <a
            href={`/directory?page=${currentPage - 1}${isAdmin ? "&adminToken=your-secret-key" : ""}`}
            style={{ color: "#0070f3", textDecoration: "none" }}
          >
            &larr; PREVIOUS SECTOR
          </a>
        )}
        {currentPage > 1 && startIndex + itemsPerPage < allRecords.length && (
          <span> &nbsp; | &nbsp; </span>
        )}
        {startIndex + itemsPerPage < allRecords.length && (
          <a
            href={`/directory?page=${currentPage + 1}${isAdmin ? "&adminToken=your-secret-key" : ""}`}
            style={{ color: "#0070f3", textDecoration: "none" }}
          >
            NEXT SECTOR &rarr;
          </a>
        )}
      </div>
    </div>
  );
}

// =========================================================================
// 3. MAIN STATIC OUTER PAGE SHELL
// Compiles cleanly to flat HTML instantly because it doesn't await anything.
// =========================================================================
export default function DirectoryIndexPage({ searchParams }) {
  return (
    <Suspense
      fallback={
        <div
          style={{ padding: "2rem", color: "#666", fontFamily: "monospace" }}
        >
          Authenticating Baanda Registry Node Connection...
        </div>
      }
    >
      <DirectoryResolver searchParamsPromise={searchParams} />
    </Suspense>
  );
}
