import { useFetch } from "../../api/useFetch"
import "../embla-carousel/carousel.scss"
import {PrevButton, NextButton, usePrevNextButtons} from '../embla-carousel/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

// eslint-disable-next-line react/prop-types
const Widget = ({title, url, urlImg}) => {
  
    const {data, loading, error} = useFetch(url)
  
    console.log(data)
    console.log(title, data)
    const [emblaRef, emblaApi] = useEmblaCarousel(data)

  
    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(emblaApi)

  
    return (
    <div className="title">
        <h1>{title}</h1>
        <section className="embla">
            {error && <li>Error: {error}</li>}
            {loading && <li>Loading...</li>}
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                {data && data.results && data.results.map((item) => (
                    <div className="embla__slide" key={item.id}>
                        <img className="movie-img" src={`${urlImg}${item.poster_path}`} alt="" />
                        <div className="info">
                            <h4 className="title"> {title ==="Movie Trending" ? item.title : item.name}</h4>
                            <p className="title">{title ==="Movie Trending" ?item.release_date : item.first_air_date}</p>
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

export default Widget