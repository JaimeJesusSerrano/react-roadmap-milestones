import React, { useContext } from 'react'

import { render, screen } from '@testing-library/react'

import { context, initialState } from './index'
import { ContextType } from './types'

const ComponentToTest = () => {
  const globalDialog = useContext(context)
  return <>{globalDialog.state.Component}</>
}

const renderContext = (currentContext: ContextType) =>
  render(
    <context.Provider value={currentContext}>
      <ComponentToTest />
    </context.Provider>,
  )

describe('Store > Global Dialog', () => {
  test('initial with dialog closed', () => {
    const newContext: ContextType = {
      // eslint-disable-next-line
      dispatch: () => {},
      state: initialState,
    }

    renderContext(newContext)
    expect(screen.queryByText('Dialog opened')).not.toBeInTheDocument()
  })

  test('dialog opened', () => {
    const newContext: ContextType = {
      // eslint-disable-next-line
      dispatch: () => {},
      state: {
        Component: <>Dialog opened</>,
        isOpen: true,
      },
    }

    renderContext(newContext)
    expect(screen.getByText('Dialog opened')).toBeInTheDocument()
  })
})
