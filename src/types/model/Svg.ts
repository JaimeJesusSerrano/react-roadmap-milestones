import type { ComponentProps, ReactNode } from 'react'

export interface Svg extends ComponentProps<'svg'> {
  readonly children?: ReactNode
  readonly title?: string
}
