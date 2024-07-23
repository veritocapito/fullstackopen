import { useState } from 'react'
import './App.css'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(anecdotes.map(()=> 0));
  const [mostVoted, setMostVoted] = useState(0)

  const getRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const getVotes = () => {
    const addVote = [...points];
    addVote[selected] += 1;
    setPoints(addVote);

    if (addVote[selected] > points[mostVoted]) {
      setMostVoted(selected);
    }
  }

  return (
    <>
      <section className='app'>
        <h2>Anecdote of the Day</h2>
        <p>{anecdotes[selected]}</p>
        <div>
          <button onClick={getVotes}>Vote</button>
          <button onClick={getRandomAnecdote}>Next Anecdote</button>
        </div>
        <h3>Anecdote with most votes</h3>
        <p>{anecdotes[mostVoted]}</p>
        <p>has {points[mostVoted]} votes</p>
      </section>
    </>

  )
}

export default App

