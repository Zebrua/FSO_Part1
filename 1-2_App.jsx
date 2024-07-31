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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content name={part1} amount={exercises1} />
      <Content name={part2} amount={exercises2} />
      <Content name={part3} amount={exercises3} />
      <Total number={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App
