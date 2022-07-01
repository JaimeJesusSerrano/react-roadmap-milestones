import React, { useContext, useEffect, useState } from 'react'

import { context as globalSettingsContext } from 'store/global-settings'
import MilestoneType from 'types/api/Milestone'

import Render from './render'

interface ParamTypes {
  milestones: MilestoneType[]
}

const Logic = ({ milestones }: ParamTypes): JSX.Element => {
  const globalSettings = useContext(globalSettingsContext)

  const [milestonesToShow, setMilestonesToShow] = useState<MilestoneType[]>()

  useEffect(() => {
    if (globalSettings.state.showMilestonesFinished) {
      setMilestonesToShow(milestones || [])
    } else {
      setMilestonesToShow(milestones.filter(milestone => !milestone.finishDate))
    }
  }, [milestones, globalSettings.state.showMilestonesFinished])

  if (!milestonesToShow?.length) {
    return <></>
  }

  return <Render milestones={milestonesToShow} />
}

export default Logic
