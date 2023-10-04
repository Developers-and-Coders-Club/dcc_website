// vite.config.js
import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";


export default defineConfig({
  base:'/',
  plugins: [react(), legacy({
      targets: ['defaults', 'not IE 11'],    }),],
})
