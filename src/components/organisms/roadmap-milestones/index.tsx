import { type FunctionComponent } from 'react'

import { ThemeProvider } from 'styled-components'

import type IRoadmapMilestones from '../../../types/model/RoadmapMilestones'
import type { Theme as ITheme, ThemeOverride as IThemeOverride } from '../../../types/app/Theme'
import type { Translation as ITranslation } from '../../../types/app/Translation'
import GlobalDialog from '../global-dialog'
import defaultTheme from '../../../config/defaultTheme'
import defaultTranslation from '../../../config/defaultTranslation'
import GlobalStyle from '../../../config/globalStyle'
import GlobalDialogProvider from '../../../store/global-dialog/Provider'
import GlobalSettingsProvider from '../../../store/global-settings/Provider'

import Logic from './logic'

interface ParamTypes {
  roadmapMilestonesData?: IRoadmapMilestones
  theme?: IThemeOverride
  translation?: ITranslation
}

const RoadmapMilestones: FunctionComponent<ParamTypes> = ({
  roadmapMilestonesData,
  theme: themeOverride,
  translation
}) => {
  if (!roadmapMilestonesData?.milestones) {
    return null
  }

  const theme: ITheme = {
    breakpoints: themeOverride?.breakpoints || defaultTheme.breakpoints,
    devices: themeOverride?.devices || defaultTheme.devices,
    palette: themeOverride?.palette || defaultTheme.palette
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
