import { type Meta, type StoryObj } from '@storybook/react'

import ReactRoadmapMilestones from '../../components/organisms/roadmap-milestones'
import { type RoadmapMilestones as IRoadmapMilestones } from '../../types/model/RoadmapMilestones'

const roadmapMilestonesData: IRoadmapMilestones = {
  milestones: [
    {
      name: '0.1',
      status: 'pending',
      goals: [
        {
          name: 'Goal 1',
          description: 'Goal description',
          shortDescription: 'Short goal description',
          status: 'pending',
          updateDate: new Date()
        }
      ]
    }
  ],
  name: 'Example'
}

const meta = {
  title: 'Components/ReactRoadmapMilestones',
  component: ReactRoadmapMilestones,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    roadmapMilestonesData
  }
} satisfies Meta<typeof ReactRoadmapMilestones>

export default meta
type Story = StoryObj<typeof meta>

export const V1: Story = {
  args: {
  }
}
