import React, { useContext } from 'react'

import Dialog from '@mui/material/Dialog'

import { context as globalDialogContext, SET_OPEN_ACTION as GLOBAL_DIALOG_SET_OPEN_ACTION } from 'store/global-dialog'

const GlobalDialog = (): JSX.Element => {
  const globalDialog = useContext(globalDialogContext)
  const { dispatch } = globalDialog

  return (
    <Dialog
      onClose={() => dispatch({ type: GLOBAL_DIALOG_SET_OPEN_ACTION, value: { isOpen: false } })}
      open={globalDialog.state.isOpen}
    >
      Hola que ase
    </Dialog>
  )
}

export default GlobalDialog
