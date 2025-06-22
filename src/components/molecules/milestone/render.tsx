import { type ReactNode, useState } from 'react'

import { type Goal as IGoal } from '@/types/model/Goal'
import { type GoalsByCategory as IGoalsByCategory } from '@/types/model/GoalsByCategory'
import { type Milestone as IMilestone } from '@/types/model/Milestone'

import { ExpandIconWrapper } from './ExpandIconWrapper'
import { MilestonesWrapper } from './MilestonesWrapper'
import * as S from './styled'

interface Props {
  readonly isExpanded: boolean
  readonly goalsByCategories: IGoalsByCategory
  readonly goalsWithoutCategory: IGoal[]
  readonly milestone: IMilestone
}

export function Render({
  isExpanded: isDefaultExpanded,
  goalsByCategories,
  goalsWithoutCategory,
  milestone,
}: Props): ReactNode {
  const [isExpanded, setIsExpanded] = useState(isDefaultExpanded)

  return (
    <S.Wrapper $isExpanded={isExpanded}>
      <S.Header onClick={() => { setIsExpanded(!isExpanded) }}>
        <S.HeaderTitleWrapper $isExpanded={isExpanded}>
          <S.ExpandIconWrapper>
            <ExpandIconWrapper isExpanded={isExpanded} />
          </S.ExpandIconWrapper>

          <S.HeaderTitle
            $isExpanded={isExpanded}
            title={milestone.name}
          >
            {milestone.name}
          </S.HeaderTitle>
        </S.HeaderTitleWrapper>

        <S.StatusWrapper>
          <S.Status title={milestone.status}>
            {milestone.status}
          </S.Status>

          {milestone.finishDate
            ? (
                <S.StatusDate>
                  {milestone.finishDate.toLocaleDateString()}
                </S.StatusDate>
              )
            : (
                null
              )}
        </S.StatusWrapper>
      </S.Header>

      {isExpanded
        ? (
            <MilestonesWrapper
              goalsByCategories={goalsByCategories}
              goalsWithoutCategory={goalsWithoutCategory}
            />
          )
        : null}
    </S.Wrapper>
  )
}
