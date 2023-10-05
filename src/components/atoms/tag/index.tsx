import React from 'react'

import * as S from './styled'

interface ParamTypes {
  children?: React.ReactNode
}

const Tag = ({ children, ...props }: ParamTypes): JSX.Element => (
  <S.Wrapper {...props}>
    <S.Body>{children}</S.Body>
  </S.Wrapper>
)

export default Tag
