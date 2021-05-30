import React from 'react'

import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import MainTemplate from 'components/templates/main'
import { getById as getByIdRoadmapMillestone } from 'services/roadmap-milestone'

import Board from './components/board'
import * as S from './styled'

interface ParamTypes {
  id: string
}

const Roadmap = (): JSX.Element => {
  const { id } = useParams<ParamTypes>()

  const { isLoading, isError, data, error } = useQuery('roadmapMilestone', () => getByIdRoadmapMillestone(parseInt(id)))

  return (
    <MainTemplate>
      <S.Wrapper>
        <S.BoardWrapper>
          <Board roadmapMilestone={data} />
        </S.BoardWrapper>
      </S.Wrapper>
    </MainTemplate>
  )
}

export default Roadmap
