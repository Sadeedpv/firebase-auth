import React from 'react'
import img from '../pages/intro.png'
import '../pages/details.css'

function Card({Data}) {
  return (
    <div className='card-grid'>
        <div className='card-img'>
            <img alt='Profile photo' src={Data?Data.imgUrl:img} className='img-card'/>
        </div>
        <div className='card-text'>
            You are currently logged in as <span className='user-name'>{Data?.EmailId}</span>
        </div>
        <div className='card-info'>
            <p> Name: <span className='card-profession'>{Data?.Name}</span></p>
            <p>Age: <span className='card-profession'>{Data?.Age}</span></p>
            <p>Profession: <span className='card-profession'>{Data?.Profession}</span></p>
        </div>
    </div>
  )
}

export default Card