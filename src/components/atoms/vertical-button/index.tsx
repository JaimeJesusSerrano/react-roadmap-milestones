import { type ReactNode } from 'react'

import * as S from './styled'

interface Props {
  readonly children?: ReactNode
  readonly onClick?: () => void
}

export function VerticalButton({ children, ...props }: Props): ReactNode {
  return (
    <S.Wrapper {...props}>
      <S.Body>
        {children}
      </S.Body>
    </S.Wrapper>
  )
}
