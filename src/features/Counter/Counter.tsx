import React, { useReducer } from 'react'

const Counter = () => {
    const initialState = {
        count: 0
    }

    function reducer (state, action) {
        if (action.type == 'increment') {
            return {count: state.count++}
        } else if (action.type == 'decrement') {
            return {count: state.count--}
        } else {
             return {count: state.count += action.payload}
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <div>Counter : {state.count}</div>

    <div className='flex gap-5'>
    <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
    <button className={`${state.count == 0 && 'pointer-events-none opacity-30' }`} onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
    <button onClick={() => dispatch({type: 'add', payload: 5})}>+5</button>
    </div>
    </>

  )
}

export default Counter