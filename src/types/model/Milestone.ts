import { type Goal } from './Goal'

export interface Milestone {
  finishDate?: Date
  goals?: Goal[]
  name: string
  startDate?: Date
  status: string
}
