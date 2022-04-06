import React, { Suspense } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import RouterSwitch from 'components/application/router-switch'
import ScreenLoader from 'components/molecules/screen-loader'
import GlobalDialog from 'components/organisms/global-dialog'
import GlobalStyle from 'config/globalStyle'
import theme from 'config/theme'
import GlobalDialogProvider from 'store/global-dialog/Provider'
import GlobalSettingsProvider from 'store/global-settings/Provider'

const queryClient = new QueryClient()

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <GlobalSettingsProvider>
          <GlobalDialogProvider>
            <GlobalDialog />
            <BrowserRouter>
              <Suspense fallback={<ScreenLoader />}>
                <RouterSwitch />
              </Suspense>
            </BrowserRouter>
          </GlobalDialogProvider>
        </GlobalSettingsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
