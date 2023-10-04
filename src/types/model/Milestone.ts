import Goal from './Goal'

export interface Milestone {
  finishDate?: Date
  goals?: Goal[]
  name: string
  status: string
}

export default Milestone
