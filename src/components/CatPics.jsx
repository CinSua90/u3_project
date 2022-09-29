import { useState, useEffect } from 'react'
import axios from 'axios'


const CatPic = ({displayPic}) => {
  
const [pic, setPic] = useState('')

  const getCatPic = async () => {
try {
  const res = await axios.get('https://api.thecatapi.com/v1/images/search')
  console.log(res.data)
  setPic(res.data[0].url)
} catch(err){
  console.log(err)
}
  }

  useEffect(() => {

    getCatPic();
  }, [displayPic])

  return (
    <img src={pic} alt="Cat Pic" />
  )



}






export default CatPic