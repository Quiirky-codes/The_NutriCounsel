import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    // ✅ Important: base path for GitHub Pages
    base: isDev ? "/" : "/The_NutriCounsel/",

    build: {
      outDir: "docs", // GitHub Pages reads from /docs
      emptyOutDir: true,
    },

    server: {
      host: "localhost",
      port: 8080,
      open: true,
    },

    plugins: [react(), isDev && componentTagger()].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});