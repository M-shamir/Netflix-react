import './TitleCards.css'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function TitleCards({title,category}) {
  const [apiData,setApiData] = useState([])
  const cardsRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTVjZjViMGE5ZDFkNjlhZjJkYjQ0ZGM0YjhkYTZmNCIsIm5iZiI6MTczMzY1NzY2OC4zMzUsInN1YiI6IjY3NTU4NDQ0MDU2NGIxZWE5YjZlYzY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vvD04hKEKortZrv0hZnmFtXQXqHqTzogMIBPfk71R7Y'
    }
  };
  
  
  const handleWhell = (event)=>{
    event.preventDefault()
    
    
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

;
    cardsRef.current.addEventListener('wheel',handleWhell)
  },[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
       <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="image" />
            <p>{card.original_title}</p>
          </Link>
        })}
       </div>
    </div>
  )
}

export default TitleCards
