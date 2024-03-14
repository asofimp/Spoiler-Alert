import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useFetch } from '../../api/useFetch';

// eslint-disable-next-line react/prop-types
export default function Tabla({title, rut}) {

  const {data} = useFetch(rut)

  return (
    <ImageList sx={{ width: '100vw', height: '100vh', maxWidth:'75vw', textAlign:'center' }}>
      <ImageListItem key="Subheader" cols={5} rows={4} >
      </ImageListItem>
      {data && data.results && data.results.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={`https://image.tmdb.org/t/p/w500${item.poster_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ width:'200px', height:'300px'}}
          />
          <ImageListItemBar
            title={title === 'Movie Trending' ? item.title : item.name}
            subtitle={title === 'Movie Trending' ? item.release_date : item.first_air_date}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
            style={{ width:'200px', height:'50px'}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
