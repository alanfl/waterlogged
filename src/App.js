import './App.css';
import React from 'react';
import { useReducer } from 'react'
import { MainMenu } from './MainMenu.js'
import { InitialState, Context, Reducer } from './Context.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Bottle from './Bottle.js'
import Log from './Log.js'
import MainInteract from './MainInteract';

function App(prop) {
  const [state, dispatch] = useReducer(Reducer, InitialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      <div className="App">

        <Router>
          <MainMenu />
          <Switch>
            <Route exact path="/"><Bottle /><MainInteract /></Route>
            <Route exact path="/log"><Log /></Route>
          </Switch>
        </Router>     
        
      </div>
    </Context.Provider>
  );
}

export default App;
