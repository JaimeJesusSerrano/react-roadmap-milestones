import React, { useState } from 'react'

import ChevronDownSvg from 'assets/svg/chevron-down'
import ChevronUpSvg from 'assets/svg/chevron-up'
import MilestoneType from 'types/Milestone'

import Goal from './../goal'
import * as S from './styled'

interface ParamTypes {
  data?: MilestoneType
}
const Milestone = ({ data }: ParamTypes): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <S.Wrapper isExpanded={isExpanded}>
      <S.Header onClick={() => setIsExpanded(!isExpanded)}>
        <S.HeaderTitleWrapper>
          <S.HeaderTitle isExpanded={isExpanded} title={data?.name}>
            {data?.name}
          </S.HeaderTitle>
          <S.ExpandIconWrapper>
            {isExpanded ? <ChevronUpSvg title='Collapse milestone' /> : <ChevronDownSvg title='Expand milestone' />}
          </S.ExpandIconWrapper>
        </S.HeaderTitleWrapper>
      </S.Header>
      {isExpanded && (
        <S.MilestonesWrapper>
          {data?.goals.map(goal => {
            return <Goal key={goal.name} goal={goal} />
          })}
        </S.MilestonesWrapper>
      )}
    </S.Wrapper>
  )
}

export default Milestone
