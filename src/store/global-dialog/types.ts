import { ActionType as ActionTypeBase, ContextType as ContextTypeBase } from 'types/Context'

const BASE = 'GLOBAL_DIALOG'

export const SET_OPEN = `${BASE}_SET_OPEN`
export const SET_STATE = `${BASE}_SET_STATE`

export interface StateType {
  Component: JSX.Element
  isOpen: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionType = ActionTypeBase<any>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContextType = ContextTypeBase<any, StateType>
