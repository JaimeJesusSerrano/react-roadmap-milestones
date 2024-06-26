import type {
  ActionType as IActionTypeBase,
  ContextType as IContextTypeBase
} from 'types/app/Context'

const BASE = 'GLOBAL_DIALOG'

export const SET_OPEN = `${BASE}_SET_OPEN`
export const SET_STATE = `${BASE}_SET_STATE`

export interface StateType {
  Component: JSX.Element
  isOpen: boolean
}

export type ActionType = IActionTypeBase<any>

export type ContextType = IContextTypeBase<any, StateType>
