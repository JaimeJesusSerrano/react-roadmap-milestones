import React, { useContext } from 'react'

import { context as globalDialogContext } from 'store/global-dialog'
import { SET_OPEN as GLOBAL_DIALOG_SET_OPEN_ACTION } from 'store/global-dialog/actions'

import * as S from './styled'

const GlobalDialog = (): JSX.Element => {
  const globalDialog = useContext(globalDialogContext)
  const { dispatch: dispatchGlobalDialog } = globalDialog

  return (
    <S.Dialog
      onClose={() => dispatchGlobalDialog({ type: GLOBAL_DIALOG_SET_OPEN_ACTION, value: { isOpen: false } })}
      maxWidth={'lg'}
      open={globalDialog.state.isOpen}
    >
      {globalDialog.state.Component ? globalDialog.state.Component : <></>}
    </S.Dialog>
  )
}

export default GlobalDialog
