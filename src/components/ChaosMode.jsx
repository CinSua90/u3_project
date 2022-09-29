import { useState, useEffect } from 'react'
import axios from 'axios'

const Chaos = ({ displayChaos }) => {
  const [chaos, setChaos] = useState('')

  const getChaos = async () => {
    try {
      const res = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes')
      setChaos(res.data.chaos)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {

    getChaos();
  }, [displayChaos])


  return (
    <h2 style={{fontStyle: 'italic'}}>{chaos !== '' && chaos}</h2>
  )
}




export default Chaos



// const Chaos2 = ({ name, breed, photo, adoption}) =>
// {
// <div className="App">
//   <p>
// <img src={photo} />
// Name: {name}
// Breed: {breed} 
// Ready for Adoption: {adoption}
// </p>
// </div>

// }
