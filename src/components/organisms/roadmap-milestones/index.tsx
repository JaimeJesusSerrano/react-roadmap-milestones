import { useMemo, type ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { GlobalDialog } from '@/components/organisms/global-dialog'
import { defaultTranslation } from '@/config/defaultTranslation'
import { GlobalStyle } from '@/config/globalStyle'
import { Provider as GlobalDialogProvider } from '@/store/global-dialog/Provider'
import { Provider as GlobalSettingsProvider } from '@/store/global-settings/Provider'

import { Logic } from './logic'
import type { RoadmapMilestonesProps } from './types'
import { mergeThemeWithDefault } from './utils'

export function RoadmapMilestones({
  className,
  roadmapMilestonesData,
  theme: partialTheme,
  translation,
}: RoadmapMilestonesProps): ReactNode {
  if (roadmapMilestonesData?.milestones === undefined) {
    throw new Error('RoadmapMilestones: roadmapMilestonesData is required.')
  }

  if (roadmapMilestonesData.milestones.length === 0) {
    return null
  }

  const translationToUse = translation ?? defaultTranslation
  const themeToUse = useMemo(
    () => mergeThemeWithDefault(partialTheme),
    [partialTheme],
  )

  return (
    <EmotionThemeProvider theme={themeToUse}>
      <GlobalStyle theme={themeToUse} />
      <GlobalSettingsProvider>
        <GlobalDialogProvider>
          <GlobalDialog className={className} />
          <Logic
            className={className}
            milestones={roadmapMilestonesData.milestones}
            translation={translationToUse}
          />
        </GlobalDialogProvider>
      </GlobalSettingsProvider>
    </EmotionThemeProvider>
  )
}
