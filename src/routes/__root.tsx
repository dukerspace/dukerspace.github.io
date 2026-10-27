import {
	HeadContent,
	Outlet,
	createRootRoute,
	useRouterState,
} from '@tanstack/react-router'
import { useEffect } from 'react'

import { LocaleProvider } from '../i18n/LocaleContext'
import { localeFromPath } from '../i18n'
import icon from '../assets/images/icon.png'
import '../styles/globals.css'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'theme-color', content: '#081229' },
		],
		links: [
			{ rel: 'icon', type: 'image/png', href: icon },
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com',
				crossOrigin: 'anonymous',
			},
		],
	}),
	component: RootComponent,
})

function RootComponent() {
	const pathname = useRouterState({ select: (s) => s.location.pathname })
	const locale = localeFromPath(pathname)

	useEffect(() => {
		document.documentElement.lang = locale
	}, [locale])

	return (
		<>
			<HeadContent />
			<LocaleProvider locale={locale} pathname={pathname}>
				<Outlet />
			</LocaleProvider>
		</>
	)
}
