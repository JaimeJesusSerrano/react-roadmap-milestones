import { type ReactNode } from 'react'

import { Tag } from 'components/atoms/tag'
import { type Tag as ITag } from 'types/model/Tag'

import * as S from './styled'

interface Props {
  readonly tags: ITag[]
}

export function Tags ({ tags, ...props }: Props): ReactNode {
  if (!tags?.length) return null

  return (
      <S.Wrapper {...props}>
          {tags.map(tag => (
              <Tag key={tag.name}>
                  {tag.name}
              </Tag>
          ))}
      </S.Wrapper>
  )
}
