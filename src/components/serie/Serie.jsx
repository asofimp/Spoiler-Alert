import './serie.scss'
import { useFetch } from '../../api/useFetch';

const Serie = () => {

    const {data} = useFetch('https://api.themoviedb.org/3/discover/tv?api_key=b419006516f8c011313942f7712b188b')

    console.log("serie", data)
    return (
        <div className='series'>

                {data && data.results && data.results.map((serie)=>(
                    <div key={serie.id}>
                        <img src={`https://image.tmdb.org/t/p/original${serie.poster_path}`} alt="" />
                    </div>
                ))}

        </div>
  )
}

export default Serie