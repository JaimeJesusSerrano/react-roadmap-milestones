import type { Goal } from '@/types/model/Goal'
import type { GoalsByCategory } from '@/types/model/GoalsByCategory'

export interface BodyProps {
  readonly goalsByCategories: GoalsByCategory
  readonly goalsWithoutCategory: Goal[]
}
