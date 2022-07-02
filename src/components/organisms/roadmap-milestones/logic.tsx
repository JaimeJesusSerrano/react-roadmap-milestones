import React, { useContext, useEffect, useState } from 'react'

import { context as globalSettingsContext } from '../../../store/global-settings'
import * as GlobalSettingsActions from '../../../store/global-settings/actions'
import MilestoneType from  '../../../types/Milestone'
import { Translation } from '../../../types/Translation'

import Render from './render'

interface ParamTypes {
  milestones: MilestoneType[]
  translation: Translation
}

const Logic = ({ milestones, translation }: ParamTypes): JSX.Element => {
  const globalSettings = useContext(globalSettingsContext)
  const { dispatch: dispatchGlobalSettings } = globalSettings

  const [milestonesToShow, setMilestonesToShow] = useState<MilestoneType[]>()

  useEffect(() => {
    if (globalSettings.state.showMilestonesFinished) {
      setMilestonesToShow(milestones || [])
    } else {
      setMilestonesToShow(milestones.filter(milestone => !milestone.finishDate))
    }
  }, [milestones, globalSettings.state.showMilestonesFinished])

  useEffect(() => {
    dispatchGlobalSettings(GlobalSettingsActions.setTranslation(translation))
  }, [translation])

  if (!milestonesToShow?.length) {
    return <></>
  }

  return <Render milestones={milestonesToShow} />
}

export default Logic
