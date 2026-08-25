import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import Sitemap from "vite-plugin-sitemap";

function getRoutesFromAppJsx() {
  const appPath = path.resolve(__dirname, "src/App.jsx");

  if (!fs.existsSync(appPath)) {
    console.warn("App.jsx file not found:", appPath);
    return ["/"];
  }

  const appContent = fs.readFileSync(appPath, "utf-8");
  const routes = new Set(["/"]);

  // Read all <Route path="..." />
  const routeRegex =
    /<Route\b[^>]*\bpath\s*=\s*["'`]([^"'`]+)["'`]/g;

  let match;

  while ((match = routeRegex.exec(appContent)) !== null) {
    let route = match[1].trim();

    // Skip empty, wildcard, 404 and dynamic routes
    if (!route) continue;
    if (route === "*") continue;
    if (route.includes(":")) continue;
    if (route.includes("*")) continue;

    // Convert relative routes to absolute routes
    if (!route.startsWith("/")) {
      route = `/${route}`;
    }

    // Remove ending slash except home
    route = route.replace(/\/+$/, "") || "/";

    routes.add(route);
  }

  const excludedRoutes = [
    "/thank-you",
    "/payment-form",
    "/payment-successful",
    "/game-development",
    "/software-development",
  ];

  excludedRoutes.forEach((route) => routes.delete(route));

  return Array.from(routes).sort();
}

const autoRoutes = getRoutesFromAppJsx();

console.log("Auto sitemap routes:", autoRoutes);

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://optivaxglobal.com",
      dynamicRoutes: autoRoutes,
      generateRobotsTxt: true,
      readable: true,
      changefreq: "weekly",
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    cssCodeSplit: true,
    minify: "terser",

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});