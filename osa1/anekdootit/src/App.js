import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  const HandleNext = () => {setSelected(random(6))}
  const Vote = () => {const copy = [...points]; copy[selected] += 1; setPoints(copy);}
  const otsikot = { day: 'Anecdote of the day', most: 'Anecdote with most votes'}

  return (
    <div>
      <Header otsikot={otsikot.day} />
      <Lines anecdotes={anecdotes} selected={selected} />
      <Button handleClick={Vote} text="vote"/>
      <Button handleClick={HandleNext} text="next anecdote"/>  
      <Header otsikot={otsikot.most} />  
      <Lines anecdotes={anecdotes} selected={points.indexOf(Math.max(...points))} />
    </div>
  )
}

const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

const AnecdoteLine = ({text}) => {
  return (
    <tr>
      <td>{text}</td>
    </tr>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.otsikot}</h1>
    </div>
  )
}

const Lines = ({anecdotes,selected}) => {
  return (
    <table>
      <tbody>
        <AnecdoteLine text={anecdotes[selected]}/>
      </tbody>
    </table>
  )
}

const random = (max) => {return Math.floor(Math.random() * max);}

export default App
