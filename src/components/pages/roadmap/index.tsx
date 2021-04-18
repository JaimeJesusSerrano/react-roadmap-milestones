import React from 'react'
import { useParams } from 'react-router-dom'

import MainTemplate from 'components/templates/main'
import RoadmapMilestone from 'types/RoadmapMilestone'

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
            images: [],
            name: 'Create main infrastructure',
            shortDescription: '',
            startDate: new Date('2021-03-13'),
            status: 'Ongoing',
            tags: [],
          },
          {
            description: '',
            images: [],
            name: 'Define initial Roadmap types',
            shortDescription: '',
            startDate: new Date('2021-04-04'),
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
      <div>Roadmap {id}</div>
      <div>{JSON.stringify(roadmapMilestone)}</div>
    </MainTemplate>
  )
}

export default Roadmap
