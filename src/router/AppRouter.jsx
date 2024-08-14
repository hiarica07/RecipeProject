import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'

const AppRouter = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            {/* <Route path="/" element={<Register/>}/> */}
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter