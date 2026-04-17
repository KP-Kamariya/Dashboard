import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isOpen} />
      <div className={`transition-all duration-300 ease-in-out w-full h-screen overflow-y-auto ${isOpen ? 'ml-56' : 'ml-0'
        }`}>
        <Header onToggle={toggleSidebar} isOpen={isOpen} />
        <div className="mt-14 p-4"> 
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout