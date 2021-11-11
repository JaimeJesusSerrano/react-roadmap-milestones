import React, { createContext } from 'react'

import { ContextType, StateType } from './types'

const initialState: StateType = {
  Component: <></>,
  isOpen: false,
}

const context = createContext<ContextType>({
  // eslint-disable-next-line
  dispatch: () => {},
  state: initialState,
})

export { context, initialState }
