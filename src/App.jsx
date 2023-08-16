import { useState } from 'react'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  return (
    <>
    <button onClick={ ()=> alert("Go suck on a dead dog's nose.") }>Click Me</button>
    <PersonCard lastName={"Doe"} firstName={"John"} age={40} hairColor={"black"}/>
    <PersonCard lastName={"Davidson"} firstName={"Harley"} age={75} hairColor={"grey"}/>
    <PersonCard lastName={"Voorhees"} firstName={"Jason"} age={13} hairColor={"bald"}/>
    <PersonCard lastName={"Shreck"} firstName={"Max"} age={99} hairColor={"silver"}/>
    </>
  )
}


export default App
