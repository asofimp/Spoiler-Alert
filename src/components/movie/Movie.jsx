import { useFetch } from "../../api/useFetch"
import "./movie.scss"

const Movie = () => {
  
    const {data, loading, error} = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=b419006516f8c011313942f7712b188b')
  
    console.log(data)
  
    return (
        <div className="conteiner-movie-trending">
            {error && <li>Error: {error}</li>}
            {loading && <li>Loading...</li>}
            {data && data.results && data.results.map((movie)=>(
                <div key={movie.id}>
                    <div className="container-movie" >
                        <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                        <div className="info">
                            <h4 className="title"> {movie.title}</h4>
                            <p className="title">{movie.release_date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default Movie