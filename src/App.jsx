import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import TablePage from './components/TablePage'
import MenuPage from './components/menu/MenuPage'
import ManagerPage from './components/ManagerPage'

function App() {
  const [currentStaff, setCurrentStff] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage setCurrentStff={setCurrentStff}/>} />
        <Route path="/menu" element={<MenuPage currentStaff={currentStaff}/>} />
        <Route path="/manager" element={<ManagerPage />} />
      </Routes>
    </div>
  )
}

export default App

