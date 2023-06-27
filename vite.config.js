import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/namaruci',
	plugins: [
		react(),
		legacy({
			targets: ['IE >= 11'],
			additionalLegacyPolyfills: ['whatwg-fetch']
		})
	],
	css: {
		postcss: {
			plugins: [
				autoprefixer({}) // add options if needed
			],
		}
	}
})
