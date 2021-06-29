import React from 'react';
import {cloneDeep} from 'lodash'
import './App.css';

let initialState = {
  bottles: [50],
  currentBottle: 0
}

const Context = React.createContext(initialState)

function Reducer(state, action) {
  let new_state = cloneDeep(state)

  new_state.bottles[action.payload.idx] = action.payload.val

  return new_state
}

function App(prop) {
  let [state, dispatch] = React.useReducer(Reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      <div className="App">
        <BottleContainer />
        {
          state.bottles.map((val, idx) => 
            <Bottle key={idx} idx={idx} />
          )
        }
      </div>
    </Context.Provider>
  );
}

function BottleContainer(prop) {
  let [state, dispatch] = React.useContext(Context)

  return (
    <div>
      Current Water Level: {state.bottles[state.currentBottle]}
    </div>
  )
} 

function Bottle(prop) {
  let [state, dispatch] = React.useContext(Context)

  return (
    <div className='Bottle'
      onChange = { (event) =>
        dispatch({
          type: 'waterLevelUpdate',
          payload: {
            idx: prop.idx,
            val: event.target.value
          }
        })
      }
    >
      <input
        type='range'
        id='water-level'
        orient='vertical'
        value={state.bottles[prop.idx]}
      />
      <input
        type='button'
        id='water-level-button'
        value='log'
      />
    </div>
  );
}

export default App;
