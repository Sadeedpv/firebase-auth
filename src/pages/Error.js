import React from 'react'
import { Link } from 'react-router-dom'
import error from './error.png'

function Error() {
  return (
    <div style={{
        display: 'grid',
        placeItems: 'center',
        padding:'2.2em 1.2em 1.2em 1.2em',
    }}>
        <span style={{
            fontSize: '1.5em',
            fontWeight: '600',
            marginBottom:'1em',

        }}>404, Page not found!</span>
        <Link to='/'><button className='btn'>Go back</button></Link>
        <img src={error} alt='error' style={{
            marginTop:'3em',
        }} />
    </div>
  )
}

export default Error