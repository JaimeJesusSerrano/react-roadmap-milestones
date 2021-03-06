import React, { useReducer } from 'react'

import { context, initialState } from './index'
import * as Types from './types'

interface Props {
  children: React.ReactNode
}

const Provider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer((state: Types.StateType, action: Types.ActionType) => {
    switch (action.type) {
      case Types.SET_ARE_SHOWING_PREVIOUS_MILESTONES:
        return { ...state, showMilestonesFinished: action.value.showMilestonesFinished }
      case Types.SET_STATE:
        return action.value
      default:
        throw new Error()
    }
  }, initialState)

  return <context.Provider value={{ dispatch, state }}>{children}</context.Provider>
}

export default Provider
