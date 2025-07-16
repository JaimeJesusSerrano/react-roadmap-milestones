import type { ReactNode } from 'react'

import * as S from './styled'
import type { VerticalButtonProps } from './types'

export function VerticalButton({ children, ...props }: VerticalButtonProps): ReactNode {
  return (
    <S.Wrapper {...props}>
      <S.Body>{children}</S.Body>
    </S.Wrapper>
  )
}
