import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Widget from "../../components/widget/Widget"

const Home = () => {

  return (
    <div>
        <Header
          url={'https://api.themoviedb.org/3/discover/movie?api_key=b419006516f8c011313942f7712b188b'}
        />
        <div className="">
            <Widget
                title={'Movie Trending'}
                url={'https://api.themoviedb.org/3/discover/movie?api_key=b419006516f8c011313942f7712b188b'}
                urlImg={'https://image.tmdb.org/t/p/w500'}
            />
            
            <Widget
                title={'TV Trending'}
                url={'https://api.themoviedb.org/3/discover/tv?api_key=b419006516f8c011313942f7712b188b'}
                urlImg={'https://image.tmdb.org/t/p/w500'}
            />

        </div>
        <Footer/>
    </div>
  )
}

export default Home