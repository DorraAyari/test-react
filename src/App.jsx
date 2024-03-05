import Home from './Components/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Compretitions from './Components/Competitions'
import NotFound from './Components/NotFound';
import CompetitionDetails from './Components/CompetitionDetails'

function App() {
  

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/competition'
          element={<Compretitions />}
        />
        <Route
          path='/competition/:id'
          element={<CompetitionDetails />}
        />
       
      
        <Route
          path='/*'
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App