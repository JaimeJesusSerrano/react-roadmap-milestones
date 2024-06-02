import { type ReactNode } from 'react'

import { Category } from 'components/molecules/category'
import { Goal } from 'components/organisms/goal'
import { type Goal as IGoal } from 'types/model/Goal'
import { type GoalsByCategory as IGoalsByCategory } from 'types/model/GoalsByCategory'

import * as S from './styled'

interface Props {
  readonly goalsByCategories: IGoalsByCategory
  readonly goalsWithoutCategory: IGoal[]
}

export function MilestonesWrapper ({
  goalsByCategories,
  goalsWithoutCategory
}: Props): ReactNode {
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
