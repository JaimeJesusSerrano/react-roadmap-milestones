import type { ReactNode } from 'react'

import { Tag } from '@/components/atoms/tag'

import * as S from './styled'
import type { TagsProps } from './types'

export function Tags({ tags, ...props }: TagsProps): ReactNode {
  return (
    <S.Wrapper {...props}>
      {tags.map((tag) => (
        <Tag key={tag.name}>{tag.name}</Tag>
      ))}
    </S.Wrapper>
  )
}
