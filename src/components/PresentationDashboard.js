"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";

export default function PresentationDashboard() {
  // State controller: 'video' maps to asset stream, 'agent' maps to AI layout
  const [activeView, setActiveView] = useState("video");

  return (
    <div className={styles.presentationDashboard}>
      {/* LEFT AREA: The Main Media Screen Viewport */}
      <div className={styles.mainViewport}>
        {activeView === "video" ? (
          /* VIDEO LAYOUT (Points to public asset folder) */
          <video
            className={styles.displayVideo}
            controls
            autoPlay
            muted
            loop
            key="baanda-poc-video" // Force re-render state cleanly
          >
            <source src="/intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          /* HUMAN OID AGENT INTERFACE EMULATION (Points to public asset image) 
                      src="/agent-interface.png"
          */
          <img
            src="/aiagent.jpg"
            alt="Baanda Leprechaun AI Agent Interface terminal"
            className={styles.displayImage}
            onError={(e) => {
              // Fallback block string layout if images aren't present yet
              e.target.style.display = "none";
              e.target.parentNode.innerHTML =
                "<span class='" +
                styles.fallbackText +
                "'>🤖 [Leprechaun Discovery Agent Active & Listening]</span>";
            }}
          />
        )}
      </div>

      {/* RIGHT AREA: Interactive Controls Switches */}
      <div className={styles.controlPanel}>
        <h3>SPaaS Platform Modules</h3>

        <button
          className={`${styles.actionButton} ${activeView === "video" ? styles.activeActionButton : ""}`}
          onClick={() => setActiveView("video")}
        >
          🎬 Play Platform Video
          <span
            style={{
              display: "block",
              fontSize: "11px",
              fontWeight: "normal",
              marginTop: "4px",
              opacity: 0.8,
            }}
          >
            Watch unified ecosystem brief
          </span>
        </button>

        <button
          className={`${styles.actionButton} ${activeView === "agent" ? styles.activeActionButton : ""}`}
          onClick={() => setActiveView("agent")}
        >
          🤖 Consult AI Leprechaun
          <span
            style={{
              display: "block",
              fontSize: "11px",
              fontWeight: "normal",
              marginTop: "4px",
              opacity: 0.8,
            }}
          >
            Simulate humanoid conversational discovery
          </span>
        </button>
      </div>
    </div>
  );
}
