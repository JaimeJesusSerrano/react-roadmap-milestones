import { createContext } from 'react'

import { type ContextType, type StateType } from './types'

const initialState: StateType = {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  Component: <></>,
  isOpen: false
}

const context = createContext<ContextType>({
  dispatch: () => {},
  state: initialState
})

export { context, initialState }
