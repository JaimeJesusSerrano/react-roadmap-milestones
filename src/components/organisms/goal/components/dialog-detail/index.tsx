import { type ReactNode, useContext } from 'react'

import { ImageNotFound as ImageNotFoundSvg } from 'assets/svg/image-not-found'
import { Close as CloseSvg } from 'assets/svg/close'
import { Tags } from 'components/molecules/tags'
import { context as globalDialogContext } from 'store/global-dialog'
import * as GlobalDialogActions from 'store/global-dialog/actions'
import { type Goal as IGoal } from 'types/model/Goal'
import { type Tag as ITag } from 'types/model/Tag'

import * as S from './styled'

interface Props {
  readonly goal: IGoal
}

function GoalDialogDetail ({ goal }: Props): ReactNode {
  const { dispatch: globalDialogDispatch } = useContext(globalDialogContext)

  return (
      <S.Wrapper>
          <S.Header>
              <S.Status>
                  {goal.status}
              </S.Status>

              <S.Close onClick={() => { globalDialogDispatch(GlobalDialogActions.setOpen(false)) }}>
                  <CloseSvg title="Close" />
              </S.Close>
          </S.Header>

          <S.Title>
              {goal.name}
          </S.Title>

          <S.Body>
              <S.ImageAndDescriptionWrapper>
                  <S.ImageWrapper>
                      <ImageWrapper imageSrc={goal.images?.[0] ?? ''} />
                  </S.ImageWrapper>

                  <S.BodyDescriptionWrapper>
                      <S.BodyDescriptionDate>
                          {'Updated '}

                          {goal.updateDate?.toLocaleDateString() || ''}
                      </S.BodyDescriptionDate>

                      <S.BodyDescription>
                          {goal.description}
                      </S.BodyDescription>
                  </S.BodyDescriptionWrapper>
              </S.ImageAndDescriptionWrapper>

              <S.Miscellaneous>
                  <S.CategoryWrapper>
                      <S.CategoryTitle>
                          {'Category: '}
                      </S.CategoryTitle>

                      <S.Category>
                          {goal.category?.name ?? ''}
                      </S.Category>
                  </S.CategoryWrapper>

                  {goal.tags?.length ? <TagsWrapper tags={goal.tags} /> : null }
              </S.Miscellaneous>
          </S.Body>
      </S.Wrapper>
  )
}

function ImageWrapper ({ imageSrc }: { readonly imageSrc: string }): ReactNode {
  if (!imageSrc) {
    return (
        <S.ImageNotFoundWrapper>
            <ImageNotFoundSvg
                height="100%"
                title="Image not found"
                width="100%"
            />
        </S.ImageNotFoundWrapper>
    )
  }

  return (
      <img
          alt="Goal"
          loading="lazy"
          src={imageSrc}
      />
  )
}

function TagsWrapper ({ tags }: { readonly tags: ITag[] }): ReactNode {
  return (
      <S.TagsWrapper>
          <S.TagsTittle>
              Tags:
          </S.TagsTittle>

          <Tags tags={tags} />
      </S.TagsWrapper>
  )
}

export default GoalDialogDetail
