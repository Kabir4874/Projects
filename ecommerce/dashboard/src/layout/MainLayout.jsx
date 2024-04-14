import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const MainLayout = () => {
  return (
    <div className='bg-dark w-full h-screen'>
      <Header/>
      <Sidebar/>
      <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all'>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout