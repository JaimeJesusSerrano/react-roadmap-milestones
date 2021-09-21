import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalDialog from 'components/organisms/global-dialog'
import RouterSwitch from 'components/organisms/router-switch'
import GlobalStyle from 'config/globalStyle'
import theme from 'config/theme'
import { Provider as GlobalDialogProvider } from 'store/global-dialog'

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
