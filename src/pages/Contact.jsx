import React from 'react'
import Subheader from '../Components/Subheader/Subheader'
import Location from '../Components/Location/Location'
import ContactComponent from '../Components/ContactComponent/ContactComponent'
import Footer from '../Components/Footer/Footer'

const Contact = () => {
  return (
    <>
        <Subheader header="Contact Us" />
        <Location />
        <ContactComponent />
        <Footer />
    </>
  )
}

export default Contact