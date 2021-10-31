import React, { useContext } from 'react'

import { context as globalDialogContext, SET_OPEN_ACTION as GLOBAL_DIALOG_SET_OPEN_ACTION } from 'store/global-dialog'

import * as S from './styled'

const GlobalDialog = (): JSX.Element => {
  const globalDialog = useContext(globalDialogContext)
  const { dispatch } = globalDialog

  return (
    <S.Dialog
      onClose={() => dispatch({ type: GLOBAL_DIALOG_SET_OPEN_ACTION, value: { isOpen: false } })}
      maxWidth={'lg'}
      open={globalDialog.state.isOpen}
    >
      {globalDialog.state.Component ? globalDialog.state.Component : <></>}
    </S.Dialog>
  )
}

export default GlobalDialog
