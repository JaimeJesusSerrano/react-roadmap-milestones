import { type ReactNode, useContext } from 'react'

import { Tags as TagsComponent } from '@/components/molecules/tags'
import { context as globalDialogContext } from '@/store/global-dialog'
import * as GlobalDialogActions from '@/store/global-dialog/actions'

import { GoalDialogDetail } from './components/dialog-detail'
import { MainImage } from './components/main-image'
import { ImageNotFound } from './components/image-not-found'
import type { GoalProps, TagsProps } from './index.types'
import * as S from './styled'

export function Goal({ goal }: GoalProps): ReactNode {
  const { dispatch: globalDialogDispatch } = useContext(globalDialogContext)

  return (
    <S.Wrapper
      onClick={() => {
        globalDialogDispatch(
          GlobalDialogActions.setOpen(true, <GoalDialogDetail goal={goal} />),
        )
      }}
    >
      <S.Status>{goal.status}</S.Status>

      <S.Title>{goal.name}</S.Title>

      <S.ImageWrapper>
        {goal.images.length === 0 ? (
          <ImageNotFound />
        ) : (
          <MainImage imageSrc={goal.images[0]} />
        )}
      </S.ImageWrapper>

      <S.Description>{goal.shortDescription ?? goal.description}</S.Description>

      {goal.tags.length > 0 ? <Tags tags={goal.tags} /> : null}
    </S.Wrapper>
  )
}

function Tags({ tags }: TagsProps): ReactNode {
  return (
    <S.TagsWrapper>
      <TagsComponent tags={tags} />
    </S.TagsWrapper>
  )
}
