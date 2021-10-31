import React from 'react'

interface ParamTypes {
  title?: string
}

const Svg = ({ title }: ParamTypes): JSX.Element => (
  <svg width='16' height='2' viewBox='0 0 16 2' xmlns='http://www.w3.org/2000/svg'>
    {title && <title>{title}</title>}
    <path
      d='M16 0.999973C16 0.508938 15.6291 0.111084 15.1714 0.111084H0.82857C0.371428 0.111084 0 0.508938 0 0.999973C0 1.49101 0.371428 1.88886 0.82857 1.88886H15.1714C15.6291 1.88886 16 1.49101 16 0.999973Z'
      fill='currentColor'
    ></path>
  </svg>
)

export default Svg
