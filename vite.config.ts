import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
