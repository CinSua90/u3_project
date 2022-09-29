import { useState, useEffect } from 'react'
import axios from 'axios'


const CatPic = ({displayPic}) => {
  
const [setPic] = useState('')

  const getCatPic = async () => {
try {
  const res = await axios.get('https://api.thecatapi.com/v1/images/search')
  setPic(res.data.pic)
} catch(err){
  console.log(err)
}
  }

  useEffect(() => {

    getCatPic();
  }, [displayPic])

}






export default CatPic