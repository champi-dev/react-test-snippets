import { fireEvent } from '@testing-library/react'
import renderWithRouter from './renderWithRouter'
import Component from 'path/to/component'

describe('Component', () => {
  describe('navigation', () => {
    it('changes route to create', () => {
      const { getPathName, getByTestId } = renderWithRouter(Component)

      fireEvent.click(getByTestId("test-create-navbutton"))
      expect(getPathName()).toBe('/create')
      expect(getByTestId("test-create")).toBeTruthy()
    })

    it('changes route to list', () => {
      const { getPathName, getByTestId } = renderWithRouter(Component)

      fireEvent.click(getByTestId("test-list-navbutton"))
      expect(getPathName()).toBe('')
      expect(getByTestId("test-list")).toBeTruthy()
    })
  })
})
