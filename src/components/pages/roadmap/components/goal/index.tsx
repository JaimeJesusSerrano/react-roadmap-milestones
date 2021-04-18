import React from 'react'

import GoalType from 'types/Goal'

import { SWrapper } from './styles'

interface ParamTypes {
  goal?: GoalType
}

const Goal = ({ goal }: ParamTypes): JSX.Element => {
  return <SWrapper>{goal?.name}</SWrapper>
}

export default Goal
