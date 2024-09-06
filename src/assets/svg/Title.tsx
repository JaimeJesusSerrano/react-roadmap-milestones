import { type ReactNode } from 'react'

interface Props {
  readonly title: string
}

export function Title({ title }: Props): ReactNode {
  if (!title) return null

  return (
    <title>
      {title}
    </title>
  )
}
