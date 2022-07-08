import React from 'react'
import Header from '../components/Header'
import './intro.css'
import icon from './intro.png'
import {Link} from 'react-router-dom'

function Intro() {
  return (
    <>
    <Header />
    <div className='intro'>
      <div className='text'><h2>Don't have an <span className='account'>account</span> yet?{' '}<br /></h2><Link to='/signup' className='signup'>Sign up</Link></div>
      <img src={icon} alt='intro' />
      <div className='blur'></div>
      <div className='blur-3'></div>


    </div>
    </>
  )
}

export default Intro