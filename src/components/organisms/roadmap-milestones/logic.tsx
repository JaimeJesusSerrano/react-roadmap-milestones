import { type ReactNode, useContext, useEffect, useMemo } from 'react'

import { context as globalSettingsContext } from '@/store/global-settings'
import * as GlobalSettingsActions from '@/store/global-settings/actions'
import type { Translation as ITranslation } from '@/types/app/Translation'
import type { Milestone as IMilestone } from '@/types/model/Milestone'

import { Render } from './render'

interface Props {
  readonly className?: string
  readonly milestones: IMilestone[]
  readonly translation: ITranslation
}

export function Logic({
  className,
  milestones,
  translation,
}: Props): ReactNode {
  const globalSettings = useContext(globalSettingsContext)
  const { dispatch: dispatchGlobalSettings } = globalSettings

  const milestonesToShow = useMemo(() => {
    if (!milestones) return []

    if (globalSettings.state.showMilestonesFinished) {
      return milestones
    }

    return milestones.filter((milestone) => !milestone.finishDate)
  }, [milestones, globalSettings.state.showMilestonesFinished])

  const areThereMilestonesFinished = useMemo(() => {
    if (!milestones) return false

    return !!milestones.filter((milestone) => milestone.finishDate).length
  }, [milestones])

  useEffect(() => {
    dispatchGlobalSettings(GlobalSettingsActions.setTranslation(translation))
  }, [translation])

  if (!milestonesToShow?.length) {
    return null
  }

  return (
    <Render
      areThereMilestonesFinished={areThereMilestonesFinished}
      className={className}
      milestones={milestonesToShow}
    />
  )
}
