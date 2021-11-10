import React, { useContext } from 'react'

import CloseSvg from 'assets/svg/close'
import defaultGoalImageJpg from 'assets/jpg/default-goal-image.jpg'
import { context as globalDialogContext, SET_OPEN_ACTION as GLOBAL_DIALOG_SET_OPEN_ACTION } from 'store/global-dialog'
import GoalType from 'types/Goal'

import * as S from './styled'

interface ParamTypes {
  goal?: GoalType
}

const GoalDialogDetail = ({ goal }: ParamTypes): JSX.Element => {
  const globalDialog = useContext(globalDialogContext)
  const { dispatch } = globalDialog

  return (
    <S.Wrapper>
      <S.Header>
        <S.Status>{goal?.status || ''}</S.Status>
        <S.Close onClick={() => dispatch({ type: GLOBAL_DIALOG_SET_OPEN_ACTION, value: { isOpen: false } })}>
          <CloseSvg />
        </S.Close>
      </S.Header>
      <S.Title>Title</S.Title>
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