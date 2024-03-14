import Navbar from '../navbar/Navbar';
import { useFetch } from '../../api/useFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './header.scss'
import { Pagination, Autoplay } from 'swiper/modules';


// eslint-disable-next-line react/prop-types
const Header = ({url}) => {

    const{data} = useFetch(url);

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