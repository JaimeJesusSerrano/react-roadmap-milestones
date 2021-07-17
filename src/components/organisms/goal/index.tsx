import React from 'react'

import GoalType from 'types/Goal'

import * as S from './styled'

interface ParamTypes {
  goal?: GoalType
}

const Goal = ({ goal }: ParamTypes): JSX.Element => {
  return (
    <S.Wrapper>
      <S.Status>{goal?.status}</S.Status>
      <S.Title>{goal?.name}</S.Title>
      <S.Description>{goal?.description}</S.Description>
    </S.Wrapper>
  )
}

export default Goal
