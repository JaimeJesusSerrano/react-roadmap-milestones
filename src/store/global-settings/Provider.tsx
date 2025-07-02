import { type ReactNode, useMemo, useReducer } from 'react'

import { context, initialState } from './index'
import * as Types from './types'

interface Props {
  readonly children: ReactNode
}

export function Provider({ children }: Props): ReactNode {
  const [state, dispatch] = useReducer(
    (currentState: Types.StateType, action: Types.ActionType) => {
      switch (action.type) {
        case Types.SET_ARE_SHOWING_PREVIOUS_MILESTONES:
          return {
            ...currentState,
            showMilestonesFinished: action.value.showMilestonesFinished
          }
        case Types.SET_STATE:
          return action.value
        case Types.SET_TRANSLATION:
          return {
            ...currentState,
            translation: action.value.translation
          }
      }
    },
    initialState,
  )

  const value = useMemo(() => ({ dispatch, state }), [dispatch, state])

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  )
}
