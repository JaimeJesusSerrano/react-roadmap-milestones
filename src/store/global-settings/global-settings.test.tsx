import { useContext } from 'react'

import { render, screen } from '@testing-library/react'

import { defaultTranslation } from 'config/defaultTranslation'

import { context, initialState } from './index'
import { type ContextType } from './types'

function ComponentToTest(): string {
  const globalDialog = useContext(context)
  return globalDialog.state.showMilestonesFinished
    ? 'Show previous milestones'
    : 'Hide previous milestones'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderContext = (currentContext: ContextType): any =>
  render(
    <context.Provider value={currentContext}>
      <ComponentToTest />
    </context.Provider>,
  )

describe('Store > Global settings', () => {
  test('initial state', () => {
    const newContext: ContextType = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      dispatch: () => {},
      state: initialState,
    }

    renderContext(newContext)
    expect(screen.getByText('Hide previous milestones')).toBeInTheDocument()
  })

  test('state updated', () => {
    const newContext: ContextType = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      dispatch: () => {},
      state: {
        showMilestonesFinished: true,
        translation: defaultTranslation,
      },
    }

    renderContext(newContext)
    expect(screen.getByText('Show previous milestones')).toBeInTheDocument()
  })
})
