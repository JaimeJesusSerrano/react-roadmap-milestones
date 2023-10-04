import React, { useState } from 'react'

import type IGoal from '../../../types/model/Goal'
import type IMilestone from '../../../types/model/Milestone'
import type IGoalsByCategory from '../../../types/model/GoalsByCategory'
import PlusSvg from '../../../assets/svg/plus'
import SubtractSvg from '../../../assets/svg/subtract'
import Category from '../category'
import Goal from '../../organisms/goal'

import * as S from './styled'

interface ParamTypes {
  isExpanded: boolean
  goalsByCategories: IGoalsByCategory
  goalsWithoutCategory: IGoal[]
  milestone: IMilestone
}

const Render = ({
  isExpanded: isDefaultExpanded,
  goalsByCategories,
  goalsWithoutCategory,
  milestone,
}: ParamTypes): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(isDefaultExpanded)

  return (
    <S.Wrapper isExpanded={isExpanded}>
      <S.Header onClick={() => setIsExpanded(!isExpanded)}>
        <S.HeaderTitleWrapper isExpanded={isExpanded}>
          <S.ExpandIconWrapper>
            {isExpanded ? (
              <SubtractSvg title="Collapse milestone" />
            ) : (
              <PlusSvg title="Expand milestone" />
            )}
          </S.ExpandIconWrapper>
          <S.HeaderTitle isExpanded={isExpanded} title={milestone.name}>
            {milestone.name}
          </S.HeaderTitle>
        </S.HeaderTitleWrapper>
        <S.StatusWrapper>
          <S.Status title={milestone.status}>{milestone.status}</S.Status>
        </S.StatusWrapper>
      </S.Header>

      {isExpanded && (
        <S.MilestonesWrapper>
          {Object.values(goalsByCategories).map(goals => (
            <Category
              goals={goals}
              key={goals[0].category?.name || ''}
              name={goals[0].category?.name || ''}
            />
          ))}
          {goalsWithoutCategory.map(goal => (
            <Goal key={goal.name} goal={goal} />
          ))}
        </S.MilestonesWrapper>
      )}
    </S.Wrapper>
  )
}

export default Render
