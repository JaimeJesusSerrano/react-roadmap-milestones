import React, { useCallback, useEffect, useState } from 'react'

import GoalType from '../../../types/Goal'
import MilestoneType from '../../../types/Milestone'
import GoalsByCategoryType from '../../../types/GoalsByCategory'

import Render from './render'

interface ParamTypes {
  data?: MilestoneType
  isExpanded: boolean
}

const Milestone = ({ data, isExpanded }: ParamTypes): JSX.Element | null => {
  const [goalsByCategories, setGoalsByCategories] = useState<GoalsByCategoryType>({})
  const [goalsWithoutCategory, setGoalsWithoutCategory] = useState<GoalType[]>([])

  const groupGoalsByCategory = useCallback(
    (goals: GoalType[]) =>
      goals.reduce((previousGoalsByCategories: GoalsByCategoryType, currentGoal: GoalType) => {
        const currentCategoryName = currentGoal.category?.name || 'undefined'
        // Group initialization
        if (!previousGoalsByCategories[currentCategoryName]) {
          previousGoalsByCategories[currentCategoryName] = []
        }

        // Grouping
        previousGoalsByCategories[currentCategoryName].push(currentGoal)

        return previousGoalsByCategories
      }, {}),
    [],
  )

  useEffect(() => {
    if (!data || !data.goals) {
      setGoalsByCategories({})
      setGoalsWithoutCategory([])
      return
    }

    const newCategories = groupGoalsByCategory(data.goals)
    setGoalsWithoutCategory(newCategories.undefined || [])
    delete newCategories.undefined
    setGoalsByCategories(newCategories)
  }, [data?.goals])

  if (!data) {
    return null
  }

  return (
    <Render
      isExpanded={isExpanded}
      goalsByCategories={goalsByCategories}
      goalsWithoutCategory={goalsWithoutCategory}
      milestone={data}
    />
  )
}

export default Milestone
