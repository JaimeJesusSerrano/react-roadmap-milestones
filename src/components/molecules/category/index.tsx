import { useState } from 'react'

import ChevronDownSvg from 'assets/svg/chevron-down'
import ChevronUpSvg from 'assets/svg/chevron-up'
import Goal from 'components/organisms/goal'
import type IGoal from 'types/model/Goal'

import * as S from './styled'

interface Props {
  readonly goals: IGoal[]
  readonly name: string
}

function Category ({ goals, name = '' }: Props): JSX.Element {
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

function RightHeader ({ isExpanded }: { readonly isExpanded: boolean }): JSX.Element {
  if (isExpanded) return <ChevronUpSvg title="Collapse category" />
  return <ChevronDownSvg title="Expand category" />
}

function Goals ({ goals }: { readonly goals: IGoal[] }): JSX.Element {
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

export default Category
