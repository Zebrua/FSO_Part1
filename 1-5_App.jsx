const Summ = (list) => {
  return (
    list[0] + list[1] + list[2] 
  )
}
const Part = (props) => {
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
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
      <Part part={props.array[0]} />
      <Part part={props.array[1]} />
      <Part part={props.array[2]} />
    </div>
  )
}
const Total = (props) => {
  const exrss = [props.array[0].exercises, props.array[1].exercises, props.array[2].exercises];
  const res = Summ(exrss);
  return (
    <div>
      <p>Total number of exercises {res}</p>
    </div>
  )
}
const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content  array={course.parts}/>
      <Total array={course.parts} />
    </div>
  )
}

export default App
