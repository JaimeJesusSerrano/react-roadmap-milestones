import { type ReactNode, useState } from 'react'

import SubtractSvg from 'assets/svg/subtract'
import PlusSvg from 'assets/svg/plus'
import Category from 'components/molecules/category'
import Goal from 'components/organisms/goal'
import type IGoal from 'types/model/Goal'
import type IGoalsByCategory from 'types/model/GoalsByCategory'
import type IMilestone from 'types/model/Milestone'

import * as S from './styled'

interface Props {
  readonly isExpanded: boolean
  readonly goalsByCategories: IGoalsByCategory
  readonly goalsWithoutCategory: IGoal[]
  readonly milestone: IMilestone
}

function Render ({
  isExpanded: isDefaultExpanded,
  goalsByCategories,
  goalsWithoutCategory,
  milestone
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

function ExpandIconWrapper ({ isExpanded }: { readonly isExpanded: boolean }): ReactNode {
  if (isExpanded) return <SubtractSvg title="Collapse milestone" />
  return <PlusSvg title="Expand milestone" />
}

interface MilestonesWrapperProps {
  readonly goalsByCategories: IGoalsByCategory
  readonly goalsWithoutCategory: IGoal[]
}

function MilestonesWrapper ({
  goalsByCategories,
  goalsWithoutCategory
}: MilestonesWrapperProps): ReactNode {
  return (
      <S.MilestonesWrapper>
          {Object.values(goalsByCategories).map(goals => (
              <Category
                  goals={goals}
                  key={goals[0].category?.name ?? ''}
                  name={goals[0].category?.name ?? ''}
              />
          ))}

          {goalsWithoutCategory.map(goal => (
              <Goal
                  goal={goal}
                  key={goal.name}
              />
          ))}
      </S.MilestonesWrapper>
  )
}

export default Render
