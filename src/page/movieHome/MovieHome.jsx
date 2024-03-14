import Header from "../../components/header/Header"
import Tabla from "../../components/tabla/Tabla"
import './movieHome.scss'

const MovieHome = () => {
  return (
    <div className="container-homemovie">
      <Header
        url={'https://api.themoviedb.org/3/discover/movie?api_key=b419006516f8c011313942f7712b188b'}
      />

      <h2 className="tabla-title">
        Tendencias
      </h2>
      <div className="container-tabla">
        <Tabla
          rut={'https://api.themoviedb.org/3/discover/movie?api_key=b419006516f8c011313942f7712b188b'}
          title={'Movie Trending'}
        />
      </div>

    </div>
  )
}

export default MovieHome