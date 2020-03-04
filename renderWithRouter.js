import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'

function renderWithRouter(
  ComponentToRender,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(
      <Router history={history}>
        <Switch>
          <Route path="/test" component={ComponentToRender} />
          <Redirect to="/test" />
        </Switch>
      </Router>
    ),
    getPathName: () => history.location.pathname.replace('/test', ''),
  }
}

export default renderWithRouter
