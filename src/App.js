import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import AirportDetailsPage from './components/AirportDetailsPage'

import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Router>
        <Routes>
          <Route path='/airport/:id' element={<AirportDetailsPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
