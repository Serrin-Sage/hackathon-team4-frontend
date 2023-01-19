import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import TablePage from './components/TablePage'
import MenuPage from './components/menu/MenuPage'

import NewMenuPage from './components/NewMenuPage'

import ManagerPage from './components/ManagerPage'
import MenuItemsContainer from './components/menu/MenuItemsContainer'
import MenuCategoryNavBar from './components/menu/MenuCategoryNavBar'

function App() {
  const [currentStaff, setCurrentStaff] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage setCurrentStaff={setCurrentStaff}/>} />
        <Route path="/menu" element={<NewMenuPage currentStaff={currentStaff}/>} />
        <Route path="/manager" element={<ManagerPage />} />
        
      </Routes>
    </div>
  )
}

export default App

