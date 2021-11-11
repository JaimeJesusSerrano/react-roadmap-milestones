import React, { useState } from 'react'

import PlusSvg from 'assets/svg/plus'
import SubstractSvg from 'assets/svg/substract'
import Category from 'components/molecules/category'
import Goal from 'components/organisms/goal'
import GoalType from 'types/api/Goal'
import MilestoneType from 'types/api/Milestone'
import GoalsByCategoryType from 'types/GoalsByCategory'

import * as S from './styled'

interface ParamTypes {
  goalsByCategories: GoalsByCategoryType
  goalsWithoutCategory: GoalType[]
  milestone: MilestoneType
}

const Render = ({ goalsByCategories, goalsWithoutCategory, milestone }: ParamTypes): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <S.Wrapper isExpanded={isExpanded}>
      <S.Header onClick={() => setIsExpanded(!isExpanded)}>
        <S.HeaderTitleWrapper>
          <S.HeaderTitle isExpanded={isExpanded} title={milestone.name}>
            {milestone.name}
          </S.HeaderTitle>
          <S.ExpandIconWrapper>
            {isExpanded ? <SubstractSvg title='Collapse milestone' /> : <PlusSvg title='Expand milestone' />}
          </S.ExpandIconWrapper>
        </S.HeaderTitleWrapper>
        <S.StatusWrapper>
          <S.Status title={milestone.status}>{milestone.status}</S.Status>
        </S.StatusWrapper>
      </S.Header>

      {isExpanded && (
        <S.MilestonesWrapper>
          {Object.values(goalsByCategories).map(goals => {
            return <Category goals={goals} key={goals[0].category?.name} name={goals[0].category?.name} />
          })}
          {goalsWithoutCategory.map(goal => {
            return <Goal key={goal.name} goal={goal} />
          })}
        </S.MilestonesWrapper>
      )}
    </S.Wrapper>
  )
}

export default Render
