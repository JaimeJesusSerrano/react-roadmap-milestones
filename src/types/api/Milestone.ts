import Goal from './Goal'

interface Milestone {
  estimatedFinishDate?: Date
  finishDate?: Date
  goals: Goal[]
  name: string
  startDate?: Date
  status: string
}

export default Milestone
