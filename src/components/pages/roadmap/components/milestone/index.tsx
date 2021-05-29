import React from 'react'

import MilestoneType from 'types/Milestone'

import Goal from './../goal'
import { SWrapper } from './styles'

interface ParamTypes {
  milestone?: MilestoneType
}

const Milestone = ({ milestone }: ParamTypes): JSX.Element => {
  return (
    <SWrapper>
      {milestone?.name}
      {milestone?.goals.map(goal => {
        return <Goal key={goal.name} goal={goal} />
      })}
    </SWrapper>
  )
}

export default Milestone
