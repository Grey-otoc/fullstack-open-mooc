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

const Statistics = ({ value, text }) => {
  const includePercent = text === "positive" ? "%" : ""
  return (
    <div>{text} {value}{includePercent}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  // within a single render, the values never change, so const is correct
  const avg = all === 0 ? 0 : (good - bad) / all
  const posi = all === 0 ? 0 : ((good) / all) * 100

  const handleIncrementClick = (setFunc) => {
    setFunc(prev => prev + 1)
    setAll(prev => prev + 1)
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button onClick={() => handleIncrementClick(setGood)} text="good"/>
      <Button onClick={() => handleIncrementClick(setNeutral)} text="neutral"/>
      <Button onClick={() => handleIncrementClick(setBad)} text="bad"/>
      <Header text="statistics"/>
      <Statistics value={good} text="good"/>
      <Statistics value={neutral} text="neutral"/>
      <Statistics value={bad} text="bad"/>
      <Statistics value={all} text="all"/>
      <Statistics value={avg} text="average"/>
      <Statistics value={posi} text="positive"/>
    </div>
  )
}

export default App
