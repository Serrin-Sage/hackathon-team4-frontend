import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import TablePage from './components/TablePage'
import MenuPage from './components/menu/MenuPage'
import ManagerPage from './components/ManagerPage'
import MenuItemsContainer from './components/menu/MenuItemsContainer'

function App() {
  const [currentStaff, setCurrentStff] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage setCurrentStff={setCurrentStff}/>} />
        <Route path="/menu" element={<MenuPage currentStaff={currentStaff}/>} />
        <Route path="/manager" element={<ManagerPage currentStaff={currentStaff}/>} />
        <Route path="/Beverage" element={<MenuItemsContainer category = {'beverages'}/>} />
        <Route path="/Entree" element={<MenuItemsContainer category = {'entrees'}/>} />
        <Route path="/Dessert" element={<MenuItemsContainer category = {'desserts'}/>} />
        <Route path="/Appetizer" element={<MenuItemsContainer category = {'appetizers'}/>} />
      </Routes>
    </div>
  )
}

export default App

