import './Bottle.css';
import { useContext } from 'react'
import { Context } from './Context.js'

function Bottle(prop) {
    let [state, dispatch] = useContext(Context)

    let currentBottle = state.bottles[state.currentBottle]

    return (
      <div className='Bottle'>
        <span
          className="refill material-icons"
          onClick ={ (event) => {
            dispatch({ 
              type: 'waterLevelUpdate', 
              payload: {
                val: currentBottle.max 
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
          type='range' className="Slider"
          id='water-level'
          orient='vertical'
          min="0"
          max={currentBottle.max}
          value={currentBottle.waterLevel}
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
          htmlFor="water-level"
        >
          {currentBottle.waterLevel}
        </label>
      </div>
    );
}

export default Bottle