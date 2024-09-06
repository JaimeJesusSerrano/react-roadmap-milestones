import {
  type ActionType as IActionTypeBase,
  type ContextType as IContextTypeBase,
} from 'types/app/Context'
import { type Translation as ITranslation } from 'types/app/Translation'

const BASE = 'GLOBAL_SETTINGS'

export const SET_ARE_SHOWING_PREVIOUS_MILESTONES = `${BASE}_ARE_SHOWING_PREVIOUS_MILESTONES`
export const SET_STATE = `${BASE}_SET_STATE`
export const SET_TRANSLATION = `${BASE}_SET_TRANSLATION`

export interface StateType {
  showMilestonesFinished: boolean
  translation: ITranslation
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionType = IActionTypeBase<any>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContextType = IContextTypeBase<any, StateType>
