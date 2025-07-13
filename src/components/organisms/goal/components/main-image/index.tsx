import type { ReactNode } from 'react'

import type { MainImageProps } from './index.types'

export function MainImage({ imageSrc }: MainImageProps): ReactNode {
  return <img alt="Goal" loading="lazy" src={imageSrc} />
}
