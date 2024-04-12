import { createContext } from 'react'

import defaultTranslation from 'config/defaultTranslation'

import { type ContextType, type StateType } from './types'

const initialState: StateType = {
  showMilestonesFinished: false,
  translation: defaultTranslation
}

const context = createContext<ContextType>({
  dispatch: () => {},
  state: initialState
})

export { context, initialState }
