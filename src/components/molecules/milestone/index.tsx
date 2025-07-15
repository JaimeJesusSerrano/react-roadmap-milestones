import { type ReactNode, useMemo } from 'react'

import type { Goal as IGoal } from '@/types/model/Goal'
import type { GoalsByCategory as IGoalsByCategory } from '@/types/model/GoalsByCategory'

import { Render } from './render'
import type { MilestoneProps } from './types'

export function Milestone({ isExpanded, milestone }: MilestoneProps): ReactNode {
  const goalsByCategories: IGoalsByCategory = useMemo(() => {
    if (milestone.goals === undefined) return {}

    const goalsWithCategory = milestone.goals.filter((goal) => goal.category !== undefined)

    return goalsWithCategory.reduce(
      (previousGoalsByCategories: IGoalsByCategory, currentGoal: IGoal) => {
        if (currentGoal.category === undefined) return previousGoalsByCategories

        // Group initialization
        previousGoalsByCategories[currentGoal.category.name] ??= []

        // Grouping
        previousGoalsByCategories[currentGoal.category.name].push(currentGoal)

        return previousGoalsByCategories
      },
      {},
    )
  }, [milestone])

  const goalsWithoutCategory = useMemo(() => {
    if (milestone.goals === undefined) return []
    return milestone.goals.filter((goal) => goal.category === undefined)
  }, [milestone])

  return (
    <Render
      goalsByCategories={goalsByCategories}
      goalsWithoutCategory={goalsWithoutCategory}
      isExpanded={isExpanded}
      milestone={milestone}
    />
  )
}
