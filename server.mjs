import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.join(__dirname, "app");

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split("?")[0];
  if (reqPath === "/") reqPath = "/index.html";

  const filePath = path.join(baseDir, reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "*"
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log(`\n\x1b[1m\x1b[36m=====================================================\x1b[0m`);
  console.log(`\x1b[1m\x1b[36m    CODE ROYALE: LAST MAN STANDING WEB APP RUNNING   \x1b[0m`);
  console.log(`\x1b[1m\x1b[36m=====================================================\x1b[0m\n`);
  console.log(`\x1b[32m✔ Local Server:\x1b[0m   http://localhost:${PORT}`);
  console.log(`\x1b[90mPress Ctrl+C to stop the server\x1b[0m\n`);
});

