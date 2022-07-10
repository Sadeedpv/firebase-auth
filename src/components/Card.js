import React from 'react'
import img from '../pages/intro.png'
import '../pages/details.css'

function Card() {
  return (
    <div className='card-grid'>
        <div className='card-img'>
            <img alt='Profile photo' src={img} className='img-card'/>
        </div>
        <div className='card-text'>
            You are currently logged in as <span className='user-name'>John Doe</span>
        </div>
        <div className='card-info'>
            <p> Name: <span className='card-profession'>Sadeedpv</span></p>
            <p>Age: <span className='card-profession'>18</span></p>
            <p>Profession: <span className='card-profession'>Web Developer</span></p>
        </div>
    </div>
  )
}

export default Card