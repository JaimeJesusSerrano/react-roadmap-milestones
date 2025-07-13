import type { ReactNode } from 'react'

import { ImageNotFound as ImageNotFoundSvg } from '@/assets/svg/image-not-found'

import * as S from './styled'

export function ImageNotFound(): ReactNode {
  return (
    <S.Wrapper>
      <ImageNotFoundSvg height="100%" title="Image not found" width="100%" />
    </S.Wrapper>
  )
}
