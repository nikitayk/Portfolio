import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const source = join(
  root,
  "WhatsApp Image 2026-06-30 at 08.39.03.jpeg"
);
const publicDir = join(root, "public");

await sharp(source)
  .resize(900, 1200, {
    fit: "cover",
    position: "top",
  })
  .webp({ quality: 82 })
  .toFile(join(publicDir, "nikita-chaurasia.webp"));

await sharp(source)
  .resize(900, 1200, {
    fit: "cover",
    position: "top",
  })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(join(publicDir, "nikita-chaurasia.jpg"));

console.log("Photo optimized to public/nikita-chaurasia.webp and .jpg");
