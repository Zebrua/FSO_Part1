const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.amount}</p>
    </div>
  )
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
};
const Content = (props) => {
  return (
    <div>
      <Part name={props.name} amount={props.amount}/>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises {props.number}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises:  10,
  },
  {
    name:  'Using props to pass data',
    exercises:  7,
  },
  {
    name:  'State of a component',
    exercises:  14,
  },
]

  return (
    <div>
      <Header course={course} />
      <Content  name={parts[0].name} amount={parts[0].exercises}/>
      <Content name={parts[1].name} amount={parts[1].exercises} />
      <Content name={parts[2].name} amount={parts[2].exercises} />
      <Total number={parts[0].exercises+parts[1].exercises+parts[2].exercises} />
    </div>
  )
}

export default App
