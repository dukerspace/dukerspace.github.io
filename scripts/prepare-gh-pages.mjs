import { copyFileSync, existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const out = 'dist/client'
const shellCandidates = ['_shell.html', '_shell/index.html', 'index.html']

if (!existsSync(out)) {
  console.error(`Missing build output at ${out}`)
  process.exit(1)
}

const shellName = shellCandidates.find((name) => existsSync(join(out, name)))
if (!shellName) {
  console.error(
    `Missing SPA shell in ${out}. Tried: ${shellCandidates.join(', ')}`
  )
  process.exit(1)
}

copyFileSync(join(out, shellName), join(out, '404.html'))
copyFileSync('src/CNAME', join(out, 'CNAME'))
writeFileSync(join(out, '.nojekyll'), '')
console.log(
  `Prepared GitHub Pages: ${shellName} → 404.html, copied CNAME, wrote .nojekyll`
)
