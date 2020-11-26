import React from 'react'


const API_KEY = "ccb930c53c4be82504b53034632d6d64";



const request = {


    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=fr`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&language=fr`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=fr`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28&language=fr`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35&language=fr`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27&language=fr`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749&language=fr`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99&language=fr`,

}

export default request
