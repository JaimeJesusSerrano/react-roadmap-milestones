import { type ReactNode } from 'react'

import Milestone from 'components/molecules/milestone'
import type IMilestone from 'types/model/Milestone'

import ShowPrevious from './components/show-previous'
import * as S from './styled'

interface Props {
  readonly areThereMilestonesFinished: boolean
  readonly milestones: IMilestone[]
}

function Render ({ areThereMilestonesFinished, milestones }: Props): ReactNode {
  return (
      <S.Wrapper>
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

export default Render
