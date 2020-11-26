import React,{useState, useEffect} from 'react'
import './Row.css'
function Row({title, url,isLargeRow}) {

const [movies, setMovies] = useState([])

const urlImage = "https://image.tmdb.org/t/p/w500"
//initialisation 
useEffect(() => {

 async function dataFetch (){

    const data = await fetch(`https://api.themoviedb.org/3${url}`)
    const body = await data.json()
    setMovies(body.results)
    return body
 }
dataFetch ()
}, [url]) 


const mymovies = movies.map(movie =>{
    return (
        <img key={movie.id} className= {`row_poster ${isLargeRow && "row_posterLarge"}`} src={ `${urlImage}${ isLargeRow ?movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
    )
})


    return (
        <div className="row">
            {/* NavBar */}
            {/* Banner */}
            <h1>{title}</h1>
            <div className="row_posters">
                {/* posters */}
                {mymovies}
            </div>
        </div>
    )
}

export default Row
