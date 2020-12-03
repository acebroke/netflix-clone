import React,{useState, useEffect} from 'react'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
function Row({title, url,isLargeRow}) {

const [movies, setMovies] = useState([])
const [trailerUrl, setTrailerUrl] = useState("")
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

const handleClick = (movie) =>{
    if (trailerUrl){
        setTrailerUrl("")
    }else{
        movieTrailer( movie?.name || "")
        .then((url=>{
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"))
        }))
        .catch((error=>{
            console.log(error)
        }))
    }

}
const opts={
	height : "390",
	width: "100%",
	playerVars : {
	
		//url 
		autoplay : 1,

}
}
const mymovies = movies.map(movie =>{
    return (
        <img key={movie.id}  className= {`row_poster ${isLargeRow && "row_posterLarge"}`} src={ `${urlImage}${ isLargeRow ?movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
    )
})
// onClick={()=>handleClick(movie)}
//call function not working

    return (
        <div className="row">
            {/* NavBar */}
            {/* Banner */}
            <h1>{title}</h1>
            <div className="row_posters">
                {/* posters */}
                {mymovies}
            </div>
            {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} />}  
        </div>
    )
}

export default Row
