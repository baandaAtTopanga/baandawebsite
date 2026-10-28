"use client"; // Marks this specific sub-widget as a Client Component leaf

import Link from "next/link";
import { usePathname } from "next/navigation"; // Native hook to grab active path
import styles from "@/app/page.module.css";

export default function Navigation() {
  const pathname = usePathname(); // Holds strings like "/", "/solution", or "/library"

  // Helper function to dynamically add the active class state
  const getTabClass = (path) => {
    return pathname === path
      ? `${styles.tabLink} ${styles.activeTab}`
      : styles.tabLink;
  };

  return (
    <nav className={styles.navBar}>
      <Link href="/" className={styles.brand}>
        Baanda.com
      </Link>

      <div className={styles.tabsContainer}>
        {/* Compares active path string to dynamically toggle class names */}
        <Link href="/" className={getTabClass("/")}>
          Home
        </Link>
        <Link href="/solution" className={getTabClass("/solution")}>
          Solutions
        </Link>
        <Link href="/library" className={getTabClass("/library")}>
          Library
        </Link>
        <Link href="/compare" className={getTabClass("/compare")}>
          Compare
        </Link>

        <Link
          href="/directory"
          className={getTabClass("/directory")}
          style={{ opacity: 0.3 }}
        >
          Reg
        </Link>
        <Link
          href="/aicompare"
          className={getTabClass("/aicompare")}
          style={{ opacity: 0.3 }}
        >
          Comp
        </Link>
      </div>
    </nav>
  );
}
