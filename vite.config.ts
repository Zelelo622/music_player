import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// TODO: удалить плагин для styled-components (перешли на tailwind)
export default defineConfig(() => ({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-styled-components", { displayName: true }]]
      }
    })
  ]
}));
