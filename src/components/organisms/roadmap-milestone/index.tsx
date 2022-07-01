import React from 'react'

import GlobalDialog from 'components/organisms/global-dialog'
import defaultTranslation from 'config/defaultTranslation'
import GlobalDialogProvider from 'store/global-dialog/Provider'
import GlobalSettingsProvider from 'store/global-settings/Provider'
import RoadmapMilestoneType from 'types/api/RoadmapMilestone'
import { Translation } from 'types/Translation'

import Logic from './logic'

interface ParamTypes {
  roadmapMilestoneData?: RoadmapMilestoneType
  translation?: Translation
}

const RoadmapMilestone = ({ roadmapMilestoneData, translation }: ParamTypes): JSX.Element => {
  if (!roadmapMilestoneData || !roadmapMilestoneData.milestones) {
    return <></>
  }

  return (
    <GlobalSettingsProvider>
      <GlobalDialogProvider>
        <GlobalDialog />
        <Logic milestones={roadmapMilestoneData.milestones} translation={translation || defaultTranslation} />
      </GlobalDialogProvider>
    </GlobalSettingsProvider>
  )
}

export default RoadmapMilestone
