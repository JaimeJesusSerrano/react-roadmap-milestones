import { type ReactNode, useContext } from 'react'

import { context as globalDialogContext } from '@/store/global-dialog'
import * as GlobalDialogActions from '@/store/global-dialog/actions'

import { Dialog } from './Dialog'

interface Props {
  className?: string
}

export function GlobalDialog({ className }: Props): ReactNode {
  const { dispatch: globalDialogDispatch, state: globalDialogState } =
    useContext(globalDialogContext)

  return (
    <Dialog
      maxWidth="lg"
      onClose={() => {
        globalDialogDispatch(GlobalDialogActions.setOpen(false))
      }}
      open={globalDialogState.isOpen}
    >
      {globalDialogState.Component ? (
        <div className={className ?? ''}>{globalDialogState.Component}</div>
      ) : null}
    </Dialog>
  )
}
