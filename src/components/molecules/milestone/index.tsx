import React, { useCallback, useEffect, useState } from 'react'

import GoalType from 'types/api/Goal'
import MilestoneType from 'types/api/Milestone'
import GoalsByCategoryType from 'types/GoalsByCategory'

import Render from './render'

interface ParamTypes {
  data?: MilestoneType
}

const Milestone = ({ data }: ParamTypes): JSX.Element => {
  const [goalsByCategories, setGoalsByCategories] = useState<GoalsByCategoryType>({})
  const [goalsWithoutCategory, setGoalsWithoutCategory] = useState<GoalType[]>([])

  const groupGoalsByCategory = useCallback((goals: GoalType[]) => {
    return goals.reduce((previousGoalsByCategories: GoalsByCategoryType, currentGoal: GoalType) => {
      const currentCategoryName = currentGoal.category?.name || 'undefined'
      // Group initialization
      if (!previousGoalsByCategories[currentCategoryName]) {
        previousGoalsByCategories[currentCategoryName] = []
      }

      // Grouping
      previousGoalsByCategories[currentCategoryName].push(currentGoal)

      return previousGoalsByCategories
    }, {})
  }, [])

  useEffect(() => {
    if (!data || !data.goals) {
      setGoalsByCategories({})
      setGoalsWithoutCategory([])
      return
    }

    const newCategories = groupGoalsByCategory(data.goals)
    setGoalsWithoutCategory(newCategories['undefined'] || [])
    delete newCategories['undefined']
    setGoalsByCategories(newCategories)
  }, [data?.goals])

  if (!data) {
    return <></>
  }

  return <Render goalsByCategories={goalsByCategories} goalsWithoutCategory={goalsWithoutCategory} milestone={data} />
}

export default Milestone
