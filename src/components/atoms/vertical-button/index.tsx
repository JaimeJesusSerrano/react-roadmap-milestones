import * as S from './styled'

interface Props {
  readonly children?: React.ReactNode
  readonly onClick?: () => void
}

function VerticalButton ({ children, ...props }: Props): JSX.Element {
  return (
      <S.Wrapper {...props}>
          <S.Body>
              {children}
          </S.Body>
      </S.Wrapper>
  )
}

export default VerticalButton
