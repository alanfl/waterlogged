// import './Bottle.css';
import { useContext } from 'react'
import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min';
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
                val: 100 
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
              payload: event.target.value
            })
          }}
        />
        <input
          type='button'
          id='water-level-button'
          value='log'
          onClick = { (event) => {
            dispatch({
              type: 'log'
            })
          }}
        />
      </div>
    );
}

export default Bottle