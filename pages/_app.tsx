import MaineProvider from 'providers/MaineProvider'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <MaineProvider>
    <Component {...pageProps} />
  </MaineProvider>
  )
}

export default MyApp
