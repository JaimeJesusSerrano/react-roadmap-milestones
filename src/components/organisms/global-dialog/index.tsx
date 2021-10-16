import React, { useContext } from 'react'

import Dialog from '@mui/material/Dialog'

import { context as globalDialogContext, SET_OPEN_ACTION as GLOBAL_DIALOG_SET_OPEN_ACTION } from 'store/global-dialog'

import * as S from './styled'

const GlobalDialog = (): JSX.Element => {
  const globalDialog = useContext(globalDialogContext)
  const { dispatch } = globalDialog

  return (
    <Dialog
      onClose={() => dispatch({ type: GLOBAL_DIALOG_SET_OPEN_ACTION, value: { isOpen: false } })}
      maxWidth={'lg'}
      open={globalDialog.state.isOpen}
    >
      <S.Wrapper>
        <S.Header>
          <div>Header</div>
          <div>X</div>
        </S.Header>
        <S.Title>Title</S.Title>
        <S.Body>
          <S.ImageAndDescriptionWrapper>
            <S.ImageWrapper>Image</S.ImageWrapper>
            <div>Body description</div>
          </S.ImageAndDescriptionWrapper>
          <S.Miscellaneous>
            <div>Category</div>
            <div>Tags</div>
          </S.Miscellaneous>
        </S.Body>
      </S.Wrapper>
    </Dialog>
  )
}

export default GlobalDialog
