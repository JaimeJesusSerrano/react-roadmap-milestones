import type { Translation as ITranslation } from '@/types/app/Translation'
import type { Milestone as IMilestone } from '@/types/model/Milestone'

export interface Props {
  readonly className?: string
  readonly milestones: IMilestone[]
  readonly translation: ITranslation
}
