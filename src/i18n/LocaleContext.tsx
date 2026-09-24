import React, { createContext, useContext, useMemo } from 'react'

import { defaultLocale, type Locale } from './index'
import { en, type MessageKey } from './messages/en'
import { th } from './messages/th'

const catalogs: Record<Locale, Record<MessageKey, string>> = { th, en }

interface LocaleContextValue {
  locale: Locale
  pathname: string
  t: (key: MessageKey) => string
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  pathname: '/',
  t: (key) => catalogs[defaultLocale][key] ?? key,
})

export function LocaleProvider({
  locale,
  pathname,
  children,
}: {
  locale: Locale
  pathname: string
  children: React.ReactNode
}) {
  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      pathname,
      t: (key) => catalogs[locale][key] ?? catalogs[defaultLocale][key] ?? key,
    }),
    [locale, pathname]
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale(): Locale {
  return useContext(LocaleContext).locale
}

export function usePathname(): string {
  return useContext(LocaleContext).pathname
}

export function useT(): (key: MessageKey) => string {
  return useContext(LocaleContext).t
}

export function getMessages(locale: Locale): Record<MessageKey, string> {
  return catalogs[locale]
}

export function translate(locale: Locale, key: MessageKey): string {
  return catalogs[locale][key] ?? catalogs[defaultLocale][key] ?? key
}
