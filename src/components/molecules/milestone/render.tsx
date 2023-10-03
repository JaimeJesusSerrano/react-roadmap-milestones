import React, { useState } from 'react'

import PlusSvg from '../../../assets/svg/plus'
import SubtractSvg from '../../../assets/svg/subtract'
import Category from '../category'
import Goal from '../../organisms/goal'
import GoalType from '../../../types/model/Goal'
import MilestoneType from '../../../types/model/Milestone'
import GoalsByCategoryType from '../../../types/model/GoalsByCategory'

import * as S from './styled'

interface ParamTypes {
  isExpanded: boolean
  goalsByCategories: GoalsByCategoryType
  goalsWithoutCategory: GoalType[]
  milestone: MilestoneType
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
        <S.HeaderTitleWrapper>
          <S.HeaderTitle isExpanded={isExpanded} title={milestone.name}>
            {milestone.name}
          </S.HeaderTitle>
          {/* TODO If there is not old milestones, then don't show this section */}
          <S.ExpandIconWrapper>
            {isExpanded ? (
              <SubtractSvg title="Collapse milestone" />
            ) : (
              <PlusSvg title="Expand milestone" />
            )}
          </S.ExpandIconWrapper>
        </S.HeaderTitleWrapper>
        <S.StatusWrapper>
          <S.Status title={milestone.status}>{milestone.status}</S.Status>
        </S.StatusWrapper>
      </S.Header>

      {isExpanded && (
        <S.MilestonesWrapper>
          {Object.values(goalsByCategories).map(goals => (
            <Category goals={goals} key={goals[0].category?.name} name={goals[0].category?.name} />
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
