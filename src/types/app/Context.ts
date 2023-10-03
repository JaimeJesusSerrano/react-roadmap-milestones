export interface ActionType<ActionTypeValue> {
  type: string
  value: ActionTypeValue
}

export interface ContextType<ActionTypeValue, StateType> {
  dispatch: React.Dispatch<ActionType<ActionTypeValue>>
  state: StateType
}
