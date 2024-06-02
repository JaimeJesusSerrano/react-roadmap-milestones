import { type ReactNode } from 'react'

import { Subtract as SubtractSvg } from 'assets/svg/subtract'
import { Plus as PlusSvg} from 'assets/svg/plus'

interface Props {
  readonly isExpanded: boolean
}

export function ExpandIconWrapper ({ isExpanded }: Props): ReactNode {
  if (isExpanded) return <SubtractSvg title="Collapse milestone" />
  return <PlusSvg title="Expand milestone" />
}
