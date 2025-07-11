import type { Translation as ITranslation } from '@/types/app/Translation'

const BASE = 'GLOBAL_SETTINGS'

export const SET_ARE_SHOWING_PREVIOUS_MILESTONES = `${BASE}_ARE_SHOWING_PREVIOUS_MILESTONES`
export const SET_STATE = `${BASE}_SET_STATE`
export const SET_TRANSLATION = `${BASE}_SET_TRANSLATION`

export interface StateType {
  showMilestonesFinished: boolean
  translation: ITranslation
}

export type ActionType =
  | { type: typeof SET_ARE_SHOWING_PREVIOUS_MILESTONES; value: { showMilestonesFinished: boolean } }
  | { type: typeof SET_TRANSLATION; value: { translation: ITranslation } }
  | { type: typeof SET_STATE; value: StateType }

export interface ContextType {
  dispatch: React.Dispatch<ActionType>
  state: StateType
}
