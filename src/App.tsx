import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import RouterSwitch from 'components/organisms/router-switch'
import GlobalStyle from 'config/globalStyle'
import theme from 'config/theme'

const queryClient = new QueryClient()

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RouterSwitch />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
