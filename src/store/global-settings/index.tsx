import { createContext } from 'react'

import { ContextType, StateType } from './types'

const initialState: StateType = {
  areShowingPreviousMilestones: false,
}

const context = createContext<ContextType>({
  // eslint-disable-next-line
  dispatch: () => {},
  state: initialState,
})

export { context, initialState }
