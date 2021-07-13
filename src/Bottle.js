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
        <input
          type='range' class="Slider"
          id='water-level'
          orient='vertical'
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
      </div>
    );
}

export default Bottle