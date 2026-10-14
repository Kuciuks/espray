const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
};

http
  .createServer((request, response) => {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    let filePath = path.resolve(root, `.${pathname === "/" ? "/index.html" : pathname}`);

    if (!filePath.startsWith(`${root}${path.sep}`)) {
      response.writeHead(403).end();
      return;
    }

    fs.stat(filePath, (statError, stats) => {
      if (!statError && stats.isDirectory()) {
        filePath = path.join(filePath, "index.html");
      }

      fs.readFile(filePath, (readError, data) => {
        if (readError) {
          response.writeHead(404).end();
          return;
        }

        response
          .writeHead(200, {
            "content-type":
              mimeTypes[path.extname(filePath)] ?? "application/octet-stream",
          })
          .end(data);
      });
    });
  })
  .listen(4173, "127.0.0.1", () => {
    console.log("Homepage preview: http://127.0.0.1:4173/");
  });
