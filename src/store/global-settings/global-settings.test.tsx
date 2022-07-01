import React, { useContext } from 'react'

import { render, screen } from '@testing-library/react'

import { context, initialState } from './index'
import { ContextType } from './types'

const ComponentToTest = () => {
  const globalDialog = useContext(context)
  return <>{globalDialog.state.showMilestonesFinished ? 'Show previuous milestones' : 'Hide previous milestones'}</>
}

const renderContext = (currentContext: ContextType) => {
  return render(
    <context.Provider value={currentContext}>
      <ComponentToTest />
    </context.Provider>
  )
}

describe('Store > Global settings', () => {
  test('initial state', () => {
    const context: ContextType = {
      // eslint-disable-next-line
      dispatch: () => {},
      state: initialState,
    }

    renderContext(context)
    expect(screen.queryByText('Hide previous milestones')).toBeInTheDocument()
  })

  test('state updated', () => {
    const context: ContextType = {
      // eslint-disable-next-line
      dispatch: () => {},
      state: {
        showMilestonesFinished: true,
      },
    }

    renderContext(context)
    expect(screen.getByText('Show previuous milestones')).toBeInTheDocument()
  })
})
