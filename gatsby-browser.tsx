/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/globals.css'
export { wrapPageElement } from './src/i18n/wrapPageElement'

// Configure FontAwesome for client-side only
if (typeof window !== 'undefined') {
  const { library } = require('@fortawesome/fontawesome-svg-core')
  const { faGithub, faLinkedinIn } = require('@fortawesome/free-brands-svg-icons')
  const { faEnvelope } = require('@fortawesome/free-solid-svg-icons')

  library.add(faGithub, faLinkedinIn, faEnvelope)
}
