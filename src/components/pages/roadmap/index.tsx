import React from 'react'
import { useParams } from 'react-router-dom'

import MainTemplate from 'components/templates/main'

interface ParamTypes {
  id: string
}

const Roadmap = (): JSX.Element => {
  const { id } = useParams<ParamTypes>()
  return <MainTemplate>Roadmap {id}</MainTemplate>
}

export default Roadmap
