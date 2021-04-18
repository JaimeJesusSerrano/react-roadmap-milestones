interface Category {
  color: string
  name: string
}

interface Tag {
  color: string
  name: string
}

interface Goal {
  category?: Category
  description: string
  estimatedFinishDate?: Date
  finishDate?: Date
  images: string[]
  name: string
  shortDescription: string
  startDate: Date
  status: string
  tags: Tag[]
}

interface Milestone {
  estimatedFinishDate?: Date
  finishDate?: Date
  goals: Goal[]
  name: string
  startDate: Date
  status: string
}

interface RoadmapMilestone {
  milestones: Milestone[]
  name: string
  startDate: Date
}

export default RoadmapMilestone
