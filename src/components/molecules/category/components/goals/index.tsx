import type { ReactNode } from 'react'

import { Goal } from '@/components/organisms/goal'

import * as S from './styled'
import type { GoalsProps } from './types'

export function Goals({
  goals
}: GoalsProps): ReactNode {
  return (
    <S.Wrapper>
      {goals.map((goal) => (
        <Goal goal={goal} key={goal.name} />
      ))}
    </S.Wrapper>
  )
}
