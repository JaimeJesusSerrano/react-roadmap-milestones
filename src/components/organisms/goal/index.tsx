import React, { useContext } from 'react'

import type IGoal from '../../../types/model/Goal'
import ImageNotFoundSvg from '../../../assets/svg/image-not-found'
import { context as globalDialogContext } from '../../../store/global-dialog'
import * as GlobalDialogActions from '../../../store/global-dialog/actions'

import GoalDialogDetail from './components/dialog-detail'
import * as S from './styled'

interface ParamTypes {
  goal: IGoal
}

const Goal = ({ goal }: ParamTypes): JSX.Element => {
  const { dispatch: globalDialogDispatch } = useContext(globalDialogContext)

  return (
    <S.Wrapper
      onClick={() =>
        globalDialogDispatch(GlobalDialogActions.setOpen(true, <GoalDialogDetail goal={goal} />))
      }
    >
      <S.Status>{goal.status}</S.Status>
      <S.Title>{goal.name}</S.Title>
      <S.ImageWrapper>
        {goal.images?.[0] ? (
          <img alt="Goal" loading="lazy" src={goal.images?.[0]} />
        ) : (
          <S.ImageNotFoundWrapper>
            <ImageNotFoundSvg height="100%" title="Image not found" width="100%" />
          </S.ImageNotFoundWrapper>
        )}
      </S.ImageWrapper>
      <S.Description>{goal.shortDescription || goal.description}</S.Description>
    </S.Wrapper>
  )
}

export default Goal
