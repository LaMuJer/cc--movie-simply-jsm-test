

const Movie = ({movie1}) => {
  return (
    
        
        <div className="movie">
          <div>
            <p>{ movie1.Year }</p>
          </div>

          <div>
            <img src={movie1.Poster != 'N/A' ? movie1.Poster : './img/cry.png' } alt={movie1.Title} />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>

        </div>
  )
}

export default Movie