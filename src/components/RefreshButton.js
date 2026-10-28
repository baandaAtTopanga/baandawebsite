"use client";

import { useTransition } from "react";
import { handleCacheRefresh } from "@/app/actions";
import styles from "@/app/page.module.css";

export default function RefreshButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <div className={styles.refreshBanner}>
      <span>💡 Admin Pipeline: Simulating AI Data Enrichment Loops?</span>
      <button
        className={styles.refreshButton}
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            await handleCacheRefresh();
          });
        }}
      >
        {isPending ? "Purging Layouts..." : "Force Refresh Directory"}
      </button>
    </div>
  );
}
