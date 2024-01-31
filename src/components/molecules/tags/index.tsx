import type ITag from '../../../types/model/Tag'
import Tag from '../../atoms/tag'

import * as S from './styled'

interface ParamTypes {
  tags: ITag[]
}

const Tags = ({ tags, ...props }: ParamTypes): JSX.Element => {
  if (!tags?.length) return <></>

  return (
    <S.Wrapper {...props}>
      {tags.map(tag => (
        <Tag key={tag.name}>{tag.name}</Tag>
      ))}
    </S.Wrapper>
  )
}

export default Tags