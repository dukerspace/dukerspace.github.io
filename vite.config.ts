import { defineConfig } from 'vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

const staticPaths = [
	'/',
	'/projects',
	'/projects/rimping',
	'/projects/suthep',
	'/projects/muacle',
	'/projects/fourcuz',
	'/projects/zlalabs',
	'/me',
	'/games',
	'/blog',
	'/project',
	'/project/rimping',
	'/project/suthep',
	'/project/muacle',
	'/project/fourcuz',
	'/project/zlalabs',
]

function sitePages() {
	const paths = new Set<string>()
	for (const prefix of ['', '/en']) {
		for (const page of staticPaths) {
			paths.add(page === '/' ? prefix || '/' : `${prefix}${page}`)
		}
		const locale = prefix === '/en' ? 'en' : 'th'
		const dir = path.resolve('content/blog', locale)
		if (!fs.existsSync(dir)) continue
		for (const file of fs.readdirSync(dir)) {
			if (!file.endsWith('.md')) continue
			paths.add(`${prefix}/blog/${file.slice(0, -3)}`)
		}
	}
	return [...paths].filter(
		(pagePath) => !/^\/(?:en\/)?project(?:\/|$)/.test(pagePath),
	)
}

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		tailwindcss(),
		tanstackRouter({ target: 'react', autoCodeSplitting: true }),
		viteReact(),
		{
			name: 'sitemap',
			generateBundle() {
				this.emitFile({
					type: 'asset',
					fileName: 'sitemap.xml',
					source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitePages()
						.map(
							(pagePath) =>
								`  <url><loc>${new URL(pagePath, 'https://dukerspace.com').href.replaceAll('&', '&amp;').replaceAll('<', '&lt;')}</loc></url>`,
						)
						.join('\n')}\n</urlset>\n`,
				})
			},
		},
	],
})
