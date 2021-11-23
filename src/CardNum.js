import React, { useContext } from 'react'

import styles from './Card.module.css'
import { CounterContext } from './Counter.context'

const CardNum = props => {
  const countContext = useContext(CounterContext)
  const pickedNumber = evt => {
    //this.props.handlePicked
    countContext.handlePicked(+evt.target.textContent)
  }

  return (
    <div onClick={pickedNumber} className={styles.card}>
      {props.number}
    </div>
  )
}
export default React.memo(CardNum)
