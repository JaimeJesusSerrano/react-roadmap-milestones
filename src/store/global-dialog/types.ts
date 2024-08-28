import { type ReactNode } from 'react'

import {
  type ActionType as IActionTypeBase,
  type ContextType as IContextTypeBase
} from 'types/app/Context'

const BASE = 'GLOBAL_DIALOG'

export const SET_OPEN = `${BASE}_SET_OPEN`
export const SET_STATE = `${BASE}_SET_STATE`

export interface StateType {
  Component: ReactNode
  isOpen: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionType = IActionTypeBase<any>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContextType = IContextTypeBase<any, StateType>
