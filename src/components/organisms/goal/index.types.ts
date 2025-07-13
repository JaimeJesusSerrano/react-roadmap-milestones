import type { Goal } from '@/types/model/Goal'
import type { Tag } from '@/types/model/Tag'

export interface GoalProps {
  readonly goal: Goal
}

export interface TagsProps {
  readonly tags: Tag[]
}
