import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/rock-paper-scissors/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
