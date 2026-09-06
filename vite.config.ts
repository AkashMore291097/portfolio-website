import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

function commitHash(): string {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    return "unknown";
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({ algorithm: "gzip", ext: ".gz" }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    __BUILD_COMMIT__: JSON.stringify(commitHash()),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
});
