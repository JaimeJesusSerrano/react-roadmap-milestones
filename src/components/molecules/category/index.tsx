import { type ReactNode, useState } from 'react'

import { Goals } from './components/goals'
import { RightHeader } from './components/right-header'
import * as S from './styled'
import type { CategoryProps } from './types'

export function Category({ goals, name = '' }: CategoryProps): ReactNode {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <S.Wrapper>
      <S.Header
        onClick={() => {
          setIsExpanded(!isExpanded)
        }}
      >
        <S.LeftHeader>
          <S.LeftHeaderTitle>{name}</S.LeftHeaderTitle>

          <S.LeftHeaderSubtitle>
            {goals.length === 1 ? '1 Entry' : `${goals.length} Entries`}
          </S.LeftHeaderSubtitle>
        </S.LeftHeader>

        <S.RightHeader>
          <RightHeader isExpanded={isExpanded} />
        </S.RightHeader>
      </S.Header>

      {isExpanded ? <Goals goals={goals} /> : null}
    </S.Wrapper>
  )
}
