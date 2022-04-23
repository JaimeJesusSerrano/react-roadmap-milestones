import React, { useContext } from 'react'

import defaultGoalImageJpg from 'assets/jpg/default-goal-image.jpg'
import { context as globalDialogContext } from 'store/global-dialog'
import * as GlobalDialogActions from 'store/global-dialog/actions'
import GoalType from 'types/api/Goal'

import GoalDialogDetail from './components/dialog-detail'
import * as S from './styled'

interface ParamTypes {
  goal?: GoalType
}

const Goal = ({ goal }: ParamTypes): JSX.Element => {
  const { dispatch: globalDialogDispatch } = useContext(globalDialogContext)

  return (
    <S.Wrapper
      onClick={() => globalDialogDispatch(GlobalDialogActions.setOpen(true, <GoalDialogDetail goal={goal} />))}
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
