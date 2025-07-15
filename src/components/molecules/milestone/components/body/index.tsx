import type { ReactNode } from 'react'

import { Category } from '@/components/molecules/category'
import { Goal } from '@/components/organisms/goal'

import * as S from './styled'
import type { BodyProps } from './types'

export function Body({
  goalsByCategories,
  goalsWithoutCategory,
}: BodyProps): ReactNode {
  return (
    <S.Wrapper>
      {Object.values(goalsByCategories).map((goals) => (
        <Category
          goals={goals}
          key={goals[0].category?.name ?? ''}
          name={goals[0].category?.name ?? ''}
        />
      ))}

      {goalsWithoutCategory.map((goal) => (
        <Goal goal={goal} key={goal.name} />
      ))}
    </S.Wrapper>
  )
}
