/** @type {import('tailwindcss').Config} */
// Note: Tailwind CSS 4 uses CSS-first configuration via @theme in CSS files
// This config file is kept for shadcn/ui compatibility and tooling
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  // Theme configuration is now in src/styles/globals.css using @theme directive
}
