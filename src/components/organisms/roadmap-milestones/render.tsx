import React from 'react'

import Milestone from 'components/molecules/milestone'
import MilestoneType from 'types/api/Milestone'

import ShowPrevious from './components/show-previous'
import * as S from './styled'

interface ParamTypes {
  milestones: MilestoneType[]
}

const Render = ({ milestones }: ParamTypes): JSX.Element => {
  return (
    <S.Wrapper>
      <div style={{ marginRight: 12 }}>
        <ShowPrevious />
      </div>

      {milestones.map(milestone => {
        return (
          <S.MilestoneWrapper key={milestone.name}>
            <Milestone data={milestone} isExpanded={!milestone.finishDate} />
          </S.MilestoneWrapper>
        )
      })}
    </S.Wrapper>
  )
}

export default Render
