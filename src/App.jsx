import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import TablePage from './components/TablePage'
import MenuPage from './components/menu/MenuPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  )
}

export default App

