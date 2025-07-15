import { type ReactNode, useContext } from 'react'

import { context as globalDialogContext } from '@/store/global-dialog'
import * as GlobalDialogActions from '@/store/global-dialog/actions'

import { Dialog } from './components/dialog'
import type { GlobalDialogProps } from './index.types'

export function GlobalDialog({ className }: GlobalDialogProps): ReactNode {
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
      {globalDialogState.Component !== undefined ? (
        <div className={className ?? ''}>{globalDialogState.Component}</div>
      ) : null}
    </Dialog>
  )
}
