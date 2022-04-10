import React, { useContext } from 'react'

import { useTranslation } from 'react-i18next'

import PlusSvg from 'assets/svg/plus'
import SubstractSvg from 'assets/svg/substract'
import VerticalButton from 'components/atoms/vertical-button'
import { context as globalSettingsContext } from 'store/global-settings'
import { SET_ARE_SHOWING_PREVIOUS_MILESTONES as GLOBAL_SETTINGS_SET_ARE_SHOWING_PREVIOUS_MILESTONES_ACTION } from 'store/global-settings/actions'

import * as S from './styled'

const ShowPrevious = (): JSX.Element => {
  const { t } = useTranslation()
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
      <S.ShowHidePreviousText>{t('milestoneRoadmap.hidePrevious')}</S.ShowHidePreviousText>
      <SubstractSvg title={t('milestoneRoadmap.hidePrevious')} />
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
      <S.ShowHidePreviousText>{t('milestoneRoadmap.showPrevious')} </S.ShowHidePreviousText>
      <PlusSvg title={t('milestoneRoadmap.showPrevious')} />
    </VerticalButton>
  )
}

export default ShowPrevious
