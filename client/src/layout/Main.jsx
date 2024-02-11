import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../conponents/NavBar'
import Footer from '../conponents/Footer'

const Main = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
        <footer>Footer</footer>
    </div>
  )
}

export default Main