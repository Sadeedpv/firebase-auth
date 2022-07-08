import React from 'react'
import '../pages/signin.css'
import signinpic from '../pages/signin.png'



function Signinpic() {
  return (
    <div className='signinpic'>
      <img src={signinpic} alt='Signin' className='glass' />
      <div className='blur'></div>
    </div>
  )
}

export default Signinpic