import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Anecdote = ({ anecdote, selected, votes}) => {
  return (
    <div>
      <div>{anecdote}</div>
      <div>has {votes[selected]} votes</div>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
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
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))
  
  const mostVotedAnec = votes.indexOf(Math.max(...votes))
  console.log(mostVotedAnec)

  const handleRandomClick = () => {
    const max = 7
    const min = 0
    const nextA = Math.floor(Math.random() * (max - min + 1)) + min
    setSelected(nextA)
  }

  const handleVoteClick = () => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Anecdote anecdote={anecdotes[selected]} selected={selected} votes={votes} />
      <div>
        <Button onClick={handleVoteClick} text={"vote"}/>
        <Button onClick={handleRandomClick} text={"next anecdote"}/>
      </div>
      <Header text="Anecdote with most votes"/>
      <Anecdote anecdote={anecdotes[mostVotedAnec]} selected={mostVotedAnec} votes={votes} />
    </div>
  )
}

export default App
