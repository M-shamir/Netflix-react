import  { useEffect, useState } from 'react'
import './Player.css'
import backarrow from '../../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {
  const {id}= useParams();
  const navigate = useNavigate()
  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTVjZjViMGE5ZDFkNjlhZjJkYjQ0ZGM0YjhkYTZmNCIsIm5iZiI6MTczMzY1NzY2OC4zMzUsInN1YiI6IjY3NTU4NDQ0MDU2NGIxZWE5YjZlYzY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vvD04hKEKortZrv0hZnmFtXQXqHqTzogMIBPfk71R7Y'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  },[])
  return (
    <div className='player'>
      <img src={backarrow} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe frameBorder='0' width='90%'  height='90%'  src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
