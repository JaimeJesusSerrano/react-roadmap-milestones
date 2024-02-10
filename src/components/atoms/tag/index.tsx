import * as S from './styled'

interface Props {
  readonly children?: React.ReactNode
}

function Tag ({ children, ...props }: Props): JSX.Element {
  return (
      <S.Wrapper {...props}>
          <S.Body>
              {children}
          </S.Body>
      </S.Wrapper>
  )
}

export default Tag
