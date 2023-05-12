import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// http://localhost:3000

export default defineConfig({
  server: {
    proxy: {
      "/api": "https://cryptopluie-api.onrender.com"
    },
  },
  plugins: [react()],
});
