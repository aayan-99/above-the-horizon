import React from 'react'
import Footer from '../Components/Footer'
import Heroimage from '../Components/Heroimage'
import Navbar from '../Components/Navbar'
import PricingCards from '../Components/PricingCards'

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage heading="PRICING." text="Choose your trip."/>
        <PricingCards/>
        <Footer/>
    </div>
  )
}

export default Pricing