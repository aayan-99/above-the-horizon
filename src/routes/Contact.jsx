import React from 'react'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import Heroimage from '../Components/Heroimage'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage heading="CONTACT." text="Contact GLX Travel."/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact