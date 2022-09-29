import { useState, useEffect } from 'react'
import axios from 'axios'


const CatFact = ({displayFact}) => {

  const [fact, setFact] = useState('')

  const getCatFact = async () => {
try {
  const res = await axios.get('https://meowfacts.herokuapp.com/')

  console.log(res)
  setFact(res.data.data[0])
} catch(err){
  console.log(err)
}
}

  useEffect(() => {

    getCatFact();
  }, [displayFact])


  return (
    <h2 style={{fontStyle: 'italic'}}>{fact !== '' && fact}</h2>
  )
}



export default CatFact