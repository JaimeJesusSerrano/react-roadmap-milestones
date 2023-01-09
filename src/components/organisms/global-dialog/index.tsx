import React, { useContext } from 'react'

import { context as globalDialogContext } from '../../../store/global-dialog'
import * as GlobalDialogActions from '../../../store/global-dialog/actions'

import * as S from './styled'

const GlobalDialog = (): JSX.Element => {
  const { dispatch: globalDialogDispatch, state: globalDialogState } =
    useContext(globalDialogContext)

  return (
    <S.Dialog
      maxWidth="lg"
      onClose={() => globalDialogDispatch(GlobalDialogActions.setOpen(false))}
      open={globalDialogState.isOpen}
    >
      {globalDialogState.Component ? globalDialogState.Component : null}
    </S.Dialog>
  )
}

export default GlobalDialog
