import React, { useEffect, useState } from 'react'

import PlusSvg from 'assets/svg/plus'
import SubstractSvg from 'assets/svg/substract'
import GoalType from 'types/Goal'
import GoalsByCategoryType from 'types/GoalsByCategory'
import MilestoneType from 'types/Milestone'

import Category from './../category'
import Goal from './../goal'
import * as S from './styled'

interface ParamTypes {
  data?: MilestoneType
}

const Milestone = ({ data }: ParamTypes): JSX.Element => {
  const [goalsByCategories, setGoalsByCategories] = useState<GoalsByCategoryType>({})
  const [goalsWithoutCategory, setGoalsWithoutCategory] = useState<GoalType[]>([])
  const [isExpanded, setIsExpanded] = useState(true)

  const groupGoalsByCategory = (goals: GoalType[]) => {
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
  }

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

  return (
    <S.Wrapper isExpanded={isExpanded}>
      <S.Header onClick={() => setIsExpanded(!isExpanded)}>
        <S.HeaderTitleWrapper>
          <S.HeaderTitle isExpanded={isExpanded} title={data?.name}>
            {data?.name}
          </S.HeaderTitle>
          <S.ExpandIconWrapper>
            {isExpanded ? <SubstractSvg title='Collapse milestone' /> : <PlusSvg title='Expand milestone' />}
          </S.ExpandIconWrapper>
        </S.HeaderTitleWrapper>
      </S.Header>

      {isExpanded && (
        <S.MilestonesWrapper>
          {Object.values(goalsByCategories).map(goals => {
            return <Category goals={goals} key={goals[0].category?.name} name={goals[0].category?.name} />
          })}
          {goalsWithoutCategory.map(goal => {
            return <Goal key={goal.name} goal={goal} />
          })}
        </S.MilestonesWrapper>
      )}
    </S.Wrapper>
  )
}

export default Milestone
