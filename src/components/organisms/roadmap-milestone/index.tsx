import React, { useContext, useEffect, useState } from 'react'

import GlobalDialog from 'components/organisms/global-dialog'
import GlobalDialogProvider from 'store/global-dialog/Provider'
import { context as globalSettingsContext } from 'store/global-settings'
import GlobalSettingsProvider from 'store/global-settings/Provider'
import RoadmapMilestoneType from 'types/api/RoadmapMilestone'
import MilestoneType from 'types/api/Milestone'

import Render from './render'

interface ParamTypes {
  data?: RoadmapMilestoneType
}

const RoadmapMilestone = ({ data }: ParamTypes): JSX.Element => {
  if (!data || !data.milestones) {
    return <></>
  }

  return (
    <GlobalSettingsProvider>
      <GlobalDialogProvider>
        <GlobalDialog />
        <RoadmapMilestoneLogic data={data} />
      </GlobalDialogProvider>
    </GlobalSettingsProvider>
  )
}

const RoadmapMilestoneLogic = ({ data }: ParamTypes): JSX.Element => {
  const globalSettings = useContext(globalSettingsContext)

  const [milestones, setMilestones] = useState<MilestoneType[]>()

  useEffect(() => {
    if (globalSettings.state.showMilestonesFinished) {
      setMilestones(data?.milestones || [])
    } else {
      setMilestones(data?.milestones.filter(milestone => !milestone.finishDate))
    }
  }, [data, globalSettings.state.showMilestonesFinished])

  if (!milestones?.length) {
    return <></>
  }

  return <Render milestones={milestones} />
}

export default RoadmapMilestone
