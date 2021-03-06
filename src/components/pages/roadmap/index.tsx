import React from 'react'

import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import RoadmapMilestone from 'components/organisms/roadmap-milestone'
import MainTemplate from 'components/templates/main'
import { getById as getByIdRoadmapMillestone } from 'services/roadmap-milestone'

import * as S from './styled'

interface ParamTypes {
  id: string
}

const Roadmap = (): JSX.Element => {
  const { id } = useParams<ParamTypes>()

  const { data } = useQuery('roadmapMilestoneData', () => getByIdRoadmapMillestone(id ? parseInt(id) : 1))

  return (
    <MainTemplate>
      <S.Wrapper>
        <S.BoardWrapper>
          <RoadmapMilestone data={data} />
        </S.BoardWrapper>
      </S.Wrapper>
    </MainTemplate>
  )
}

export default Roadmap
