import { useState } from 'react'
const Display = (props) => {
  return(
    <div>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={increaseGood}>Good</button>
      <button onClick={increaseNeutral}>Neutral</button>
      <button onClick={increaseBad}>Bad</button>
      <h1>Statistics</h1>
      <Display good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App
