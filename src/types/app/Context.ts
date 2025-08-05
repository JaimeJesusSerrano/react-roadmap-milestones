import type { Dispatch } from 'react'

export interface ActionType<ActionTypeValue> {
  type: string
  value: ActionTypeValue
}

export interface ContextType<ActionTypeValue, StateType> {
  dispatch: Dispatch<ActionType<ActionTypeValue>>
  state: StateType
}
