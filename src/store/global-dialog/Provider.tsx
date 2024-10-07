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
        case Types.SET_OPEN:
          return { ...currentState, Component: action.value.Component, isOpen: action.value.isOpen }
        case Types.SET_STATE:
          return action.value
        default:
          throw new Error()
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
