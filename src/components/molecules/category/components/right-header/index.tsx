import type { ReactNode } from 'react'

import { ChevronDown as ChevronDownSvg } from '@/assets/svg/chevron-down'
import { ChevronUp as ChevronUpSvg } from '@/assets/svg/chevron-up'

import type { RightHeaderProps } from './types'

export function RightHeader({
  isExpanded,
}: RightHeaderProps): ReactNode {
  if (isExpanded) return <ChevronUpSvg title="Collapse category" />
  return <ChevronDownSvg title="Expand category" />
}
