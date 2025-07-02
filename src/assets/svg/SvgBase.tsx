import type { ReactNode } from 'react'

import type { Svg } from '@/types/model/Svg'

import { Title } from './Title'

export function SvgBase({ children, title = '', ...props }: Svg): ReactNode {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Title title={title} />

      {children}
    </svg>
  )
}
