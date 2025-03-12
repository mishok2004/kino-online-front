import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries:{
            refetchOnWindowFocus: false
        }
    }
})

const MaineProvider :FC= ({children}) => {
  return (
    <QueryClientProvider client={queryClient}> {children}
            </QueryClientProvider>

  )
}

export default MaineProvider
