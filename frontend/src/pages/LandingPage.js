import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
const LandingPage = () => {
  return (
    <>
    <NavBar/>
    
    <section>
    <Outlet/>
   </section>
    
    </>
  
  )
}

export default LandingPage
