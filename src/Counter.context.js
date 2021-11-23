import React, { createContext } from 'react'

//reducer
const countReducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: state.value + action.payload
      }
    case 'DECREMENT':
      return {
        value: state.value - 1
      }

    case 'RESET':
      return {
        value: 0
      }
    default:
      return state
  }
}

//context

//provider
export const CounterContext = createContext()

export const CounterProvider = props => {
  const [count, dispatch] = React.useReducer(countReducer, { value: 0 })
  const [pickedNum, setPickedNum] = React.useState(null)

  const handlePicked = React.useCallback(num => {
    setPickedNum(num)
  }, [])

  //Not needed
  // const handleIncrement = evt => {
  //   dispatch({ type: 'INCREMENT', payload: 2 })
  // }

  // const handleDecrement = () => {
  //   dispatch({ type: 'DECREMENT' })
  // }

  // const handleReset = () => {
  //   dispatch({ type: 'RESET' })
  // }

  return (
    <CounterContext.Provider
      value={{ count, dispatch, handlePicked, pickedNum }}
    >
      {props.children}
    </CounterContext.Provider>
  )
}
