import React from 'react'
import Footer from '../Components/Footer'
import Heroimage from '../Components/Heroimage'
import Navbar from '../Components/Navbar'
import TrainingComponent from '../Components/TrainingComponent'

const Training = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage heading="Training" text="Pre-Flight & In-Flight"/>
        <TrainingComponent/>
        <Footer/>
    </div>
  )
}

export default Training