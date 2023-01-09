import { ActionType as ActionTypeBase, ContextType as ContextTypeBase } from '../../types/Context'

const BASE = 'GLOBAL_DIALOG'

export const SET_OPEN = `${BASE}_SET_OPEN`
export const SET_STATE = `${BASE}_SET_STATE`

export interface StateType {
  Component: JSX.Element
  isOpen: boolean
}

export type ActionType = ActionTypeBase<any>

export type ContextType = ContextTypeBase<any, StateType>
