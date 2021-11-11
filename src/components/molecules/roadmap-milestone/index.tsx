import React from 'react'

import Milestone from 'components/molecules/milestone'
import RoadmapMilestoneType from 'types/api/RoadmapMilestone'

import * as S from './styled'

interface ParamTypes {
  data?: RoadmapMilestoneType
}

const RoadmapMilestone = ({ data }: ParamTypes): JSX.Element => {
  if (!data?.milestones) {
    return <></>
  }

  return (
    <S.Wrapper>
      {data?.milestones.map(data => {
        return (
          <S.MilestoneWrapper key={data.name}>
            <Milestone data={data} />
          </S.MilestoneWrapper>
        )
      })}
    </S.Wrapper>
  )
}

export default RoadmapMilestone
