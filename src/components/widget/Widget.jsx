import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material"
import { useFetch } from "../../api/useFetch"
import "../embla-carousel/carousel.scss"
import {PrevButton, NextButton, usePrevNextButtons} from '../embla-carousel/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import InfoIcon from '@mui/icons-material/Info';

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
                    <ImageListItem className="embla__slide" key={item.id}>
                        <img
                            srcSet={`${urlImg}${item.poster_path}`}
                            src={`${urlImg}${item.poster_path}`}
                            alt={item.title} 
                            className="movie-img" 
                            style={{ width:'250px', height:'350px'}}
                        />
                        <ImageListItemBar
                            title={title === 'Movie Trending' ? item.title : item.name}
                            subtitle={title === 'Movie Trending' ? item.release_date : item.first_air_date}
                            actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${title === 'Movie Trending' ? item.title : item.name}`}
                            >
                            <InfoIcon />
                            </IconButton>
                            }
                            style={{ width:'250px', height:'50px', left:'10%', top:'83%'}}
                            className="item-bar"
                        />

                    </ImageListItem>
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