import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.otsikot}</h1>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {

  if (good + bad + neutral === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={good + bad + neutral}/>
        <StatisticLine text="average" value={(good - bad) / (good + bad + neutral)}/>
        <StatisticLine text="positive" value={(good / (good + bad + neutral)) * 100 + '%'}/>
      </tbody>
    </table>
  )
}

const StatisticLine = ({text,value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)


const App = () => {

  const otsikot = {
    feed: 'give feedback', sta: 'statistics',
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const HandleGood = () => {setGood(good+1)}
  const HandleNeutral = () => {setNeutral(neutral+1)}
  const HandleBad = () => {setBad(bad+1)}

  return (
    <div>
      <Header otsikot={otsikot.feed} />
      <Button handleClick={HandleGood} text="Good"/>
      <Button handleClick={HandleNeutral} text="Neutral"/>
      <Button handleClick={HandleBad} text="Bad"/>
      <Header otsikot={otsikot.sta} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


export default App