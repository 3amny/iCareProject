import { Outlet } from 'react-router-dom'
import Navbar from '../widgets/navbar/ui/Navbar.js'
import Footer from '../widgets/footer/ui/Footer.js'
const SharedLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  
  )
}

export default SharedLayout
