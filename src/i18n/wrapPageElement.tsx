import React from 'react'
import type { WrapPageElementBrowserArgs, WrapPageElementNodeArgs } from 'gatsby'

import { LocaleProvider } from './LocaleContext'
import { localeFromPath } from './index'

type WrapArgs = WrapPageElementBrowserArgs | WrapPageElementNodeArgs

export function wrapPageElement({ element, props }: WrapArgs) {
  const pathname = props.location?.pathname ?? '/'
  const locale = localeFromPath(pathname)
  return (
    <LocaleProvider locale={locale} pathname={pathname}>
      {element}
    </LocaleProvider>
  )
}
