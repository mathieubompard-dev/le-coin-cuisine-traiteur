import { promises as fs } from "fs";
import path from "path";
import { NextResponse, type NextRequest } from "next/server";

// Generic images listing API.
// Use query `?dir=images/accueil` or `?dir=accueil` (relative to public/images).
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const dirParam = (url.searchParams.get("dir") || "images/accueil").replace(/\\\\/g, "/");

  // Only allow listings under `public/images`
  const publicImagesRoot = path.join(process.cwd(), "public", "images");

  // Normalize requested subpath relative to public/images
  let relativeSubpath = dirParam;
  if (relativeSubpath.startsWith("images/")) {
    relativeSubpath = relativeSubpath.slice("images/".length);
  }

  // Reject obvious traversal attempts
  if (relativeSubpath.includes("..") || path.isAbsolute(relativeSubpath)) {
    return NextResponse.json({ images: [], error: "Invalid directory" }, { status: 400 });
  }

  const dir = path.join(publicImagesRoot, relativeSubpath);

  // Extra safety: ensure resolved path stays within publicImagesRoot
  const resolved = path.resolve(dir);
  if (!resolved.startsWith(path.resolve(publicImagesRoot))) {
    return NextResponse.json({ images: [], error: "Invalid directory" }, { status: 400 });
  }

  try {
    const files = await fs.readdir(resolved);
    const images = files.filter((f) => /\.(jpe?g|png|webp|gif|avif|svg)$/i.test(f));
    return NextResponse.json({ images });
  } catch (err) {
    return NextResponse.json({ images: [], error: String(err) }, { status: 500 });
  }
}

