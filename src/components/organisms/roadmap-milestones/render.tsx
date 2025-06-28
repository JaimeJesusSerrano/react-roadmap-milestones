import type { ReactNode } from 'react'

import { Milestone } from '@/components/molecules/milestone'
import type { Milestone as IMilestone } from '@/types/model/Milestone'

import { ShowPrevious } from './components/show-previous'
import * as S from './styled'

interface Props {
  readonly areThereMilestonesFinished: boolean
  readonly className?: string
  readonly milestones: IMilestone[]
}

export function Render({ areThereMilestonesFinished, className, milestones }: Props): ReactNode {
  return (
    <S.Wrapper className={className ?? ''}>
      {areThereMilestonesFinished
        ? (
            <div style={{ marginRight: 12 }}>
              <ShowPrevious />
            </div>
          )
        : (
            null
          )}

      {milestones.map(milestone => (
        <S.MilestoneWrapper key={milestone.name}>
          <Milestone
            isExpanded={!milestone.finishDate}
            milestone={milestone}
          />
        </S.MilestoneWrapper>
      ))}
    </S.Wrapper>
  )
}
