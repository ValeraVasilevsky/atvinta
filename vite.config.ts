import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@assets/styles/variables/_colors.scss";
        @import "@assets/styles/variables/_font.scss";
        @import "@assets/styles/mixins/_displays.scss";
        @import "@assets/styles/variables/_typography.scss";
        @import "@assets/styles/variables/_grid.scss";
        @import "@assets/styles/variables/_button.scss";
        `,
      },
    },
  },

  server: {
    port: 8080,
  },
});
