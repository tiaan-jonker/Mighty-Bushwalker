/**
 * @jest-environment jsdom
 */

import React from 'react'
import { screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

import { renderWithRedux } from '../test-utils'
// import { getIsAuthenticated, getLogoutFn } from '../auth0-utils'
import Nav from './Nav'

jest.mock('../auth0-utils')

describe('<Nav />', () => {
  it('Renders Profile, My Tracks, Explore text', () => {
    renderWithRedux(<Nav />)
    screen.debug()
    const profileText = screen.getByText('Profile')
    expect(profileText.textContent).toBe('Profile')
    const tracksText = screen.getByText(/Tracks/)
    expect(tracksText.textContent).toBe('My Tracks')
    const exploreText = screen.getByText('Explore')
    expect(exploreText.textContent).toBe('Explore')
  })
})
it('logo renders good', () => {
  renderWithRedux(<Nav xmlns="http://www.w3.org/2000/svg" />)
  const navImage1 = screen.getByAltText(/Profile/i)
  expect(navImage1.xmlns).toContain('http://www.w3.org/2000/svg')
})
