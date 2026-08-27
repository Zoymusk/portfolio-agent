/**
 * generate-site.js
 *
 * This is what the agent should have the sandbox actually EXECUTE, not just
 * print. It takes structured resume + GitHub research data and writes out a
 * real Next.js page. Wire this in as a tool call the agent triggers after
 * copywriting is done.
 *
 * Usage inside the sandbox:
 *   node generate-site.js input.json
 *
 * input.json shape:
 * {
 *   "name": "Zoya",
 *   "bio": "...",
 *   "about": "...",
 *   "projects": [
 *     { "name": "GramaKhata", "blurb": "...", "url": "...", "stack": ["Kotlin","Room"] }
 *   ]
 * }
 */

const fs = require("fs");
const path = require("path");

function main() {
  const inputPath = process.argv[2];
  if (!inputPath) {
    console.error("Usage: node generate-site.js <input.json>");
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(inputPath, "utf-8"));
  validate(data);

  const outDir = path.join(process.cwd(), "generated-site");
  fs.mkdirSync(path.join(outDir, "pages"), { recursive: true });

  writePackageJson(outDir);
  writeIndexPage(outDir, data);

  console.log(`Site generated at ${outDir}`);
  console.log("Next: cd generated-site && npm install && npm run build");
}

function validate(data) {
  const required = ["name", "bio", "about", "projects"];
  const missing = required.filter((k) => !(k in data));
  if (missing.length) {
    throw new Error(`Missing required fields: ${missing.join(", ")}`);
  }
  if (!Array.isArray(data.projects) || data.projects.length === 0) {
    throw new Error("At least one project is required");
  }
}

function writePackageJson(outDir) {
  const pkg = {
    name: "generated-portfolio",
    version: "1.0.0",
    private: true,
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
    },
    dependencies: {
      next: "^14.2.0",
      react: "^18.3.0",
      "react-dom": "^18.3.0",
    },
  };
  fs.writeFileSync(
    path.join(outDir, "package.json"),
    JSON.stringify(pkg, null, 2)
  );
}

function writeIndexPage(outDir, data) {
  const projectBlocks = data.projects
    .map(
      (p) => `
        <section className="project">
          <h3>${escapeJsx(p.name)}</h3>
          <p>${escapeJsx(p.blurb)}</p>
          ${p.url ? `<a href="${p.url}" target="_blank" rel="noreferrer">View project</a>` : ""}
        </section>`
    )
    .join("\n");

  const page = `export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "2rem" }}>
      <h1>${escapeJsx(data.name)}</h1>
      <p><strong>${escapeJsx(data.bio)}</strong></p>
      <p>${escapeJsx(data.about)}</p>
      <h2>Projects</h2>
      ${projectBlocks}
    </main>
  );
}
`;

  fs.writeFileSync(path.join(outDir, "pages", "index.js"), page);
}

function escapeJsx(str) {
  return String(str).replace(/[<>{}]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "{": "&#123;", "}": "&#125;" }[c]));
}

main();
