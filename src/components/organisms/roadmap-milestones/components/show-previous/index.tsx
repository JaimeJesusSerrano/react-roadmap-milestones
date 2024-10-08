import { type ReactNode, useContext } from 'react'

import { Plus as PlusSvg } from 'assets/svg/plus'
import { Subtract as SubtractSvg } from 'assets/svg/subtract'
import { VerticalButton } from 'components/atoms/vertical-button'
import { context as globalSettingsContext } from 'store/global-settings'
import * as GlobalSettingsActions from 'store/global-settings/actions'

import * as S from './styled'

export function ShowPrevious(): ReactNode {
  const globalSettings = useContext(globalSettingsContext)
  const { dispatch: dispatchGlobalSettings } = globalSettings

  if (globalSettings.state.showMilestonesFinished) {
    return (
      <VerticalButton
        onClick={() => { dispatchGlobalSettings(GlobalSettingsActions.setAreShowingPreviousMilestones(false)) }}
      >
        <S.ShowHidePreviousText>
          {globalSettings.state.translation.previousButton.hidePrevious}
        </S.ShowHidePreviousText>

        <SubtractSvg title={globalSettings.state.translation.previousButton.hidePrevious} />
      </VerticalButton>
    )
  }

  return (
    <VerticalButton
      onClick={() => { dispatchGlobalSettings(GlobalSettingsActions.setAreShowingPreviousMilestones(true)) }}
    >
      <S.ShowHidePreviousText>
        {globalSettings.state.translation.previousButton.showPrevious}
      </S.ShowHidePreviousText>

      <PlusSvg title={globalSettings.state.translation.previousButton.showPrevious} />
    </VerticalButton>
  )
}
