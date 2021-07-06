import React from 'react'
import { cloneDeep } from 'lodash'

let InitialState = {
    bottles: [50],
    currentBottle: 0
}
  
const Context = React.createContext(InitialState)
  
function Reducer(state, action) {
    let new_state = cloneDeep(state)
  
    new_state.bottles[action.payload.idx] = action.payload.val
  
    return new_state
}

export {
    Context,
    Reducer,
    InitialState
}
