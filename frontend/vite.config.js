import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Ensures it listens on all interfaces
    port: 34343,
    strictPort: true,  // Prevents auto-switching to another port
    open: true         // Auto-opens browser for debugging
  },
  build: {
    jsx: "automatic"
  },
  define: {
    "process.env": {}  // 👈 Defines process.env to prevent errors
  }
});
