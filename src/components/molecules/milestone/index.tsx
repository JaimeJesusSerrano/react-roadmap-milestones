import { type ReactNode, useMemo } from 'react'

import type { Goal as IGoal } from '@/types/model/Goal'
import type { Milestone as IMilestone } from '@/types/model/Milestone'
import type { GoalsByCategory as IGoalsByCategory } from '@/types/model/GoalsByCategory'

import { Render } from './render'

interface Props {
  readonly isExpanded: boolean
  readonly milestone?: IMilestone
}

export function Milestone({ isExpanded, milestone }: Props): ReactNode {
  const goalsByCategories: IGoalsByCategory = useMemo(() => {
    if (!milestone?.goals?.length) return {}

    const goalsWithCategory = milestone.goals.filter(goal => goal.category)

    return goalsWithCategory.reduce(
      (previousGoalsByCategories: IGoalsByCategory, currentGoal: IGoal) => {
        if (!currentGoal.category) return previousGoalsByCategories || {}

        const currentCategoryName = currentGoal.category.name

        // Group initialization
        previousGoalsByCategories[currentCategoryName] ||= [];

        // Grouping
        previousGoalsByCategories[currentCategoryName].push(currentGoal)

        return previousGoalsByCategories
      },
      {},
    )
  }, [milestone])

  const goalsWithoutCategory = useMemo(() => {
    if (!milestone?.goals?.length) return []
    return milestone.goals.filter(goal => !goal.category)
  }, [milestone])

  if (!milestone) {
    return null
  }

  return (
    <Render
      goalsByCategories={goalsByCategories}
      goalsWithoutCategory={goalsWithoutCategory}
      isExpanded={isExpanded}
      milestone={milestone}
    />
  )
}
