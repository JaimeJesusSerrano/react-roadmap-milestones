import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import RouterSwitch from 'components/organisms/router-switch'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <RouterSwitch />
    </BrowserRouter>
  )
}

export default App
