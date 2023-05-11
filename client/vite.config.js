import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  server: {
    proxy: {
      "/api": "https://crytopluie-api.onrender.com" 
    },
  },
  plugins: [react()],
});
