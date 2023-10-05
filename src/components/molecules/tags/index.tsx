import React from 'react'

import ITag from '../../../types/model/Tag'
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
        <Tag>{tag.name}</Tag>
      ))}
    </S.Wrapper>
  )
}

export default Tags
