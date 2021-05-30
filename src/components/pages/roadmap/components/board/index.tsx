import React from 'react'

import RoadmapMilestone from 'types/RoadmapMilestone'

import Milestone from './../milestone'
import * as S from './styled'

interface ParamTypes {
  roadmapMilestone?: RoadmapMilestone
}

const Board = ({ roadmapMilestone }: ParamTypes): JSX.Element => {
  if (!roadmapMilestone?.milestones) {
    return <></>
  }

  return (
    <S.Wrapper>
      {roadmapMilestone?.milestones.map(milestone => {
        return (
          <S.MilestoneWrapper key={milestone.name}>
            <Milestone milestone={milestone} />
          </S.MilestoneWrapper>
        )
      })}
    </S.Wrapper>
  )
}

export default Board
