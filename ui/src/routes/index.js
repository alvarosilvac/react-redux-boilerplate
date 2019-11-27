import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage, TestView } from '../containers/Views';

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/test' component={TestView} />
    </Switch>
  )
}

export default Routes;