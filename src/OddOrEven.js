import React from 'react'
import { useContext } from 'react'
import { CounterContext } from './Counter.context'

//component re-render
//own state update
// changing parent props
//force state update

//Memo - check props and re-render accordingly

// optional (it costs)
// Experience is good (don't touch!!)
// Experience is bad/slow(performance optimization)
// Before deploying to production

const OddOrEven = props => {
  const { pickedNum } = useContext(CounterContext)

  return (
    <>
      <p>
        {!pickedNum ? 'Not selected' : pickedNum % 2 === 0 ? 'Even' : 'Odd'}
      </p>
    </>
  )
}
export default React.memo(OddOrEven)
