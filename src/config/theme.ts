import palette from 'assets/palette'

const breakpoints = {
  mobile: 0,
  laptop: 900,
}

const devices = {
  mobileMin: `(min-width: ${breakpoints.mobile}px)`,
  laptopMax: `(max-width: ${breakpoints.laptop}px)`,
  laptopMin: `(min-width: ${breakpoints.laptop}px)`,
}

const theme = { breakpoints, devices, palette }

export type ThemeType = typeof theme
export default theme
