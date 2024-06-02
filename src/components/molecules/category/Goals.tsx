import { type ReactNode } from 'react'

import { Goal } from 'components/organisms/goal'
import { type Goal as IGoal } from 'types/model/Goal'

import * as S from './styled'

export function Goals ({ goals }: { readonly goals: IGoal[] }): ReactNode {
  return (
      <S.GoalsWrapper>
          {goals?.map(goal => (
              <Goal
                  goal={goal}
                  key={goal.name}
              />)
          )}
      </S.GoalsWrapper>
  )
}
