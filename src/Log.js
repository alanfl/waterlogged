// import './Log.css'
import { useContext } from 'react'
import { Context } from './Context.js'

function Log() {
    const [state, dispatch] = useContext(Context)
    return (
        <div className="Log">
            {
                state.bottles[state.currentBottle].log.map((item, idx) =>
                    <div>
                        <span>{item.timestamp} | </span>
                        <span>{item.waterLevel}</span>
                    </div>
                )
            }
        </div>
    )
}

export default Log