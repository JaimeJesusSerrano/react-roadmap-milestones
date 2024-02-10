import SvgBase from '../SvgBase'

function Svg (props: any): JSX.Element {
  return (
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
}

export default Svg
