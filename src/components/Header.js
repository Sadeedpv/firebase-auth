import React from 'react'
import {HiFire} from 'react-icons/hi'
import '../pages/intro.css'
import {Link} from 'react-router-dom'

function Header({user}) {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '2.4rem',
        fontWeight:'700',
        marginLeft:'min(3em, 8vw)',
        justifyContent: 'space-between',
    }}>
         <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

         }}><HiFire size={45} color='#6603FC'/>{' '}Base</div>
         <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding:'2rem',
         }}>
            <Link to='/signup'><button className='btn'>Sign-up</button></Link>
            <Link to='/login'><button className='btn'>Login</button></Link>
        </div>
    </div>
  )
}

export default Header