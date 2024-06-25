import { type Palette } from './Palette'

export interface Theme {
  breakpoints: Breakpoints
  devices: Devices
  palette: Palette
}

export type ThemeOverride = Partial<Theme>

export interface Breakpoints {
  mobile: number
  laptop: number
}

export interface Devices {
  mobileMin: string
  laptopMax: string
  laptopMin: string
}
