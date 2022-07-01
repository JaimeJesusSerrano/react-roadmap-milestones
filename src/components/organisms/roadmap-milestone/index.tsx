import React, { useContext, useEffect, useState } from 'react'

import Milestone from 'components/molecules/milestone'
import { context as globalSettingsContext } from 'store/global-settings'
import RoadmapMilestoneType from 'types/api/RoadmapMilestone'
import MilestoneType from 'types/api/Milestone'

import ShowPrevious from './components/show-previous'
import * as S from './styled'

interface ParamTypes {
  data?: RoadmapMilestoneType
}

const RoadmapMilestone = ({ data }: ParamTypes): JSX.Element => {
  const globalSettings = useContext(globalSettingsContext)

  const [milestones, setMilestones] = useState<MilestoneType[]>()

  useEffect(() => {
    if (globalSettings.state.showMilestonesFinished) {
      setMilestones(data?.milestones || [])
    } else {
      setMilestones(data?.milestones.filter(milestone => !milestone.finishDate))
    }
  }, [data, globalSettings.state.showMilestonesFinished])

  if (!milestones?.length) {
    return <></>
  }

  return (
    <S.Wrapper>
      <div style={{ marginRight: 12 }}>
        <ShowPrevious />
      </div>

      {milestones.map(milestone => {
        return (
          <S.MilestoneWrapper key={milestone.name}>
            <Milestone data={milestone} isExpanded={!milestone.finishDate} />
          </S.MilestoneWrapper>
        )
      })}
    </S.Wrapper>
  )
}

export default RoadmapMilestone
