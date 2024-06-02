import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import coffee from "coffeescript"

export default defineConfig({
  plugins: [
    react(),
    {
      name: "vite-plugin-coffeescript",
      transform(src, id) {
        if (!id.endsWith(".coffee")) return null
        const result = coffee.compile(src, { bare: true })
        return {
          code: result,
          map: null // provide source map if available
        }
      }
    }
  ],
  build: {
    emptyOutDir: true,
    outDir: "dist",
    // Additional configuration to make sure Vite works well with Electron
    rollupOptions: {
      output: {
        format: "cjs"
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
