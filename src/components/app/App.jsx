import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import StandList from '../stands/StandList';
import Home from '../home/Home';

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/characters" component={CharacterList}/>
        <Route exact path="/stands" component={StandList}/>
      </Switch>
    </>
  );
}
