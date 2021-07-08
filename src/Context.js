import React from 'react'
import { cloneDeep, isNull } from 'lodash'

let InitialState = {
    bottles: [50],
    currentBottle: 0,
    log: {}
}
  
const Context = React.createContext(InitialState)
  
function Reducer(state, action) {
    let new_state = cloneDeep(state)
  
    if(action.type === "waterLevelUpdate") new_state = updateBottleWaterLevel(new_state, action)
    if(action.type === "log") new_state = logWaterLevel(new_state, action)
  
    return new_state
}

function updateBottleWaterLevel(state, action) {
    state.bottles[action.payload.idx] = action.payload.val

    return state
}

function logWaterLevel(state, action) {
    console.log(action)

    if(state.log[action.payload.idx] === null) state.log[action.payload.idx] = [];

    state.log[action.payload.idx].push({timestamp: Date.now(), val: action.payload.val})

    return state
}

export {
    Context,
    Reducer,
    InitialState
}
