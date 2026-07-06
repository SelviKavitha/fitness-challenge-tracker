import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
<<<<<<< HEAD
  base: "/fitness-challenge-portal/",
=======
  base: "/fitness-challenge-tracker/",
>>>>>>> 67ab4b4 (deployment issue)
});