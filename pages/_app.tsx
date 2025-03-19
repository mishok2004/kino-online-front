import type { AppProps } from 'next/app'
import MaineProvider from 'providers/MaineProvider'

import '../app/assets/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MaineProvider>
			<Component {...pageProps} />
		</MaineProvider>
	)
}

export default MyApp
