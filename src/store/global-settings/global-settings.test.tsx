import { useContext } from 'react'

import { render, screen } from '@testing-library/react'

import defaultTranslation from '../../config/defaultTranslation'

import { context, initialState } from './index'
import { ContextType } from './types'

const ComponentToTest = () => {
  const globalDialog = useContext(context)
  return (
    <>
      {globalDialog.state.showMilestonesFinished
        ? 'Show previous milestones'
        : 'Hide previous milestones'}
    </>
  )
}

const renderContext = (currentContext: ContextType) =>
  render(
    <context.Provider value={currentContext}>
      <ComponentToTest />
    </context.Provider>,
  )

describe('Store > Global settings', () => {
  test('initial state', () => {
    const newContext: ContextType = {
      // eslint-disable-next-line
      dispatch: () => {},
      state: initialState,
    }

    renderContext(newContext)
    expect(screen.queryByText('Hide previous milestones')).toBeInTheDocument()
  })

  test('state updated', () => {
    const newContext: ContextType = {
      // eslint-disable-next-line
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
