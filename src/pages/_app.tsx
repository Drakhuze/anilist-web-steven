import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import MainLayout from '@/components/layout'
import { CollectionProvider } from '@/contexts/CollectionContext'

const App = ({ Component, pageProps }: AppProps) => {

  const apolloClient = new ApolloClient({
    uri: "https://graphql.anilist.co",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={apolloClient}>
      <CollectionProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CollectionProvider>
    </ApolloProvider>
  )
}

export default App;