/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Import Tailwind CSS 4 styles
import './src/styles/globals.css'

// You can delete this file if you're not using it
require('prismjs/themes/prism-solarizedlight.css')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')

// Configure FontAwesome for client-side only
if (typeof window !== 'undefined') {
  const { library } = require('@fortawesome/fontawesome-svg-core')
  const { faGithub, faLinkedinIn } = require('@fortawesome/free-brands-svg-icons')
  const { faEnvelope } = require('@fortawesome/free-solid-svg-icons')
  
  library.add(faGithub, faLinkedinIn, faEnvelope)
}

