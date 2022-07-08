import React from 'react'
import '../pages/signin.css'
import login from '../pages/login.png'


function Loginpic() {
  return (
    <div className='signinpic'>
        <img src={login} alt='Login' />
            <div className='blur'></div>
            <div className='blur-2'></div>
    </div>
  )
}

export default Loginpic