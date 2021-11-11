import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import RouterSwitch from 'components/application/router-switch'
import GlobalDialog from 'components/organisms/global-dialog'
import GlobalStyle from 'config/globalStyle'
import theme from 'config/theme'
import GlobalDialogProvider from 'store/global-dialog/Provider'

const queryClient = new QueryClient()

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <GlobalDialogProvider>
          <GlobalDialog />
          <BrowserRouter>
            <RouterSwitch />
          </BrowserRouter>
        </GlobalDialogProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
