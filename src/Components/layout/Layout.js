import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

export default function Layout() {
  return (
    <main className='main-container'>
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}
