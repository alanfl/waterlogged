import React from 'react'
import { cloneDeep, isNull } from 'lodash'

let InitialState = {
    bottles: [
        {
            waterLevel: 50,
            min: 0,
            max: 200,
            log: [{ timestamp: 1626737443478, waterLevel: "103" }]
        }
    ],
    currentBottle: 0,
}
  
const Context = React.createContext(InitialState)
  
function Reducer(state, action) {
    let new_state = cloneDeep(state)
  
    if(action.type === "waterLevelUpdate") new_state = updateBottleWaterLevel(new_state, action)
    if(action.type === "log") new_state = logWaterLevel(new_state)
    if(action.type === "changeBottle") new_state = changeCurrentBottle(new_state)

    console.log(new_state)
    return new_state
}

function updateBottleWaterLevel(state, action) {
    
    let bottle = state.bottles[state.currentBottle]
    bottle.waterLevel = action.payload.val

    return state
}

function logWaterLevel(state) {

    let bottle = state.bottles[state.currentBottle]
    bottle.log.push({
        timestamp: Date.now(),
        waterLevel: bottle.waterLevel
    })

    return state
}

function changeCurrentBottle(state, action) {

    let new_current = action.payload.val
    state.currentBottle = new_current
    return state
}

export {
    Context,
    Reducer,
    InitialState
}
