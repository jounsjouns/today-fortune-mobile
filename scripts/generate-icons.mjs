import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("../node_modules/.pnpm/node_modules/sharp");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="70" y1="35" x2="450" y2="485">
      <stop stop-color="#d8c4ff"/>
      <stop offset="0.55" stop-color="#f2d7ff"/>
      <stop offset="1" stop-color="#ffe4ef"/>
    </linearGradient>
    <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="20" stdDeviation="18" flood-color="#7650b7" flood-opacity="0.28"/>
    </filter>
  </defs>
  <rect width="512" height="512" rx="120" fill="url(#g)"/>
  <circle cx="256" cy="256" r="156" fill="#fff8ff" opacity="0.72" filter="url(#s)"/>
  <path d="M302 118c-25 21-41 53-41 90 0 65 53 118 118 118 11 0 22-2 32-5-31 45-83 74-142 74-95 0-172-77-172-172 0-76 49-140 117-163-8 16-12 35-12 54 0 76 62 138 138 138 24 0 47-6 67-17-16 41-56 70-103 70-61 0-111-50-111-111 0-34 16-64 40-85 20-17 45-27 73-27-1 12-2 24-4 36z" fill="#8f62dc" opacity="0.92"/>
  <circle cx="350" cy="152" r="18" fill="#ff7fb7"/>
  <path d="M157 156l16 42 42 16-42 16-16 42-16-42-42-16 42-16 16-42zM372 333l12 30 30 12-30 12-12 30-12-30-30-12 30-12 12-30z" fill="#ffd166"/>
</svg>`;

async function makeIcon(size, fileName) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(`public/icons/${fileName}`);
}

await Promise.all([
  makeIcon(192, "icon-192.png"),
  makeIcon(512, "icon-512.png"),
  makeIcon(180, "apple-touch-icon.png")
]);
