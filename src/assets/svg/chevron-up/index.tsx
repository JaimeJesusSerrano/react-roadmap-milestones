import SvgBase from 'assets/svg/SvgBase'

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
          <polyline points="18 15 12 9 6 15" />
      </SvgBase>
  )
}

export default Svg
