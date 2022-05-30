import '~/styles/tailwind.css'
import type { AppProps } from 'next/app'
import { nhost } from '~/lib/nhost-client'
import { NhostNextProvider } from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <Component {...pageProps} />
      </NhostApolloProvider>
    </NhostNextProvider>
  )
}

export default MyApp
