import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </>
  );
}
