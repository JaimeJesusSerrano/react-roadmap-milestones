import React from 'react'

import { ThemeProvider } from 'styled-components'

import GlobalDialog from '../global-dialog'
import defaultTheme from '../../../config/defaultTheme'
import defaultTranslation from '../../../config/defaultTranslation'
import GlobalStyle from '../../../config/globalStyle'
import GlobalDialogProvider from '../../../store/global-dialog/Provider'
import GlobalSettingsProvider from '../../../store/global-settings/Provider'
import RoadmapMilestonesType from '../../../types/model/RoadmapMilestones'
import { Theme, ThemeOverride } from '../../../types/Theme'
import { Translation } from '../../../types/Translation'

import Logic from './logic'

interface ParamTypes {
  roadmapMilestonesData?: RoadmapMilestonesType
  theme?: ThemeOverride
  translation?: Translation
}

const RoadmapMilestones: React.FunctionComponent<ParamTypes> = ({
  roadmapMilestonesData,
  theme: themeOverride,
  translation,
}) => {
  if (!roadmapMilestonesData || !roadmapMilestonesData.milestones) {
    return null
  }

  const theme: Theme = {
    breakpoints: themeOverride?.breakpoints || defaultTheme.breakpoints,
    devices: themeOverride?.devices || defaultTheme.devices,
    palette: themeOverride?.palette || defaultTheme.palette,
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalSettingsProvider>
        <GlobalDialogProvider>
          <GlobalDialog />
          <Logic
            milestones={roadmapMilestonesData.milestones}
            translation={translation || defaultTranslation}
          />
        </GlobalDialogProvider>
      </GlobalSettingsProvider>
    </ThemeProvider>
  )
}

export { RoadmapMilestones }
export default RoadmapMilestones
