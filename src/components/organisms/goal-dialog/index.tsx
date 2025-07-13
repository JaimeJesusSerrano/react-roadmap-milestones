import { type ReactNode, useContext } from 'react'

import { Close as CloseSvg } from '@/assets/svg/close'
import { Tags as TagsComponent } from '@/components/molecules/tags'
import { context as globalDialogContext } from '@/store/global-dialog'
import * as GlobalDialogActions from '@/store/global-dialog/actions'

import { ImageNotFound } from './components/image-not-found'
import type { GoalDialogProps, TagsProps } from './index.types'
import * as S from './styled'

export function GoalDialog({ goal }: GoalDialogProps): ReactNode {
  const { dispatch: globalDialogDispatch } = useContext(globalDialogContext)

  return (
    <S.Wrapper>
      <S.Header>
        <S.Status>{goal.status}</S.Status>

        <S.Close
          onClick={() => {
            globalDialogDispatch(GlobalDialogActions.setOpen(false))
          }}
        >
          <CloseSvg title="Close" />
        </S.Close>
      </S.Header>

      <S.Title>{goal.name}</S.Title>

      <S.Body>
        <S.ImageAndDescriptionWrapper>
          <S.ImageWrapper>
            {goal.images.length === 0 ? (
              <ImageNotFound />
            ) : (
              <img alt="Goal" loading="lazy" src={goal.images[0]} />
            )}
          </S.ImageWrapper>

          <S.BodyDescriptionWrapper>
            <S.BodyDescriptionDate>
              {'Updated '}

              {goal.updateDate.toLocaleDateString()}
            </S.BodyDescriptionDate>

            <S.BodyDescription>{goal.description}</S.BodyDescription>
          </S.BodyDescriptionWrapper>
        </S.ImageAndDescriptionWrapper>

        <S.Miscellaneous>
          <S.CategoryWrapper>
            <S.CategoryTitle>{'Category: '}</S.CategoryTitle>

            <S.Category>{goal.category?.name ?? ''}</S.Category>
          </S.CategoryWrapper>

          {goal.tags.length > 0 ? <Tags tags={goal.tags} /> : null}
        </S.Miscellaneous>
      </S.Body>
    </S.Wrapper>
  )
}

function Tags({ tags }: TagsProps): ReactNode {
  return (
    <S.TagsWrapper>
      <S.TagsTittle>Tags:</S.TagsTittle>

      <TagsComponent tags={tags} />
    </S.TagsWrapper>
  )
}
