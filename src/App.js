import React from 'react';
import logo from './assets/images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Bottle>
      </Bottle>
    </div>
  );
}

function Bottle(prop) {
  let currentWaterLevel = 0;

  return (
    <div className='Bottle'>
      <label
        for='water-level'
      >
        Current Water Level {currentWaterLevel}
      </label>
      <input
        type='range'
        id='water-level'
        orient='vertical'
        min='0'
        max='100'
      />
      <input
        type='button'
        id='water-level-button'
        value='log'
      />
    </div>
  );
}

function DropdownMenu(prop) {

}

export default App;
