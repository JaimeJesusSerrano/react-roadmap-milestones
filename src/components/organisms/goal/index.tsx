import { type ReactNode, useContext } from 'react'

import { ImageNotFound as ImageNotFoundSvg } from 'assets/svg/image-not-found'
import { Tags } from 'components/molecules/tags'
import { context as globalDialogContext } from 'store/global-dialog'
import * as GlobalDialogActions from 'store/global-dialog/actions'
import { type Goal as IGoal } from 'types/model/Goal'
import { type Tag as ITag } from 'types/model/Tag'

import GoalDialogDetail from './components/dialog-detail'
import * as S from './styled'

interface Props {
  readonly goal: IGoal
}

export function Goal ({ goal }: Props): ReactNode {
  const { dispatch: globalDialogDispatch } = useContext(globalDialogContext)

  return (
      <S.Wrapper
          onClick={() => { globalDialogDispatch(GlobalDialogActions.setOpen(true, <GoalDialogDetail goal={goal} />)) }}
      >
          <S.Status>
              {goal.status}
          </S.Status>

          <S.Title>
              {goal.name}
          </S.Title>

          <S.ImageWrapper>
              <ImageWrapper imageSrc={goal.images?.[0] ?? ''} />
          </S.ImageWrapper>

          <S.Description>
              {goal.shortDescription ?? goal.description}
          </S.Description>

          {goal.tags?.length ? <TagsWrapper tags={goal.tags} /> : null}
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
          <Tags tags={tags} />
      </S.TagsWrapper>
  )
}
