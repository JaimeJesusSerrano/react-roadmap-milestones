import React from 'react'

import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import MainTemplate from 'components/templates/main'
import { getById as getByIdRoadmapMillestone } from 'services/roadmap-milestone'

import Board from './components/board'
import { SBoardWrapper, SWrapper } from './styles'

interface ParamTypes {
  id: string
}

const Roadmap = (): JSX.Element => {
  const { id } = useParams<ParamTypes>()

  const { isLoading, isError, data, error } = useQuery('roadmapMilestone', () => getByIdRoadmapMillestone(parseInt(id)))

  return (
    <MainTemplate>
      <SWrapper>
        <SBoardWrapper>
          <Board roadmapMilestone={data} />
        </SBoardWrapper>
      </SWrapper>
    </MainTemplate>
  )
}

export default Roadmap
