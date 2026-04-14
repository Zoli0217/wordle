import React, { useState } from 'react'
import { sendGuess, type ApiData } from './services/api'

const App = () => {
  const [guess, setGuess] = useState<string>("")
  const [history, setHistory] = useState<ApiData[]>([]) 

  const submitGuessForm = (e:React.SubmitEvent) => {
    e.preventDefault()
    if(guess.length == 5){
      sendGuess(guess).then(response => {
        if(!response.is_word_in_list){
          alert("Nincs ilyen szó!")
        }else{
          setHistory(prev => [...prev, response])
        }
      })
    }
  }

  return (
    <div>
      <form onSubmit={submitGuessForm}>
        <input type="text" value={guess} onChange={(e)=>setGuess(e.target.value)} />
        <button type='submit'>BEKULD</button>
      </form>

      {history.map(item => <h1>
        {item.character_info.map(char => 
        <span style={{ color: char.scoring.correct_idx ? "green" : char.scoring.in_word ? "yellow" : "white" }}>
          {char.char}
          </span>)}
      </h1>)}
      
    </div>
  )
}

export default App