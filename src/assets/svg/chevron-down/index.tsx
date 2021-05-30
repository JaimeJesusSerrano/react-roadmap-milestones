import React from 'react'

import * as S from 'assets/svg/styled'

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any*/
const Svg = (props: any): JSX.Element => (
  <S.SvgBase
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
  >
    {props.title && <title>{props.title}</title>}
    <polyline points='6 9 12 15 18 9'></polyline>
  </S.SvgBase>
)

export default Svg
