import React from 'react'

import GlobalDialog from 'components/organisms/global-dialog'
import GlobalDialogProvider from 'store/global-dialog/Provider'
import GlobalSettingsProvider from 'store/global-settings/Provider'
import RoadmapMilestoneType from 'types/api/RoadmapMilestone'

import Logic from './logic'

interface ParamTypes {
  roadmapMilestoneData?: RoadmapMilestoneType
}

const RoadmapMilestone = ({ roadmapMilestoneData }: ParamTypes): JSX.Element => {
  if (!roadmapMilestoneData || !roadmapMilestoneData.milestones) {
    return <></>
  }

  return (
    <GlobalSettingsProvider>
      <GlobalDialogProvider>
        <GlobalDialog />
        <Logic milestones={roadmapMilestoneData.milestones} />
      </GlobalDialogProvider>
    </GlobalSettingsProvider>
  )
}

export default RoadmapMilestone
