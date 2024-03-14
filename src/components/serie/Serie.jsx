import '../embla-carousel/serie.scss'
import { useFetch } from '../../api/useFetch';
import {PrevButton, NextButton, usePrevNextButtons} from '../embla-carousel/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const Serie = () => {

    const {data} = useFetch('https://api.themoviedb.org/3/discover/tv?api_key=b419006516f8c011313942f7712b188b')

    console.log("serie", data)
    const [emblaRef, emblaApi] = useEmblaCarousel(data)

  
    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(emblaApi)
  

    return (
        <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
            {data && data.results && data.results.map((serie) => (
              <div className="embla__slide" key={serie.id}>
                <img src={`https://image.tmdb.org/t/p/original${serie.poster_path}`} alt="" />
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
  )
}

export default Serie