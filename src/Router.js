import React from 'react';
import { Switch, Route } from 'react-router';
import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

export default function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
    </Switch>
  )
};