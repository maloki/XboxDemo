import React from 'react'
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router'
import Main from './src/page/index.js'
export const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Main}/>
      </Route>
    </Router>
  )
}
