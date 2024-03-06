import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), '')

  console.log('Port:', env.PORT)

  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@Types': path.resolve(__dirname, './src/types'),
        '@Layouts': path.resolve(__dirname, './src/layouts'),
        '@Pages': path.resolve(__dirname, './src/pages'),
        '@Stores': path.resolve(__dirname, './src/stores'),
        '@Helpers': path.resolve(__dirname, './src/helpers'),
      },
    },
  }
})
