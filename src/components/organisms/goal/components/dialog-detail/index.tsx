import React, { useContext } from 'react'

import defaultGoalImageJpg from 'assets/jpg/default-goal-image.jpg'
import CloseSvg from 'assets/svg/close'
import { context as globalDialogContext } from 'store/global-dialog'
import * as GlobalDialogActions from 'store/global-dialog/actions'
import GoalType from 'types/api/Goal'

import * as S from './styled'

interface ParamTypes {
  goal?: GoalType
}

const GoalDialogDetail = ({ goal }: ParamTypes): JSX.Element => {
  const { dispatch: globalDialogDispatch } = useContext(globalDialogContext)

  return (
    <S.Wrapper>
      <S.Header>
        <S.Status>{goal?.status || ''}</S.Status>
        <S.Close onClick={() => globalDialogDispatch(GlobalDialogActions.setOpen(false))}>
          <CloseSvg title='Close' />
        </S.Close>
      </S.Header>
      <S.Title>{goal?.name}</S.Title>
      <S.Body>
        <S.ImageAndDescriptionWrapper>
          <S.ImageWrapper>
            <img loading='lazy' src={goal?.images?.[0] || defaultGoalImageJpg} />
          </S.ImageWrapper>
          <S.BodyDescriptionWrapper>
            <S.BodyDescriptionDate>Updated {goal?.updateDate?.toLocaleString() || ''}</S.BodyDescriptionDate>
            <S.BodyDescription>{goal?.description}</S.BodyDescription>
          </S.BodyDescriptionWrapper>
        </S.ImageAndDescriptionWrapper>
        <S.Miscellaneous>
          <S.CategoryWrapper>
            <S.CategoryTitle>Category: </S.CategoryTitle>
            <S.Category>{goal?.category?.name || ''}</S.Category>
          </S.CategoryWrapper>
        </S.Miscellaneous>
      </S.Body>
    </S.Wrapper>
  )
}

export default GoalDialogDetail
