// import './Bottle.css';
import { useContext } from 'react'
import { Context } from './Context.js'

function Bottle(prop) {
    let [state, dispatch] = useContext(Context)

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
          type='range' class="Slider"
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

export default Bottle