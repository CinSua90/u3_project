// import { useState, useEffect } from 'react'
// import axios from 'axios'


const Chaos = ({ name, breed, photo, adoption}) =>
{ return(
<div className="App">
  <p>
<img src={photo} />
<b>Name:</b> {name}<br />
<b>Breed:</b> {breed} <br />
<b>Ready for Adoption:</b> {adoption} <br />
</p>
{/* return (
    <h2 style={{fontStyle: 'italic'}}>{chaos !== '' && chaos}</h2>
  ) */}
</div>
)
}



// const Chaos = ({ displayChaos }) => {
//   const [chaos, setChaos] = useState('')

//   const getChaos = async () => {
//     try {
//       const res = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes')
//       setChaos(res.data.chaos)
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   useEffect(() => {

//     getChaos();
//   }, [displayChaos])


 





export default Chaos



