import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

let serverApi = import.meta.env.VITE_SERVER_API;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": serverApi
      
    },
  },
  plugins: [react()],
});
