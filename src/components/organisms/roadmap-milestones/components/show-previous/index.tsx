import { useContext } from 'react'

import PlusSvg from '../../../../../assets/svg/plus'
import SubtractSvg from '../../../../../assets/svg/subtract'
import VerticalButton from '../../../../atoms/vertical-button'
import { context as globalSettingsContext } from '../../../../../store/global-settings'
import * as GlobalSettingsActions from '../../../../../store/global-settings/actions'

import * as S from './styled'

const ShowPrevious = (): JSX.Element => {
  const globalSettings = useContext(globalSettingsContext)
  const { dispatch: dispatchGlobalSettings } = globalSettings

  return globalSettings.state.showMilestonesFinished ? (
    <VerticalButton
      onClick={() => { dispatchGlobalSettings(GlobalSettingsActions.setAreShowingPreviousMilestones(false)) }}
    >
      <S.ShowHidePreviousText>
        {globalSettings.state.translation.previousButton.hidePrevious}
      </S.ShowHidePreviousText>
      <SubtractSvg title={globalSettings.state.translation.previousButton.hidePrevious} />
    </VerticalButton>
  ) : (
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

export default ShowPrevious
