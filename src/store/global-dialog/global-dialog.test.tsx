import React, { useContext } from 'react'

import { render, screen } from '@testing-library/react'

import { context, initialState } from './index'
import { ContextType } from './types'

const ComponentToTest = () => {
  const globalDialog = useContext(context)
  return <>{globalDialog.state.Component}</>
}

const renderContext = (currentContext: ContextType) => {
  return render(
    <context.Provider value={currentContext}>
      <ComponentToTest />
    </context.Provider>
  )
}

describe('Store > Global Dialog', () => {
  test('initial with dialog closed', () => {
    const context: ContextType = {
      // eslint-disable-next-line
      dispatch: () => {},
      state: initialState,
    }

    renderContext(context)
    expect(screen.queryByText('Dialog openned')).not.toBeInTheDocument()
  })

  test('dialog openned', () => {
    const context: ContextType = {
      // eslint-disable-next-line
      dispatch: () => {},
      state: {
        Component: <>Dialog openned</>,
        isOpen: true,
      },
    }

    renderContext(context)
    expect(screen.getByText('Dialog openned')).toBeInTheDocument()
  })
})
