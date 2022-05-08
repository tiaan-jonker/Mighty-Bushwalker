import React from 'react'
import { screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

import { renderWithRedux } from '../test-utils'
// import { getIsAuthenticated, getLogoutFn } from '../auth0-utils'
import Landing from './Landing'

jest.mock('../auth0-utils')

describe('<Landing />', () => {
  it('Renders a login option if not authenticated', () => {
    console.log('hi')
    renderWithRedux(<Landing />)
    screen.debug()
  })
})
