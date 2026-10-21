import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

const staticPaths = [
  '/',
  '/projects',
  '/projects/suthep',
  '/projects/muacle',
  '/projects/fourcuz',
  '/projects/zlalabs',
  '/me',
  '/games',
  '/blog',
  '/project',
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
  return [...paths].map((pagePath) => ({
    path: pagePath,
    prerender: { enabled: true },
    sitemap:
      pagePath === '/project' ||
      pagePath.startsWith('/project/') ||
      pagePath.startsWith('/en/project')
        ? { exclude: true }
        : undefined,
  }))
}

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
        maskPath: '/__spa-shell',
        prerender: {
          crawlLinks: true,
          outputPath: '/_shell',
        },
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
        concurrency: 8,
      },
      pages: sitePages(),
      sitemap: {
        enabled: true,
        host: 'https://dukerspace.com',
      },
    }),
    viteReact(),
  ],
})
