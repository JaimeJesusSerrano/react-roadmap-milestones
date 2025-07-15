import type { ReactNode } from 'react'

import { Subtract as SubtractSvg } from '@/assets/svg/subtract'
import { Plus as PlusSvg } from '@/assets/svg/plus'

import type { ExpandIconProps } from './types'

export function ExpandIcon({ isExpanded }: ExpandIconProps): ReactNode {
  if (isExpanded) return <SubtractSvg title="Collapse milestone" />
  return <PlusSvg title="Expand milestone" />
}
