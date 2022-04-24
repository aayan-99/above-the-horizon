import React from 'react'
import { Link } from 'react-router-dom'
import "./PricingCardsStyles.css"

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">1 BTC</p>
                <p>- Inter-Planetary -</p>
                <p>- Views -</p>
                <p>- Featured -</p>
                <p>- Basic Quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className="card">
                <h3>- Suite -</h3>
                <span className="bar"></span>
                <p className="btc">3 BTC</p>
                <p>- Inter-Galactic -</p>
                <p>- Views -</p>
                <p>- Featured -</p>
                <p>- Luxury Quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className="card">
                <h3>- Executive -</h3>
                <span className="bar"></span>
                <p className="btc">8 BTC</p>
                <p>- Inter-Dimensional -</p>
                <p>- Views -</p>
                <p>- Featured -</p>
                <p>- Babylonian Quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing