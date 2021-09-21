import { createContext } from 'react'

import { SET_OPEN as SET_OPEN_ACTION, SET_STATE as SET_STATE_ACTION } from './actions'
import Provider from './Provider'
import { ContextType, StateType } from './types'

const initialState: StateType = {
  isOpen: false,
}

const context = createContext<ContextType>({
  // eslint-disable-next-line
  dispatch: () => {},
  state: initialState,
})

export { context, initialState, Provider, SET_OPEN_ACTION, SET_STATE_ACTION }
