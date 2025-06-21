import type {
  ActionType as IActionTypeBase,
  ContextType as IContextTypeBase,
} from 'types/app/Context'
import type { Translation as ITranslation } from 'types/app/Translation'

const BASE = 'GLOBAL_SETTINGS'

export const SET_ARE_SHOWING_PREVIOUS_MILESTONES = `${BASE}_ARE_SHOWING_PREVIOUS_MILESTONES`
export const SET_STATE = `${BASE}_SET_STATE`
export const SET_TRANSLATION = `${BASE}_SET_TRANSLATION`

export interface StateType {
  showMilestonesFinished: boolean
  translation: ITranslation
}

export type ActionType = IActionTypeBase<unknown>

export type ContextType = IContextTypeBase<unknown, StateType>
