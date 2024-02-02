interface Props {
  readonly children?: React.ReactNode
  readonly title?: string
}

function SvgBase ({ children, title = '', ...props }: Props): JSX.Element {
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

function Title ({ title }: { readonly title: string }): JSX.Element | null {
  if (!title) return null

  return (
      <title>
          {title}
      </title>
  )
}

export default SvgBase
