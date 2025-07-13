import { type ReactNode, useContext, useEffect, useMemo } from 'react'

import { context as globalSettingsContext } from '@/store/global-settings'
import * as GlobalSettingsActions from '@/store/global-settings/actions'

import type { Props } from './index.types'
import { Render } from './render'

export function Logic({
  className,
  milestones,
  translation,
}: Props): ReactNode {
  const globalSettings = useContext(globalSettingsContext)
  const { dispatch: dispatchGlobalSettings } = globalSettings

  const milestonesToShow = useMemo(() => {
    if (milestones.length === 0) return []

    if (globalSettings.state.showMilestonesFinished) {
      return milestones
    }

    return milestones.filter((milestone) => milestone.finishDate === undefined)
  }, [milestones, globalSettings.state.showMilestonesFinished])

  const areThereMilestonesFinished = useMemo(() => {
    if (milestones.length === 0) return false

    return milestones.filter((milestone) => milestone.finishDate !== undefined).length > 0
  }, [milestones])

  useEffect(() => {
    dispatchGlobalSettings(GlobalSettingsActions.setTranslation(translation))
  }, [translation])

  if (milestonesToShow.length === 0) {
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
