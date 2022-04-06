import React from 'react'

import * as S from './styled'

interface ParamTypes {
  children?: React.ReactNode
  onClick?: () => void
}

const VerticalButton = ({ children, ...props }: ParamTypes): JSX.Element => {
  return (
    <S.Wrapper {...props}>
      <S.Body>{children}</S.Body>
    </S.Wrapper>
  )
}

export default VerticalButton
