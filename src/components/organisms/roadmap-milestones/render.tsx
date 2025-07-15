import type { ReactNode } from 'react'

import { Milestone } from '@/components/molecules/milestone'

import { ShowPrevious } from './components/show-previous'
import * as S from './styled'
import type { RenderProps } from './types'

export function Render({
  areThereMilestonesFinished,
  className,
  milestones,
}: RenderProps): ReactNode {
  return (
    <S.Wrapper className={className ?? ''}>
      {areThereMilestonesFinished ? (
        <div style={{ marginRight: 12 }}>
          <ShowPrevious />
        </div>
      ) : null}

      {milestones.map((milestone) => (
        <S.MilestoneWrapper key={milestone.name}>
          <Milestone
            isExpanded={milestone.finishDate === undefined}
            milestone={milestone}
          />
        </S.MilestoneWrapper>
      ))}
    </S.Wrapper>
  )
}
