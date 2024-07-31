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
  const part1 = {
    name: 'Fundamentals of React',
    exercises:  10,
  }
  const part2 = {
    name:  'Using props to pass data',
    exercises:  7,
  }
  const part3 = {
    name:  'State of a component',
    exercises:  14,
  }

  return (
    <div>
      <Header course={course} />
      <Content  name={part1.name} amount={part1.exercises}/>
      <Content name={part2.name} amount={part2.exercises} />
      <Content name={part3.name} amount={part3.exercises} />
      <Total number={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}

export default App
