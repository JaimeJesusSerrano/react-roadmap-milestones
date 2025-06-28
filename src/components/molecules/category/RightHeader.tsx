import type { ReactNode } from 'react'

import { ChevronDown as ChevronDownSvg } from '@/assets/svg/chevron-down'
import { ChevronUp as ChevronUpSvg } from '@/assets/svg/chevron-up'

export function RightHeader({ isExpanded }: { readonly isExpanded: boolean }): ReactNode {
  if (isExpanded) return <ChevronUpSvg title="Collapse category" />
  return <ChevronDownSvg title="Expand category" />
}
