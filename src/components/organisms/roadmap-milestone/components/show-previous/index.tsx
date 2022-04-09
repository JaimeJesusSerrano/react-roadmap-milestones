import React, { useContext } from 'react'

import PlusSvg from 'assets/svg/plus'
import SubstractSvg from 'assets/svg/substract'
import VerticalButton from 'components/atoms/vertical-button'

import { context as globalSettingsContext } from 'store/global-settings'
import { SET_ARE_SHOWING_PREVIOUS_MILESTONES as GLOBAL_SETTINGS_SET_ARE_SHOWING_PREVIOUS_MILESTONES_ACTION } from 'store/global-settings/actions'

import * as S from './styled'

const ShowPrevious = (): JSX.Element => {
  const globalSettings = useContext(globalSettingsContext)
  const { dispatch: dispatchGlobalSettings } = globalSettings

  return globalSettings.state.showMilestonesFinished ? (
    <VerticalButton
      onClick={() =>
        dispatchGlobalSettings({
          type: GLOBAL_SETTINGS_SET_ARE_SHOWING_PREVIOUS_MILESTONES_ACTION,
          value: { showMilestonesFinished: false },
        })
      }
    >
      <S.ShowHidePreviousText>Hide previous</S.ShowHidePreviousText>
      <SubstractSvg title='Hide previous milestones' />
    </VerticalButton>
  ) : (
    <VerticalButton
      onClick={() =>
        dispatchGlobalSettings({
          type: GLOBAL_SETTINGS_SET_ARE_SHOWING_PREVIOUS_MILESTONES_ACTION,
          value: { showMilestonesFinished: true },
        })
      }
    >
      <S.ShowHidePreviousText>Show previous </S.ShowHidePreviousText>
      <PlusSvg title='Show previous milestones' />
    </VerticalButton>
  )
}

export default ShowPrevious
