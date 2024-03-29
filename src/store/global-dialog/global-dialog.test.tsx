import { useContext } from 'react'

import { render, screen } from '@testing-library/react'

import { context, initialState } from './index'
import { type ContextType } from './types'

function ComponentToTest (): JSX.Element {
  const globalDialog = useContext(context)
  return (globalDialog.state.Component)
}

const renderContext = (currentContext: ContextType): any =>
  render(
      <context.Provider value={currentContext}>
          <ComponentToTest />
      </context.Provider>
  )

describe('Store > Global Dialog', () => {
  test('initial with dialog closed', () => {
    const newContext: ContextType = {
      dispatch: () => {},
      state: initialState
    }

    renderContext(newContext)
    expect(screen.queryByText('Dialog opened')).not.toBeInTheDocument()
  })

  test('dialog opened', () => {
    const newContext: ContextType = {
      dispatch: () => {},
      state: {
      // eslint-disable-next-line
        Component: <>Dialog opened</>,
        isOpen: true
      }
    }

    renderContext(newContext)
    expect(screen.getByText('Dialog opened')).toBeInTheDocument()
  })
})
