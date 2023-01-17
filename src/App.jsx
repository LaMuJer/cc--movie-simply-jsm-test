
// 96aef73d

import { useEffect } from "react"
import './App.css'
import {BsSearch} from 'react-icons/bs'
import Movie from "./Movie"
import { useState } from "react"

const App = () => {
  const API_URL = 'http://www.omdbapi.com/?apikey=96aef73d'

  const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
  }

  const [movies, setMovies] = useState([])
  const [serach, setSearch] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }
  
  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div className="app">
      <h1>MovieLand </h1>
      <div className="search">
        <input type="text"
          placeholder="Search Movies..."
          value={serach}
          onChange={(e) => { setSearch(e.target.value)} }
        />
        <BsSearch onClick={() => {searchMovies(serach)}}/>
      </div>

        {movies.length > 0  
          ? (
              <div className="container">            
                
                {movies.map((m) => <Movie key={m.imdbID} movie1={m} />)}
              </div>
            ) :
          (
            <div className="empty">            
              <h2>Results not found</h2>
            </div>
          )}

    </div>
  )
}

export default App