import { useState } from 'react'

const App = () => {

  const otsikot = {
    feed: 'give feedback', sta: 'statistics',
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header otsikot={otsikot.feed} />
      <button onClick={() => setGood(good + 1)}> good </button>
      <button onClick={() => setNeutral(neutral + 1)}> neutral </button>
      <button onClick={() => setBad(bad + 1)}> bad </button>
      <Header otsikot={otsikot.sta} />

      <tr> good {good} </tr>
      <tr> neutral {neutral} </tr>
      <tr> bad {bad} </tr>
      <tr> all {good + bad + neutral} </tr>
      <tr> average {(good - bad) / (good + bad + neutral)} </tr>
      <tr> positive {(good / (good + bad + neutral)) * 100} % </tr>

    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.otsikot}</h1>
    </div>
  )
}


export default App