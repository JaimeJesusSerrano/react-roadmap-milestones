import type { Goal } from '@/types/model/Goal'

export interface CategoryProps {
  readonly goals: Goal[]
  readonly name: string
}
