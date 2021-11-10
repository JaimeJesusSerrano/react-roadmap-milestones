import React, { useContext } from 'react'

import defaultGoalImageJpg from 'assets/jpg/default-goal-image.jpg'
import GoalDialogDetail from 'components/organisms/goal-dialog-detail'
import { context as globalDialogContext, SET_OPEN_ACTION as GLOBAL_DIALOG_SET_OPEN_ACTION } from 'store/global-dialog'
import GoalType from 'types/Goal'

import * as S from './styled'

interface ParamTypes {
  goal?: GoalType
}

const Goal = ({ goal }: ParamTypes): JSX.Element => {
  const globalState = useContext(globalDialogContext)
  const { dispatch } = globalState

  return (
    <S.Wrapper
      onClick={() =>
        dispatch({
          type: GLOBAL_DIALOG_SET_OPEN_ACTION,
          value: { isOpen: true, Component: <GoalDialogDetail goal={goal} /> },
        })
      }
    >
      <S.Status>{goal?.status}</S.Status>
      <S.Title>{goal?.name}</S.Title>
      <S.ImageWrapper>
        <img loading='lazy' src={goal?.images?.[0] || defaultGoalImageJpg} />
      </S.ImageWrapper>
      <S.Description>{goal?.description}</S.Description>
    </S.Wrapper>
  )
}

export default Goal