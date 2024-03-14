import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'

const App = () => {

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App
