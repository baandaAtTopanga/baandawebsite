"use server";

import { revalidateTag } from "next/cache";
import { clearCacheAndSimulateEnrichment } from "./mockDb";

export async function handleCacheRefresh() {
  // 1. Simulate data mutation or enrichment updates on backend
  await clearCacheAndSimulateEnrichment();

  // 2. Instantly purge Next.js layout caching assigned to 'bazaar-directory'
  revalidateTag("bazaar-directory");
}
