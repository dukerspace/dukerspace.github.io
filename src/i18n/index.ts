export type Locale = 'th' | 'en'

export const defaultLocale: Locale = 'th'
export const locales: Locale[] = ['th', 'en']

/** Normalize and detect locale from a pathname. */
export function localeFromPath(pathname: string): Locale {
  const path = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
  if (path === '/en' || path.startsWith('/en/')) return 'en'
  return 'th'
}

/** Strip `/en` prefix; returns path starting with `/`. */
export function stripLocale(pathname: string): string {
  const path = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
  if (path === '/en') return '/'
  if (path.startsWith('/en/')) {
    const rest = path.slice(3)
    return rest.startsWith('/') ? rest : `/${rest}`
  }
  return path || '/'
}

/** Prefix path with `/en` when locale is English. `path` should start with `/`. */
export function localizedPath(path: string, locale: Locale): string {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`
  if (locale === 'th') return normalized === '' ? '/' : normalized
  if (normalized === '/') return '/en'
  return `/en${normalized}`
}

/** Counterpart path in the other locale. */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localizedPath(stripLocale(pathname), target)
}
