import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  server: {
    proxy: {
      "/api": isProduction ? "https://crytopluie-api.onrender.com" :"http://localhost:3000/"
    },
  },
  plugins: [react()],
});
