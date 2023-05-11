import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/


export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000/"
    },
  },
  build: {
    proxy: {
      "/api": "https://cryptopluie-api.onrender.com"
    }
  },
  plugins: [react()],
});
