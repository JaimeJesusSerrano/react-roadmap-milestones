import { useMemo } from 'react'

import type IGoal from '../../../types/model/Goal'
import type IMilestone from '../../../types/model/Milestone'
import type IGoalsByCategory from '../../../types/model/GoalsByCategory'

import Render from './render'

interface ParamTypes {
  isExpanded: boolean
  milestone?: IMilestone
}

const Milestone = ({ isExpanded, milestone }: ParamTypes): JSX.Element | null => {
  const goalsByCategories: IGoalsByCategory = useMemo(() => {
    if (!milestone?.goals?.length) return {}

    const goalsWithCategory = milestone.goals.filter(goal => goal.category)

    return goalsWithCategory.reduce(
      (previousGoalsByCategories: IGoalsByCategory, currentGoal: IGoal) => {
        if (!currentGoal.category) return previousGoalsByCategories || {}

        const currentCategoryName = currentGoal.category.name

        // Group initialization
        if (!previousGoalsByCategories[currentCategoryName]) {
          previousGoalsByCategories[currentCategoryName] = []
        }

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
      isExpanded={isExpanded}
      goalsByCategories={goalsByCategories}
      goalsWithoutCategory={goalsWithoutCategory}
      milestone={milestone}
    />
  )
}

export default Milestone
