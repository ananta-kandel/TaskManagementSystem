import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = (props) => {
  return (
    <>
    <Navbar/>
    {props.children}
    <Footer/>
    </>
    
  )
}

export default MainLayout