import './App.css';
import './MainMenu.css'
import React from 'react';
import { useReducer } from 'react'
import { MainMenu } from './MainMenu.js'
import { InitialState, Context, Reducer } from './Context.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Bottle from './Bottle.js'
import Log from './Log.js'

function App(prop) {
  const [state, dispatch] = useReducer(Reducer, InitialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      <div className="App">

        <Router>
          <MainMenu />
          <Switch>
            <Route exact path="/"><Bottle /></Route>
            <Route path="/log"><Log /></Route>
          </Switch>
        </Router>     
        <br />
        <br />  
      </div>
    </Context.Provider>
  );
}

export default App;
