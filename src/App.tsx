import React, { useState } from 'react'
import { sendGuess } from './services/api'

const App = () => {
  const [guess, setGuess] = useState<string>("")

  const submitGuessForm = (e:React.SubmitEvent) => {
    e.preventDefault()
    if(guess.length == 5){
      sendGuess(guess).then(response => console.log(response))
    }
  }


  return (
    <div>
      <form onSubmit={submitGuessForm}>
        <input type="text" value={guess} onChange={(e)=>setGuess(e.target.value)} />
        <button type='submit'>BEKULD</button>
      </form>
      
    </div>
  )
}

export default App