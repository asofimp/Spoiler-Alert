import { useFetch } from "../../api/useFetch"
import "./movie.css"
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// Styles must use direct files imports
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const Movie = () => {
  
    const {data, loading, error} = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=b419006516f8c011313942f7712b188b')
  
    console.log(data)
  
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
                navigation={{
                    nextEl:'.rightSlide',
                    nextPrev:'.leftSlide',
                    clickable: true,
                }}
            >
            {error && <li>Error: {error}</li>}
            {loading && <li>Loading...</li>}
            {data && data.results && data.results.map((movie)=>(
                <SwiperSlide key={movie.id}>
                    <div className="" >
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                        <h4>{movie.title}</h4>
                    </div>
                </SwiperSlide>
            ))}

            <div className="leftSlide">
                <ChevronLeftIcon name='leftSlide'/>
            </div>
            <div className="rightSlide" >
                <ChevronRightIcon name='rightSlide'/>
            </div>
            </Swiper>
        </div>
  )
}

export default Movie