import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000/"
    },
  },
  plugins: [react()],
});
