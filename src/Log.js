// import './Log.css'
import { useContext } from 'react'
import { Context } from './Context.js'

function Log() {
    const [state, dispatch] = useContext(Context)
    return (
        <div className="Log">
            {
                state.log.map((item, idx) =>
                    <div>
                        <span>{item.timestamp}</span>
                        <span>{item.val}</span>
                    </div>
                )
            }
        </div>
    )
}

export default Log