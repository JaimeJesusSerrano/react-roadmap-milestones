import { type ReactNode, useState } from 'react'

import { type Goal as IGoal } from 'types/model/Goal'

import { Goals } from './Goals'
import { RightHeader } from './RightHeader'
import * as S from './styled'

interface Props {
  readonly goals: IGoal[]
  readonly name: string
}

export function Category ({ goals, name = '' }: Props): ReactNode {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
      <S.Wrapper>
          <S.Header onClick={() => { setIsExpanded(!isExpanded) }}>
              <S.LeftHeader>
                  <S.LeftHeaderTitle>
                      {name}
                  </S.LeftHeaderTitle>

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
