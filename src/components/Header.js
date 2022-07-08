import React from 'react'
import {HiFire} from 'react-icons/hi'
import '../pages/intro.css'

function Header() {
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
            <a href='/signup'><button className='btn'>Sign-up</button></a>
            <a href='/login'><button className='btn'>Login</button></a>
        </div>
    </div>
  )
}

export default Header