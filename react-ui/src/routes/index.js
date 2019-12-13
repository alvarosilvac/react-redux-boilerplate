import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Homepage, TestView, NotFound } from '../containers/Views';

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/test' component={TestView} />
      <Route path='/redirect' render={() => (
        <Redirect to={Homepage} />
      )} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes;