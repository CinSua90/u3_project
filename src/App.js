//import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import CatFact from './components/CatFacts'
import CatPic from './components/CatPics'
import Chaos from './components/ChaosMode'
import chaos from './chaos.js'

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
      <main>
        <br />
        <header className="App-header">Doja Cat's Kitty Rescue</header>
        <br />
        <br />
        <br />
        <div className="catFact-container">
          {/* This is some general text to welcome & state the purpose of this website */}
          <p>
            Welcome to Doja Cat's Kitty Rescue agency! We have recently launched
            this year & we are so excited to have you take a look around! Please
            feel free to check out some fun cat facts & hopefully even adopt a
            kitty of your own before you leave!
          </p>
          <br />
          <div id="buttons">
            <button onClick={toggleFact} className="fact-button">
              {displayFact === false
                ? 'Cat Facts!'
                : 'Click here if you dont like cats'}
            </button>
            <br />
            <br />
            {/* This button toggles through Cat Pics */}
            <button onClick={togglePic}>
              {displayPic === false ? 'More Cute Kitties Pls' : 'No More Pls'}
            </button>
            <br />

            {/* This button toggles though Cats for adoption */}

            <button onClick={toggleChaos}>
              {displayChaos === false ? 'Cats for Adoption' : 'Ok Take Me Back'}
            </button>
          </div>
          {/* This will display Cat Facts from CatFacts.jsx*/}
          {displayFact === false ? '' : <CatFact displayFact={displayFact} />}
          <br />

          {/* This will display Cat Pics from CatPics.js */}
          {displayPic === false ? ' ' : <CatPic displayPic={displayPic} />}

          {/* Reusing Chaos to display available cats for adoption from ChaosMode.jsx */}
          <div className="adoptCat">
            {displayChaos === false
              ? ' '
              : chaos.map((chaos) => (
                  <Chaos
                    photo={chaos.photo}
                    name={chaos.name}
                    breed={chaos.breed}
                    adoption={chaos.adoption}
                  />
                ))}
          </div>
          {/* This buttons toggles through Cat Facts */}

          {/* Need to import chaos adoption list to this file* -- DONE }

      {/* Map adoption list to Chaos instead of current quotes. Map written below, insert when current code works & test -- IN PROGRESS*/}

          {/* Place buttons under text/images -- IN PROGRESS*/}

          {/* Make div larger & adjust to remain static, not dynamic. In other words make sure images stay at a certain size -- FIXED I THINK */}

          {/* Need to adjust header to be more visible -- FIXED*/}
        </div>
      </main>
    </div>
  )
}
export default App
