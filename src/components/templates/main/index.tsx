import React from 'react'

import HeaderBar from 'components/organisms/header-bar'

interface MainProps {
  children: React.ReactNode
}

const Main = ({ children }: MainProps): JSX.Element => {
  return (
    <>
      <div>
        <HeaderBar />
      </div>
      <div>{children}</div>
    </>
  )
}

export default Main
