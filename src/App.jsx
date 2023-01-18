import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import TablePage from './components/TablePage'
import MenuPage from './components/menu/MenuPage'
import ManagerPage from './components/ManagerPage'
import MenuItemsContainer from './components/menu/MenuItemsContainer'
import MenuCategoryNavBar from './components/menu/MenuCategoryNavBar'

function App() {
  const [currentStaff, setCurrentStff] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage setCurrentStff={setCurrentStff}/>} />
        <Route path="/menu" element={<MenuPage currentStaff={currentStaff}/>} />
        <Route path="/manager" element={<ManagerPage />} />
        {/* <Route path="/Beverage" element={<MenuItemsContainer category = {'Beverage'}/>} />
        <Route path="/Entree" element={<MenuItemsContainer category = {'Entree'}/>} />
        <Route path="/Dessert" element={<MenuItemsContainer category = {'Dessert'}/>} />
        <Route path="/Appetizer" element={<MenuItemsContainer category = {'Appetizer'}/>} /> */}
      </Routes>
    </div>
  )
}

export default App

