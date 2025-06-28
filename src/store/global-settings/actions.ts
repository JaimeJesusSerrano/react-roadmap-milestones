import * as Types from './types'

export const setAreShowingPreviousMilestones = (
  showMilestonesFinished: Types.StateType['showMilestonesFinished'],
): Types.ActionType => ({
  type: Types.SET_ARE_SHOWING_PREVIOUS_MILESTONES,
  value: { showMilestonesFinished },
})

export const setState = (newState: Types.StateType): Types.ActionType => ({
  type: Types.SET_STATE,
  value: newState,
})

export const setTranslation = (translation: Types.StateType['translation']): Types.ActionType => ({
  type: Types.SET_TRANSLATION,
  value: { translation },
})
