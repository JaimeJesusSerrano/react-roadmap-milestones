import { type ReactNode } from 'react'

import * as S from './styled'

interface Props {
  readonly children?: ReactNode
}

function Tag ({ children, ...props }: Props): ReactNode {
  return (
      <S.Wrapper {...props}>
          <S.Body>
              {children}
          </S.Body>
      </S.Wrapper>
  )
}

export default Tag
