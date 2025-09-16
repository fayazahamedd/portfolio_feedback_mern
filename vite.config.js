/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Define paths for easier imports
const pathResolve = (dir) => path.resolve(__dirname, dir);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@component": pathResolve("./src/Components"),
      "@pages": pathResolve("./src/pages"),
    },
  },
  build: {
    outDir: "build", // change from default 'dist' to 'build'
    sourcemap: false,
    target: "es2018",
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        mimeTypes: {
          "application/javascript": ["js", "jsx"],
        },
        scriptType: "module",
      },
    },
  },

  server: {
    port: 3210,
    open: true, // Open the default browser when the server starts
  },

  optimizeDeps: {
    include: [
      "@mui/material",
      "@mui/x-date-pickers",
      "@mui/lab",
      "@mui/icons-material",
    ],
  },
});
