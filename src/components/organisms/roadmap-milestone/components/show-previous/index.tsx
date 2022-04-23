import React, { useContext } from 'react'

import { useTranslation } from 'react-i18next'

import PlusSvg from 'assets/svg/plus'
import SubstractSvg from 'assets/svg/substract'
import VerticalButton from 'components/atoms/vertical-button'
import { context as globalSettingsContext } from 'store/global-settings'
import * as GlobalSettingsActions from 'store/global-settings/actions'

import * as S from './styled'

const ShowPrevious = (): JSX.Element => {
  const { t } = useTranslation()
  const globalSettings = useContext(globalSettingsContext)
  const { dispatch: dispatchGlobalSettings } = globalSettings

  return globalSettings.state.showMilestonesFinished ? (
    <VerticalButton
      onClick={() => dispatchGlobalSettings(GlobalSettingsActions.setAreShowingPreviousMilestones(false))}
    >
      <S.ShowHidePreviousText>{t('milestoneRoadmap.hidePrevious')}</S.ShowHidePreviousText>
      <SubstractSvg title={t('milestoneRoadmap.hidePrevious')} />
    </VerticalButton>
  ) : (
    <VerticalButton onClick={() => dispatchGlobalSettings(GlobalSettingsActions.setAreShowingPreviousMilestones(true))}>
      <S.ShowHidePreviousText>{t('milestoneRoadmap.showPrevious')} </S.ShowHidePreviousText>
      <PlusSvg title={t('milestoneRoadmap.showPrevious')} />
    </VerticalButton>
  )
}

export default ShowPrevious
