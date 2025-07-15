import type { PartialTheme } from '@/types/app/Theme'
import type { Translation } from '@/types/app/Translation'
import type { Milestone } from '@/types/model/Milestone'
import type { RoadmapMilestones } from '@/types/model/RoadmapMilestones'

export interface LogicProps {
  readonly className?: string
  readonly milestones: Milestone[]
  readonly translation: Translation
}

export interface RenderProps {
  readonly areThereMilestonesFinished: boolean
  readonly className?: string
  readonly milestones: Milestone[]
}

export interface RoadmapMilestonesProps {
  readonly className?: string
  readonly roadmapMilestonesData?: RoadmapMilestones
  readonly theme?: PartialTheme
  readonly translation?: Translation
}
