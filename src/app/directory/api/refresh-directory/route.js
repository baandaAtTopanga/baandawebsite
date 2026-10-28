// src/app/api/refresh-directory/route.js
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { getAllDirectoryRecords } from "@/app/mockDb"; // Your Axios API fetch tracker
import { businessDatabase } from "@/app/mockDb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (secret !== process.env.BAANDA_ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 1. Purge the stale layout files immediately
    revalidateTag("bazaar-global-registry");

    // 2. PREEMPTIVE EXECUTION WARM-UP:
    // We immediately trigger the database API call right here inside the cron/postman route handler.
    // This forces the server to do the heavy fetching data loop right now.
    const freshData = await getAllDirectoryRecords();

    // 3. Optional: Trigger a background hit to your directory URL
    // to force Next.js to compile the new HTML file instantly.
    const baseUrl = process.env.SITE_URL || "http://localhost:3000";
    await fetch(`${baseUrl}/directory`, {
      headers: { "User-Agent": "Googlebot" }, // Tricks your user-agent mask to build the page
    });

    return NextResponse.json({
      success: true,
      message: `Cache successfully purged and preemptively rewarmed with ${freshData.length} active business profiles.`,
      data: businessDatabase,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
