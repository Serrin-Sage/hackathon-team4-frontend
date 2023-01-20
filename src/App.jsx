import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'

import MenuPage from './components/MenuPage'
import ManagerPage from './components/ManagerPage'

function App() {
  const [currentStaff, setCurrentStaff] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage setCurrentStaff={setCurrentStaff}/>} />
        <Route path="/menu" element={<MenuPage currentStaff={currentStaff}/>} />
        <Route path="/manager" element={<ManagerPage />} />
      </Routes>
    </div>
  )
}

export default App

