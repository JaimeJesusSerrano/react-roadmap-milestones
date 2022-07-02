import { createContext } from 'react'

import defaultTranslation from '../../config/defaultTranslation'

import { ContextType, StateType } from './types'

const initialState: StateType = {
  showMilestonesFinished: false,
  translation: defaultTranslation,
}

const context = createContext<ContextType>({
  // eslint-disable-next-line
  dispatch: () => {},
  state: initialState,
})

export { context, initialState }
