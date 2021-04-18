import React from 'react'

import RoadmapMilestone from 'types/RoadmapMilestone'

import Milestone from './../milestone'
import { SWrapper } from './styles'

interface ParamTypes {
  roadmapMilestone?: RoadmapMilestone
}

const Board = ({ roadmapMilestone }: ParamTypes): JSX.Element => {
  if (!roadmapMilestone?.milestones) {
    return <></>
  }

  return (
    <SWrapper>
      {roadmapMilestone?.milestones.map(milestone => {
        return <Milestone key={milestone.name} milestone={milestone} />
      })}
    </SWrapper>
  )
}

export default Board
