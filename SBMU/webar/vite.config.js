import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// HTTPS configuration - only use if certificates exist
// Set USE_HTTPS=true in .env to enable HTTPS in development
let httpsConfig = false
if (process.env.USE_HTTPS === 'true' && process.env.NODE_ENV !== 'production') {
  try {
    const keyPath = path.resolve(__dirname, 'key.pem')
    const certPath = path.resolve(__dirname, 'cert.pem')
    if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
      httpsConfig = {
        key: fs.readFileSync(keyPath, 'utf8'),
        cert: fs.readFileSync(certPath, 'utf8')
      }
      console.log('✅ Using existing SSL certificates')
    } else {
      console.log('⚠️  USE_HTTPS is enabled but certificates not found. Using HTTP instead.')
      httpsConfig = false
    }
  } catch (error) {
    console.log('⚠️  Error loading certificates, using HTTP:', error.message)
    httpsConfig = false
  }
}

export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  server: {
    https: httpsConfig,
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html')
    }
  },
  appType: 'spa'
})

