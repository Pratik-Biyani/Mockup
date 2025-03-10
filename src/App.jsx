import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Pay from './components/Pay'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUsPage from './pages/AboutUs'
import LoginPage from './pages/LoginPage'
import ChatBot from './components/Chatbot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path='/pay' element={<Pay />} />
    </Routes>
    </div>
  )
}

export default App
