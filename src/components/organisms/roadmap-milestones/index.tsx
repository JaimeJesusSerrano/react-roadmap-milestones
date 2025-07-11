import type { ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { GlobalDialog } from '@/components/organisms/global-dialog'
import { defaultTheme } from '@/config/defaultTheme'
import { defaultTranslation } from '@/config/defaultTranslation'
import { GlobalStyle } from '@/config/globalStyle'
import { Provider as GlobalDialogProvider } from '@/store/global-dialog/Provider'
import { Provider as GlobalSettingsProvider } from '@/store/global-settings/Provider'
import type { RoadmapMilestones as IRoadmapMilestones } from '@/types/model/RoadmapMilestones'
import type { Theme as ITheme, PartialTheme as IPartialTheme } from '@/types/app/Theme'
import type { Translation as ITranslation } from '@/types/app/Translation'

import { Logic } from './logic'

interface Params {
  readonly className?: string
  readonly roadmapMilestonesData?: IRoadmapMilestones
  readonly theme?: IPartialTheme
  readonly translation?: ITranslation
}

export function RoadmapMilestones({
  className,
  roadmapMilestonesData,
  theme: partialTheme,
  translation,
}: Params): ReactNode {
  if (!roadmapMilestonesData?.milestones) {
    return null
  }

  const theme: ITheme = {
    breakpoints: partialTheme?.breakpoints ?? defaultTheme.breakpoints,
    devices: partialTheme?.devices ?? defaultTheme.devices,
    palette: partialTheme?.palette ?? defaultTheme.palette,
  }

  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <GlobalSettingsProvider>
        <GlobalDialogProvider>
          <GlobalDialog className={className} />
          <Logic
            className={className}
            milestones={roadmapMilestonesData.milestones}
            translation={translation ?? defaultTranslation}
          />
        </GlobalDialogProvider>
      </GlobalSettingsProvider>
    </EmotionThemeProvider>
  )
}
