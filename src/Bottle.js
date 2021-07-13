import './Bottle.css';
import { useContext } from 'react'
import { Context } from './Context.js'

function Bottle(prop) {
    let [state, dispatch] = useContext(Context)

    return (
      <div className='Bottle'>
        <span
          class="refill material-icons"
          onClick ={ (event) => {
            dispatch({ 
              type: 'waterLevelUpdate', 
              payload: {
                val: "100" 
              }
            });
            dispatch({
              type: 'log',
            });
          }
        }>
          Refill Bottle
        </span>
        <br />
        <input
          type='range' class="Slider"
          id='water-level'
          orient='vertical'
          min={state.bottles[state.currentBottle].min}
          max={state.bottles[state.currentBottle].max}
          value={state.bottles[state.currentBottle].waterLevel}
          onChange = { (event) => {
            dispatch({
              type: 'waterLevelUpdate',
              payload: {
                val: event.target.value
              }
            })
          }}
        />
        <br />
        <label 
          for="water-level"
        >
          {state.bottles[state.currentBottle].waterLevel}
        </label>
      </div>
    );
}

export default Bottle