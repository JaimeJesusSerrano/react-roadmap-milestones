import Goal from './Goal'

export interface Milestone {
  estimatedFinishDate?: Date
  finishDate?: Date
  goals: Goal[]
  name: string
  startDate?: Date
  status: string
}

export default Milestone
