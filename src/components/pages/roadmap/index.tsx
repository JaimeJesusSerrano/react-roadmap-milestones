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
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: '',
            finishDate: new Date('2021-04-04'),
            images: [],
            name: 'Create repository',
            shortDescription: '',
            startDate: new Date('2021-03-13'),
            status: 'Done',
            tags: [],
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: '',
            finishDate: new Date('2021-04-04'),
            images: [],
            name: 'Install ReactJS and basic structure',
            shortDescription: '',
            startDate: new Date('2021-04-04'),
            status: 'Done',
            tags: [],
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
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
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'This feature indcludes responsive styles basic html',
            finishDate: new Date('2021-05-01'),
            images: [],
            name: 'Create board structure v1',
            shortDescription: '',
            startDate: new Date('2021-04-18'),
            status: 'Done',
            tags: [],
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description:
              'With this feature we will can get a fake data from a fake service. It is necessary to future real connections.',
            images: [],
            name: 'Add services and repositories structure',
            shortDescription: '',
            startDate: new Date('2021-05-01'),
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
