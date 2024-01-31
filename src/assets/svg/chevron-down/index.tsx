import SvgBase from '../SvgBase'

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any */
const Svg = (props: any): JSX.Element => (
  <SvgBase
    fill="none"
    height="20px"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="20px"
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </SvgBase>
)

export default Svg
