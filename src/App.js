//import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import CatFact from './components/CatFacts'
import CatPic from './components/CatPics'
import Chaos from './components/ChaosMode'

const App = () => {
  const [displayFact, setDisplayFact] = useState(false)

  const toggleFact = () => {
    if (displayFact === false) {
      setDisplayFact(true)
    } else {
      setDisplayFact(false)
    }
  }
  const [displayChaos, setDisplayChaos] = useState(false)
  const toggleChaos = () => {
    if (displayChaos === false) {
      setDisplayChaos(true)
    } else {
      setDisplayChaos(false)
    }
  }

  const [displayPic, setDisplayPic] = useState(false)
  const togglePic = () => {
    if (displayPic === false) {
      setDisplayPic(true)
    } else {
      setDisplayPic(false)
    }
  }

  return (
    <div className="App">
      <header className="App-header">APP HEADER TEST</header>
      <main>
        <div className="catFact-container">
          {displayFact === false ? (
            <h2>LOREM IPSUM FILL THIS LATER NEED CREATIVE INSPO.</h2>
          ) : (
            <CatFact displayFact={displayFact} />
          )}
          <button onClick={toggleFact}>
            {displayFact === false
              ? 'Cat Facts!'
              : 'Click here if you dont like cats'}
          </button>

          {displayChaos === false ? (
            <h2>Soon there will be text here!</h2>
          ) : (
            <Chaos displayChaos={displayChaos} />
          )}
          <h2> ADDING TEXT FOR CHAOS SPACE</h2>
          <button onClick={toggleChaos}>
            {displayChaos === false ? 'Choose Violence' : 'Ok Take Me Back'}
          </button>

          {<CatPic displayPic={displayPic} />}
          <button onClick={togglePic}>
            {displayPic === false ? 'More Cute Kitties Pls' : 'No More Pls'}
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
