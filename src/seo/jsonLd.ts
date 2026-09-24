import { localizedPath, type Locale } from '../i18n'

const SITE_URL = 'https://dukerspace.com'

const SAME_AS = [
  'https://github.com/dukerspace',
  'https://www.linkedin.com/in/montol-saklor-381657177',
] as const

const EMAIL = 'montolsaklor@gmail.com'

export const PROJECTS = {
  muacle: {
    name: 'Muacle',
    path: '/projects/muacle',
    applicationUrl: 'https://muacle.com/',
    schemaType: 'WebApplication' as const,
  },
  zlalabs: {
    name: 'Zla Labs',
    path: '/projects/zlalabs',
    applicationUrl: 'https://www.zlalabs.com/',
    schemaType: 'WebApplication' as const,
  },
  suthep: {
    name: 'Suthep',
    path: '/projects/suthep',
    applicationUrl: 'https://github.com/dukerspace/suthep',
    schemaType: 'SoftwareApplication' as const,
  },
  fourcuz: {
    name: 'Fourcuz',
    path: '/projects/fourcuz',
    applicationUrl: 'https://fourcuz.dukerspace.com/',
    schemaType: 'WebApplication' as const,
  },
} as const

export type ProjectId = keyof typeof PROJECTS

function pageUrl(path: string, locale: Locale): string {
  return `${SITE_URL}${localizedPath(path, locale)}`
}

function inLanguage(locale: Locale): string {
  return locale === 'en' ? 'en' : 'th'
}

function personRef(locale: Locale) {
  return {
    '@type': 'Person' as const,
    name: 'Montol Saklor',
    url: pageUrl('/', locale),
  }
}

/** WebSite schema for the home page. */
export function websiteJsonLd(locale: Locale, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DUKERSPACE',
    url: pageUrl('/', locale),
    description,
    inLanguage: inLanguage(locale),
    author: personRef(locale),
  }
}

/** Person schema for home and about pages. */
export function personJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Montol Saklor',
    alternateName: 'dukerspace',
    url: pageUrl('/me', locale),
    jobTitle: 'Software Engineer',
    email: EMAIL,
    homeLocation: {
      '@type': 'Place',
      name: 'Chiang Mai, Thailand',
    },
    sameAs: [...SAME_AS],
  }
}

/** CollectionPage schema for the projects index. */
export function projectsCollectionJsonLd(locale: Locale, description: string) {
  const projects = Object.values(PROJECTS)
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects',
    description,
    url: pageUrl('/projects', locale),
    inLanguage: inLanguage(locale),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.name,
        url: pageUrl(project.path, locale),
      })),
    },
  }
}

/** SoftwareApplication / WebApplication schema for a project detail page. */
export function projectJsonLd(
  projectId: ProjectId,
  locale: Locale,
  description: string
) {
  const project = PROJECTS[projectId]
  return {
    '@context': 'https://schema.org',
    '@type': project.schemaType,
    name: project.name,
    description,
    url: pageUrl(project.path, locale),
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    author: personRef(locale),
    sameAs: [project.applicationUrl],
  }
}
