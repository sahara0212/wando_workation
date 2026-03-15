import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/wando-workation/',  // ← GitHub 레포 이름으로 변경
})
