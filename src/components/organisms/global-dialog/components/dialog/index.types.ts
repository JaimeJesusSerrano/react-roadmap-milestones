import type { ReactNode } from 'react'

export interface DialogProps {
  children: ReactNode
  fullWidth?: boolean
  maxWidth?: 'sm' | 'md' | 'lg'
  open: boolean
  onClose?: () => void
}
