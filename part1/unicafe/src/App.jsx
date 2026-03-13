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

const StatisticLine = ({ all, value, text }) => {
  const includePercent = text === "positive" ? "%" : ""

  if (all != 0) {
    return (
      <tr>
        <td>{text}</td>
        <td>
          {value}{includePercent}
        </td>
      </tr>
    )
  }
}

const DefaultStatistics = ({ all }) => {
  if (all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
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
      <DefaultStatistics all={all} />
      <table>
        <tbody>
          <StatisticLine all={all} value={good} text="good"/>
          <StatisticLine all={all} value={neutral} text="neutral"/>
          <StatisticLine all={all} value={bad} text="bad"/>
          <StatisticLine all={all} value={all} text="all"/>
          <StatisticLine all={all} value={avg} text="average"/>
          <StatisticLine all={all} value={posi} text="positive"/>
        </tbody>
      </table>
    </div>
  )
}

export default App
