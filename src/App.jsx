import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/home/Home'
import MovieHome from './page/movieHome/MovieHome'
import SerieHome from './page/serieHome/SerieHome'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='movie'>
              <Route index element={<MovieHome/>}/>
            </Route>
            <Route path='serie'>
              <Route index element={<SerieHome/>}/>
            </Route>
          </Route>
        </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App
