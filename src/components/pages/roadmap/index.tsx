import React from 'react'
import { useParams } from 'react-router-dom'

import MainTemplate from 'components/templates/main'
import RoadmapMilestone from 'types/RoadmapMilestone'

import Board from './components/board'
import { SBoardWrapper, SWrapper } from './styles'

interface ParamTypes {
  id: string
}

const Roadmap = (): JSX.Element => {
  const { id } = useParams<ParamTypes>()

  const roadmapMilestone: RoadmapMilestone = {
    milestones: [
      {
        goals: [
          {
            description: '',
            finishDate: new Date('2021-04-04'),
            images: [],
            name: 'Create main infrastructure',
            shortDescription: '',
            startDate: new Date('2021-03-13'),
            status: 'Done',
            tags: [],
          },
          {
            description: '',
            finishDate: new Date('2021-04-18'),
            images: [],
            name: 'Define initial Roadmap types',
            shortDescription: '',
            startDate: new Date('2021-04-04'),
            status: 'Done',
            tags: [],
          },
          {
            description: '',
            images: [],
            name: 'Create board structure',
            shortDescription: '',
            startDate: new Date('2021-04-18'),
            status: 'Ongoing',
            tags: [],
          },
        ],
        name: '0.1',
        startDate: new Date('2021-03-13'),
        status: 'Ongoing',
      },
    ],
    name: 'Roadmap Milestone',
    startDate: new Date('2021-03-13'),
  }

  return (
    <MainTemplate>
      <SWrapper>
        <SBoardWrapper>
          <Board roadmapMilestone={roadmapMilestone} />
        </SBoardWrapper>
      </SWrapper>
    </MainTemplate>
  )
}

export default Roadmap
