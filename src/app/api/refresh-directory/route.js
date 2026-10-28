// src/app/api/refresh-directory/route.js
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
// import { simulateMediaEnrichment } from "../../../mockDb";
import { simulateMediaEnrichment } from "@/app/mockDb"; 
import { mockLibraryAssets} from "@/app/mockDb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // Verify authorization key from environment configurations
  if (secret !== process.env.BAANDA_ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 1. Simulate an administrative background update or AI enrichment change
    await simulateMediaEnrichment();

    // 2. Clear both independent cache layers instantly
    revalidateTag("bazaar-global-registry");
    revalidateTag("baanda-library");

    return NextResponse.json({
      success: true,
      message:
        "Next.js cache tags flushed successfully. New data layouts generated.",
      data: mockLibraryAssets,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
