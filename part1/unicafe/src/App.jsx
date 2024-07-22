import { useState } from 'react'
import './App.css'

const StatisticLine = ({ text, value }) => <td>{text} {value}</td>

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const positive = good / all * 100
  const average = (good + bad * - 1) / all

  if (all > 0) {
    return (
      <section>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <tr>
              <StatisticLine text="Good:" value={good} />
            </tr>
            <tr>
              <StatisticLine text="Neutral:" value={neutral} />
            </tr>
            <tr>
              <StatisticLine text="Bad:" value={bad} />
            </tr>
            <tr>
              <td>
                All: {all}
              </td>
            </tr>
            <tr>
              <td>
                Average: {average}
              </td>
            </tr>
            <tr>
              <td>
                Positive: {positive}%
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  } else {
    return <h3>No feedback given</h3>
  }
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => { setGood(good + 1) }
  const handleNeutral = () => { setNeutral(neutral + 1) }
  const handleBad = () => { setBad(bad + 1) }

  return (
    <>
      <h1>Give Feedback</h1>
      <main>
        <Button onClick={handleGood} text={'Good'} />
        <Button onClick={handleNeutral} text={'Neutral'} />
        <Button onClick={handleBad} text={'Bad'} />
      </main>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
