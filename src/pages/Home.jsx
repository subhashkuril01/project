import React from 'react'
import Header from '../Components/Header/Header'

import Facilities from '../Components/Facilities/Facilities'
import Cta from '../Components/Cta/Cta'
import Testimonials from '../Components/Testimonials/Testimonials'
import Footer from '../Components/Footer/Footer'
import Courses from '../Components/Courses/Courses'

const Home = () => {
  return (
    <>
    <Header />
 
   <Courses />
    <Facilities />
    <Cta />
    <Testimonials />
    <Footer />
    </>
  )
}

export default Home