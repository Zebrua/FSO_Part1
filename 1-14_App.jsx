import { useState } from 'react'
const TopVoted = (props) => {
  const maxVotes = Math.max(...props.votes);
  const ind = props.votes.indexOf(maxVotes)
  return (
    <div>
    <p>{props.anecdotes[ind]}</p>
    <p>With {maxVotes} votes</p>
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  function CreateVotes() {
    const votes = Array(anecdotes.length).fill(0)
    return votes
  }
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(CreateVotes)
  const Generate = () => setSelected(Math.ceil(Math.random()*anecdotes.length-1)) 
  const Vote = () => {
    const copy = [...votes] 
    copy[selected] += 1
    setVotes(copy)
  }
  return (
    <div>
      <h1>JK's</h1>
      {anecdotes[selected]}
      <p>Votes:</p>
      {votes[selected]}
      <p></p>

      <button onClick={Generate}>Get another one</button>
      <button onClick={Vote}>Upvote</button>
      <h2>Top voted:</h2>
      <TopVoted anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
