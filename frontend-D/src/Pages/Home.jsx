import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import HomeCaregory from './HomeCaregory'
import Contact from './Contact'
import Mission from './Mission'
import AboutPage from './AboutPage'
import OffersPage from './Offers'
//import Hero from './Hero'

function Home() {
  return (
    <>
    
    <Hero/>
    <Mission/>
    <AboutPage/>
    <HomeCaregory/>
    <OffersPage/>
    <Contact/>
    </>
  )
}

export default Home