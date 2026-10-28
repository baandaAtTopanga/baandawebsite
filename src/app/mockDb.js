// src/app/mockDb.js

export const businessDatabase = [
  {
    id: "101",
    name: "Alpha Plumbing",
    category: "Service",
    subcategory: "Plumber",
    city: "Los Angeles",
    state: "CA",
    description:
      "Emergency residential pipe remediation and drain cleaning. Specializing in high-pressure line clearings and immediate assistance with clogged toilets when standard plungers fail.",
    keywords: [
      "emergency plumbing",
      "clogged toilets",
      "drain cleaning",
      "burst pipes",
    ],
  },
  {
    id: "202",
    name: "Sugar Blossom Bakery",
    category: "Goods",
    subcategory: "Bakery",
    city: "Los Angeles",
    state: "CA",
    description:
      "A boutique community bakery crafting custom-designed wedding cakes and vibrant themed cupcakes for children's birthday parties from scratch.",
    keywords: [
      "custom wedding cakes",
      "birthday cupcakes",
      "local scratch bakery",
    ],
  },
];

export async function getAllDirectoryRecords() {
  // Simulates reading thousands of rows from your DB pool
  return businessDatabase;
}

// src/app/mockDb.js (Append to bottom)

export let mockLibraryAssets = [
  {
    id: "asset_1",
    title: "Baanda SPaaS Ecosystem Architecture Overview",
    type: "PDF",
    url: "https://baanda.net",
    description: "Deep-dive technical brief on our real-time ledger accounting framework and multi-mode POS routing mechanics."
  },
  {
    id: "asset_2",
    title: "Bypassing Shopify App Store Bloat",
    type: "Video",
    url: "https://baanda.net",
    description: "A 10-minute visual breakdown detailing how Baanda natively unifies inventory, scheduling, and bookkeeping."
  }
];

export async function getLibraryAssets() {
  // Simulates an API lookup to your database pool
  return mockLibraryAssets;
}

export async function simulateMediaEnrichment() {
  // Simulates an administrative API update
  mockLibraryAssets.push({
    id: `asset_${Date.now()}`,
    title: "AI Leprechaun Agent Custom Guide",
    type: "Audio",
    url: "https://baanda.net",
    description: "Audio presentation detailing how our background agents map customer psychometrics automatically."
  });
}

export async function fetchAllBusinessRoutes() {}

