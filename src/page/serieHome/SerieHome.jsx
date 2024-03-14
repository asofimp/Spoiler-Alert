import Header from "../../components/header/Header"
import Tabla from "../../components/tabla/Tabla"
import './serieHome.scss'
import Footer from "../../components/footer/Footer"

const SerieHome = () => {
  return (
    <div className="container-homeserie">
      <Header
        url={'https://api.themoviedb.org/3/discover/tv?api_key=b419006516f8c011313942f7712b188b'}
      />
      <h2 className="tabla-title">
        Tendencias
      </h2>
      <div className="container-tabla">
        <Tabla
          rut={'https://api.themoviedb.org/3/discover/tv?api_key=b419006516f8c011313942f7712b188b'}
          title={'TV'}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default SerieHome