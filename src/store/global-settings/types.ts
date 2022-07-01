import { ActionType as ActionTypeBase, ContextType as ContextTypeBase } from 'types/Context'

const BASE = 'GLOBAL_SETTINGS'

export const SET_ARE_SHOWING_PREVIOUS_MILESTONES = `${BASE}_ARE_SHOWING_PREVIOUS_MILESTONES`
export const SET_STATE = `${BASE}_SET_STATE`

export interface StateType {
  showMilestonesFinished: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionType = ActionTypeBase<any>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContextType = ContextTypeBase<any, StateType>
