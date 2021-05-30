import React from 'react'

import GoalType from 'types/Goal'

import * as S from './styled'

interface ParamTypes {
  goal?: GoalType
}

const Goal = ({ goal }: ParamTypes): JSX.Element => {
  return <S.Wrapper>{goal?.name}</S.Wrapper>
}

export default Goal
