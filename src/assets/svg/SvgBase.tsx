import { type ReactNode } from 'react'

import { Title } from './Title'

interface Props {
  readonly children?: ReactNode
  readonly title?: string
}

export function SvgBase ({ children, title = '', ...props }: Props): ReactNode {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1991/xlink"
      {...props}
    >
      <Title title={title} />

      {children}
    </svg>
  )
}
