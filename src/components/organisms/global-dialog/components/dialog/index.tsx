import React, { type ReactNode, useEffect } from 'react'

import * as S from './styled'
import type { DialogProps } from './types'

export const Dialog = ({
  open,
  onClose,
  children,
  maxWidth = 'sm',
  fullWidth = false,
}: DialogProps): ReactNode => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent): void => {
        if (e.key === 'Escape' && onClose !== undefined) {
          onClose()
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const handleBackdropClick = (e: React.MouseEvent): void => {
    if (e.target === e.currentTarget && onClose !== undefined) {
      onClose()
    }
  }

  return (
    <S.Backdrop onClick={handleBackdropClick}>
      <S.Wrapper maxWidth={maxWidth} fullWidth={fullWidth}>
        {children}
      </S.Wrapper>
    </S.Backdrop>
  )
}
