/**
 * @jest-environment jsdom
 */

import React from 'react'
import { screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

import { renderWithRedux } from '../test-utils'
// import { getIsAuthenticated, getLogoutFn } from '../auth0-utils'
import Landing from './Landing'

jest.mock('../auth0-utils')

describe('<Landing />', () => {
  it('Renders a login option if not authenticated', () => {
    renderWithRedux(<Landing />)
    // screen.debug()
    const headerName = screen.getByRole('heading')
    expect(headerName.textContent).toBe('BUSHWALK')
    const buttonName = screen.getByText('Log In')
    expect(buttonName.textContent).toBe('Log In')
  })
})
it('logo renders good', () => {
  renderWithRedux(
    <Landing src="https://res.cloudinary.com/dt7wm4h23/image/upload/v1651913955/Group_2_u0xxru.svg" />
  )
  const logoImage = screen.getByAltText(/Mighty/i)
  expect(logoImage.src).toContain(
    'https://res.cloudinary.com/dt7wm4h23/image/upload/v1651913955/Group_2_u0xxru.svg'
  )
})
