import React from 'react'

import RoadmapMilestone from 'types/RoadmapMilestone'

import Milestone from './../milestone'
import { SMilestoneWrapper, SWrapper } from './styles'

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
        return (
          <SMilestoneWrapper key={milestone.name}>
            <Milestone milestone={milestone} />
          </SMilestoneWrapper>
        )
      })}
    </SWrapper>
  )
}

export default Board
