import { ActionType as ActionTypeBase, ContextType as ContextTypeBase } from 'types/Context'

export interface StateType {
  isOpen: boolean
}

export type ActionType = ActionTypeBase<any>

export type ContextType = ContextTypeBase<any, StateType>
