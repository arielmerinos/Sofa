import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import FullReload from "vite-plugin-full-reload";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    FullReload(["src/*", "src/**/*", "src/**/**/*", "src/**/**/**/*"]),
  ],
});
