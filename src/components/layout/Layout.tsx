import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="site-layout">
      <Navbar/>

      <main>
        <Outlet />
      </main>
      
      <Footer/>
    </div>
  )
}

export default Layout