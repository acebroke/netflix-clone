import React,{useState,useEffect} from 'react'
import request from "../request"
import  "../components/Banner.css"

function Banner({url}) {
    const urlImage = "https://image.tmdb.org/t/p/w500"
    const [movie,setMovie] = useState([])


    useEffect(() => {
       async function fetchData(){
        const data = await fetch(`https://api.themoviedb.org/3${request.fetchNetflixOriginals}`)
        const body = await data.json()
        console.log(body.results)
        setMovie(body.results[Math.floor(Math.random() * body.results.length -1)])
        return body
    } 
    fetchData()
}, [])

function truncate(str,n){
	return str?.length > n ? str.substr(0, n - 1 ) + "..." : str;
}
return (
        <div className="banner" style={{backgroundImage: `url("${urlImage}${movie.backdrop_path}")`, WebkitBackgroundSize:"cover", backgroundPosition:"center center"}}>
            <div className="banner_contaner">
                <h1 className="banner_title">{movie.name  || movie.title || movie.original_name} </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Lecture</button>
                    <button className="banner_button">Ma liste</button>
                </div>
                <h1 className="banner_description">{truncate(movie.overview,150)}</h1>
            </div>
        </div>
    )
}

export default Banner
