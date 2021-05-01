import React from 'react'

import HeaderBar from 'components/organisms/header-bar'

import { SWrapper } from './styles'

interface MainProps {
  children: React.ReactNode
}

const Main = ({ children }: MainProps): JSX.Element => {
  return (
    <SWrapper>
      <HeaderBar />
      {children}
    </SWrapper>
  )
}

export default Main
