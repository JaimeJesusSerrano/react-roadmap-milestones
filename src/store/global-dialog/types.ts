import type { ReactNode } from 'react'

const BASE = 'GLOBAL_DIALOG'

export const SET_OPEN = `${BASE}_SET_OPEN`
export const SET_STATE = `${BASE}_SET_STATE`

export interface StateType {
  Component: ReactNode
  isOpen: boolean
}

export type ActionType =
  | {
      type: typeof SET_OPEN
      value: {
        Component: ReactNode
        isOpen: boolean
      }
    }
  | {
      type: typeof SET_STATE
      value: StateType
    }

export interface ContextType {
  dispatch: React.Dispatch<ActionType>
  state: StateType
}
