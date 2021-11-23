//functional way
//class based way
//JSX -Javascript XML
// <h1>Heading</h1>
//<img src='' />

//Expression not statement

//changing state, props,manual forcing re-render

//style inline, html, local scoped style

//synthetic event
import React, { useContext } from 'react'

import CardNum from './CardNum'
import OddOrEven from './OddOrEven'
import { CounterContext } from './Counter.context'

const randVal = [30, 33, 37, 42]

//controller -How state should be updated

const App = () => {
  const { count, dispatch } = useContext(CounterContext)

  // const [count, setCount] = React.useState({ value: 0 })
  // const [randVal, setRandVal] = React.useState([30, 33, 37, 42])

  // const randVal = React.useMemo(() => {
  //   return [30, 33, 37, 42]
  // }, [])

  // const randomVal = React.useMemo(() => {
  //   return { greet: 'Hello' }
  // }, [])

  return (
    <div className='App'>
      <p>{count.value}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <OddOrEven />

      <br />
      {randVal.map((number, index) => {
        return <CardNum number={number} key={index} />
      })}
    </div>
  )
}

export default App
