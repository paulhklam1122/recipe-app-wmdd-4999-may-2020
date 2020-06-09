import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from '../../App'
import RecipeContainer from '../containers/RecipeContainer'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/recipe/:id' component={RecipeContainer} />
    </Switch>
  </BrowserRouter>
)

export default Router
