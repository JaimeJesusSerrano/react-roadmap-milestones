import * as Types from './types'

export const setOpen = (
  isOpen: Types.StateType['isOpen'],
  Component?: Types.StateType['Component']
): Types.ActionType => ({
  type: Types.SET_OPEN,
  value: { isOpen, Component },
})

export const setState = (newState: Types.ActionType['value']): Types.ActionType => ({
  type: Types.SET_STATE,
  value: newState,
})
