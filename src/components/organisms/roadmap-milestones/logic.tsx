import React, { useContext, useEffect, useMemo } from 'react'

import { context as globalSettingsContext } from '../../../store/global-settings'
import * as GlobalSettingsActions from '../../../store/global-settings/actions'
import MilestoneType from '../../../types/model/Milestone'
import { Translation } from '../../../types/Translation'

import Render from './render'

interface ParamTypes {
  milestones: MilestoneType[]
  translation: Translation
}

const Logic = ({ milestones, translation }: ParamTypes): JSX.Element | null => {
  const globalSettings = useContext(globalSettingsContext)
  const { dispatch: dispatchGlobalSettings } = globalSettings

  const milestonesToShow = useMemo(() => {
    if (!milestones) return []

    if (globalSettings.state.showMilestonesFinished) {
      return milestones
    }

    return milestones.filter(milestone => !milestone.finishDate)
  }, [milestones, globalSettings.state.showMilestonesFinished])

  const areThereMilestonesFinished = useMemo(() => {
    if (!milestones) return false

    return !!milestones.filter(milestone => milestone.finishDate).length
  }, [milestones])

  useEffect(() => {
    dispatchGlobalSettings(GlobalSettingsActions.setTranslation(translation))
  }, [translation])

  if (!milestonesToShow?.length) {
    return null
  }

  return (
    <Render areThereMilestonesFinished={areThereMilestonesFinished} milestones={milestonesToShow} />
  )
}

export default Logic
