/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import { GatsbyNode } from 'gatsby'

export const createPages: GatsbyNode['createPages'] = ({ actions }) => {
  const { createRedirect } = actions

  const redirects: Array<{ from: string; to: string }> = [
    { from: '/project', to: '/projects' },
    { from: '/project/muacle', to: '/projects/muacle' },
    { from: '/project/zlalabs', to: '/projects/zlalabs' },
    { from: '/project/suthep', to: '/projects/suthep' },
    { from: '/project/fourcuz', to: '/projects/fourcuz' },
    { from: '/en/project', to: '/en/projects' },
    { from: '/en/project/muacle', to: '/en/projects/muacle' },
    { from: '/en/project/zlalabs', to: '/en/projects/zlalabs' },
    { from: '/en/project/suthep', to: '/en/projects/suthep' },
    { from: '/en/project/fourcuz', to: '/en/projects/fourcuz' },
  ]

  for (const { from, to } of redirects) {
    createRedirect({
      fromPath: from,
      toPath: to,
      isPermanent: true,
      redirectInBrowser: true,
    })
  }
}
