import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import StandList from '../stands/StandList';
import Home from '../home/Home';
import Header from '../header/Header';
import CharacterDetails from '../characters/CharacterDetails';
import StandDetails from '../stands/StandDetails';
import CharacterForm from '../forms/CharacterForm';
import CharacterEdit from '../forms/CharacterEdit';
import StandForm from '../forms/StandForm';
import StandEdit from '../forms/StandEdit';

export default function App() {
  return (
    <>
      <Header/> 
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/characters" component={CharacterList}/>
        <Route exact path="/characters/add" component={CharacterForm}/>
        <Route exact path="/characters/edit/:id" component={CharacterEdit}/>
        <Route exact path="/characters/:id" component={CharacterDetails}/>
        <Route exact path="/stands" component={StandList}/>
        <Route exact path="/stands/add" component={StandForm}/>
        <Route exact path="/stands/edit/:id" component={StandEdit}/>
        <Route exact path="/stands/:id" component={StandDetails}/>
      </Switch>
    </>
  );
}
