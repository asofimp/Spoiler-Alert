import { useFetch } from "../../api/useFetch"
import "./movie.scss"
import {PrevButton, NextButton, usePrevNextButtons} from '../embla-carousel/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const Movie = () => {
  
    const {data, loading, error} = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=b419006516f8c011313942f7712b188b')
  
    console.log(data)
    console.log("serie", data)
    const [emblaRef, emblaApi] = useEmblaCarousel(data)

  
    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(emblaApi)

  
    return (
    <div className="title">
        <h1>Movies</h1>
        <section className="embla">
            {error && <li>Error: {error}</li>}
            {loading && <li>Loading...</li>}
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                {data && data.results && data.results.map((movie) => (
                    <div className="embla__slide" key={movie.id}>
                        <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                        <div className="info">
                            <h4 className="title"> {movie.title}</h4>
                            <p className="title">{movie.release_date}</p>
                        </div>
                    </div>
                ))}
                </div>
                </div>
                <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Movie