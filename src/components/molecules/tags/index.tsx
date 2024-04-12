import Tag from 'components/atoms/tag'
import type ITag from 'types/model/Tag'

import * as S from './styled'

interface Props {
  readonly tags: ITag[]
}

function Tags ({ tags, ...props }: Props): JSX.Element | null {
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

export default Tags
