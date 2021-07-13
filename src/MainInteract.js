import './MainInteract.css'
import React from 'react'
import { useContext } from 'react'
import { Context } from './Context.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function MainInteract(prop) {
    let [state, dispatch] = useContext(Context)

    let nextDisabled = state.currentBottle >= state.bottles.length - 1
    let prevDisabled = state.currentBottle <= 0

    return (

        <div className = 'MainInteract'>

            <input 
                type='button'
                id='prev-bottle-button'
                value='Previous Bottle'
                disabled = { prevDisabled }
                onClick = { (event) => {
                    dispatch({
                        type: 'changeBottle',
                        payload: {
                            val: state.currentBottle - 1
                        }
                    })
                }}
            />

            <input
                type='button'
                id='water-level-button'
                value='Log Water Level'
                onClick = { (event) => {
                    dispatch({
                        type: 'log'
                    })
                }}
            />

            <input 
                type='button'
                id='next-bottle-button'
                value='Next Bottle'
                disabled = { nextDisabled }
                onClick = { (event) => {
                    dispatch({
                        type: 'changeBottle',
                        payload: {
                            val: state.currentBottle + 1
                        }
                    })
                }}
            />
        </div>
    )
}

export default MainInteract