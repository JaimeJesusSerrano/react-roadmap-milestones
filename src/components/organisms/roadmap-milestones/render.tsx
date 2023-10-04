import React from 'react'

import type IMilestone from '../../../types/model/Milestone'
import Milestone from '../../molecules/milestone'

import ShowPrevious from './components/show-previous'
import * as S from './styled'

interface ParamTypes {
  areThereMilestonesFinished: boolean
  milestones: IMilestone[]
}

const Render = ({ areThereMilestonesFinished, milestones }: ParamTypes): JSX.Element => (
  <S.Wrapper>
    {areThereMilestonesFinished ? (
      <div style={{ marginRight: 12 }}>
        <ShowPrevious />
      </div>
    ) : (
      <></>
    )}

    {milestones.map(milestone => (
      <S.MilestoneWrapper key={milestone.name}>
        <Milestone isExpanded={!milestone.finishDate} milestone={milestone} />
      </S.MilestoneWrapper>
    ))}
  </S.Wrapper>
)

export default Render
