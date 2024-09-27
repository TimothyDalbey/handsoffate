import { Outlet } from 'react-router-dom'

import Nav from './Nav'
import Footer from './Footer'

function Layout () {
  return (
    <div className="App">
      <h1 className="silent">Coffee & Sandwiches - Lake Oswego, Oregon -  Hands of Fate Coffee & Sandwiches</h1>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
