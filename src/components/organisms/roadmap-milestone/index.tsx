import React from 'react'

import { ThemeProvider } from 'styled-components'

import GlobalDialog from 'components/organisms/global-dialog'
import defaultTheme from 'config/defaultTheme'
import defaultTranslation from 'config/defaultTranslation'
import GlobalStyle from 'config/globalStyle'
import GlobalDialogProvider from 'store/global-dialog/Provider'
import GlobalSettingsProvider from 'store/global-settings/Provider'
import RoadmapMilestoneType from 'types/api/RoadmapMilestone'
import { Theme, ThemeOverride } from 'types/Theme'
import { Translation } from 'types/Translation'

import Logic from './logic'

interface ParamTypes {
  roadmapMilestoneData?: RoadmapMilestoneType
  theme?: ThemeOverride
  translation?: Translation
}

const RoadmapMilestone = ({ roadmapMilestoneData, theme: themeOverride, translation }: ParamTypes): JSX.Element => {
  if (!roadmapMilestoneData || !roadmapMilestoneData.milestones) {
    return <></>
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
          <Logic milestones={roadmapMilestoneData.milestones} translation={translation || defaultTranslation} />
        </GlobalDialogProvider>
      </GlobalSettingsProvider>
    </ThemeProvider>
  )
}

export default RoadmapMilestone
