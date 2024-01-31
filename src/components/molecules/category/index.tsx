import { useState } from 'react'

import type IGoal from '../../../types/model/Goal'
import ChevronDownSvg from '../../../assets/svg/chevron-down'
import ChevronUpSvg from '../../../assets/svg/chevron-up'
import Goal from '../../organisms/goal'

import * as S from './styled'

interface ParamTypes {
  goals: IGoal[]
  name: string
}

const Category = ({ goals, name = '' }: ParamTypes): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <S.Wrapper>
      <S.Header onClick={() => { setIsExpanded(!isExpanded) }}>
        <S.LeftHeader>
          <S.LeftHeaderTitle>{name}</S.LeftHeaderTitle>
          <S.LeftHeaderSubtitle>
            {goals.length === 1 ? '1 Entry' : `${goals.length} Entries`}
          </S.LeftHeaderSubtitle>
        </S.LeftHeader>

        <S.RightHeader>
          {isExpanded ? (
            <ChevronUpSvg title="Collapse category" />
          ) : (
            <ChevronDownSvg title="Expand category" />
          )}
        </S.RightHeader>
      </S.Header>

      {isExpanded && goals?.length && (
        <S.GoalsWrapper>{goals?.map(goal => <Goal key={goal.name} goal={goal} />)}</S.GoalsWrapper>
      )}
    </S.Wrapper>
  )
}

export default Category
