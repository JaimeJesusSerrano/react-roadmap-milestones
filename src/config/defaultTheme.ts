import { type Devices, type Theme } from 'types/app/Theme'

import breakpoints from './defaultBreakpoints'
import palette from './defaultPalette'

const devices: Devices = {
  mobileMin: `(min-width: ${breakpoints.mobile}px)`,
  laptopMax: `(max-width: ${breakpoints.laptop}px)`,
  laptopMin: `(min-width: ${breakpoints.laptop}px)`
}

const theme: Theme = { breakpoints, devices, palette }

export default theme
