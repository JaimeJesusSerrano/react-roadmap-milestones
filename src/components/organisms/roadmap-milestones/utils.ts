import { defaultTheme } from '@/config/defaultTheme'
import type {
  Theme as ITheme,
  PartialTheme as IPartialTheme,
} from '@/types/app/Theme'

export function mergeThemeWithDefault(partialTheme?: IPartialTheme): ITheme {
  return {
    breakpoints: partialTheme?.breakpoints ?? defaultTheme.breakpoints,
    devices: partialTheme?.devices ?? defaultTheme.devices,
    palette: partialTheme?.palette ?? defaultTheme.palette,
  }
}
