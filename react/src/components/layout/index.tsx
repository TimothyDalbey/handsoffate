import { Outlet } from 'react-router-dom'

import Nav from './Nav'
import Footer from './Footer'
import NotificationBanner from './NotificationBanner'

function Layout () {
  return (
    <div className="App">
      <h1 className="silent">Coffee & Sandwiches - Lake Oswego, Oregon -  Hands of Fate Coffee & Sandwiches</h1>
      <Nav />
      <NotificationBanner />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
