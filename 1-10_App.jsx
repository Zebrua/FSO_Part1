import { useState } from 'react'
const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.name}</button>
  )
}
const Statisticline = (props) => {
  return(
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}
const Statistic = (props) => {
  if(props.total === 0){
    return(
      <div>
        <p>No feedbacks given</p>
      </div>
    )
  }else{
  return(
    <div>
    <Statisticline text="Good" value={props.good}/>      
    <Statisticline text="Neutral" value={props.neutral}/> 
    <Statisticline text="Bad" value={props.bad}/> 
    <Statisticline text="Total" value={props.total}/> 
    <Statisticline text="Average" value={(props.good - props.bad) / props.total}/> 
    <Statisticline text="Positive" value={props.good / props.total}/> 
    </div>
  )}
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
      <div>
      <Button onClick={increaseGood} name="Good" />
      <Button onClick={increaseNeutral} name="Neutral" />
      <Button onClick={increaseBad} name="Bad" />
      </div>
      <h1>Statistics</h1>
      <Statistic good={good} neutral={neutral} bad={bad} total={good + neutral + bad}/>
    </div>
  )
}

export default App
