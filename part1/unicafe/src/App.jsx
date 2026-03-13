import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Counter = ({ value, text }) => {
  return (
    <div>{text} {value}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleIncrementClick = (newValue, setFunc) => {
    setFunc(newValue)
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button onClick={() => handleIncrementClick(good + 1, setGood)} text="good"/>
      <Button onClick={() => handleIncrementClick(neutral + 1, setNeutral)} text="neutral"/>
      <Button onClick={() => handleIncrementClick(bad + 1, setBad)} text="bad"/>
      <Header text="statistics"/>
      <Counter value={good} text="good"/>
      <Counter value={neutral} text="neutral"/>
      <Counter value={bad} text="bad"/>
    </div>
  )
}

export default App
