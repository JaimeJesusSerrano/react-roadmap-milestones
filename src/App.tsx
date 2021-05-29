import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import RouterSwitch from 'components/organisms/router-switch'

const queryClient = new QueryClient()

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RouterSwitch />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
