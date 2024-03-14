import Navbar from '../navbar/Navbar';
import { useFetch } from '../../api/useFetch';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './header.scss'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


const Header = () => {

    const{data} = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=b419006516f8c011313942f7712b188b');

    return (
    <div>
        <Navbar/>
        
        <Swiper
            direction={'horizontal'}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            className="mySwiper"
        >
        
        {data && data.results && data.results.map((poster) => (
            <SwiperSlide key={poster.id}>
                <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${poster.backdrop_path}`} alt="" />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Header