import React from 'react'

import Milestone from '../../molecules/milestone'
import MilestoneType from '../../../types/model/Milestone'

import ShowPrevious from './components/show-previous'
import * as S from './styled'

interface ParamTypes {
  areThereMilestonesFinished: boolean
  milestones: MilestoneType[]
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
        <Milestone data={milestone} isExpanded={!milestone.finishDate} />
      </S.MilestoneWrapper>
    ))}
  </S.Wrapper>
)

export default Render
